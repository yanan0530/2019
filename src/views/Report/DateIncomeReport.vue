<template>
	<div>
		<el-form ref="form" label-width="80px">
			<el-form-item label="日期">
				<el-date-picker v-model="yearRadio" align="right" type="year" placeholder="选择年" value-format="yyyy">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="月">
				<el-radio-group v-model="mounthRadio" size="medium">
					<el-radio-button label="year">所有</el-radio-button>
					<el-radio-button :label="mounth|fnName" v-for="mounth in 12"></el-radio-button>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="类型">
				<el-radio-group v-model="types">
					<el-radio label="总收入"></el-radio>
					<el-radio label="总斤数"></el-radio>
					<el-radio label="平均价格"></el-radio>
				</el-radio-group>
			</el-form-item>
		</el-form>
		<div id="myChart" :style="{width: '100%', height: '65vh'}">
		</div>
	</div>
</template>

<script>
	import {
		incomeDateAll
	} from "@/api/index"
	import {
		removeArr
	} from "@/assets/common.js"
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				dataToday: [],
				yearRadio: '',
				mounthRadio:'year',
				types: "总收入"
			}
		},
		watch: {
			yearRadio(val, oldval) {
				this.yearRadio = val
				this.mounthRadio="year";
				 incomeDateAll("year",val).then(res => {
					this.dataToday =res
					this.drawLine(res, this.types);
				})
			},
			mounthRadio(val,oldval){
				if(val=="year"){
					incomeDateAll("year",this.yearRadio).then(res => {
						this.dataToday =res
						this.drawLine(res, this.types);
					})
				}else{
					let date=this.yearRadio+"-"+val;
					incomeDateAll("mounth",date).then(res => {
						this.dataToday =res
						this.drawLine(res, this.types);
					})
				}
			},
			types(val, oldval) {
				console.info(this.dataToday)
			 	this.drawLine(this.dataToday, val);
			},
		},
		computed: {
			setYearArr() {
				let yearArr = new Array();
				let data = this.dataToday;
				for (var i = 0; i < data.length; i++) {
					yearArr[i] = data[i].datetime.split("-")[0];
				}
				return removeArr(yearArr);
			}
		},
		async mounted() {
			this.yearRadio = new Date().getFullYear().toString();
			this.dataToday = await incomeDateAll("year",new Date().getFullYear().toString());
			this.drawLine(this.dataToday);
		},
		methods: {
			drawLine(arrData, type = "总收入") {
				let text = this.yearRadio + "年每月" + type;
				let legendData = this.getOption(arrData, type)
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				myChart.clear();
				// 绘制图表
				// 指定图表的配置项和数据
				let option = {
					title: {
						text
					},
					legend: {},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					dataset: {
						// 提供一份数据。
						source: legendData.sourceTwo
					},
					// 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
					xAxis: {
						type: 'category',
						boundaryGap: false,
					},
					yAxis: {},
					// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
					series: legendData.series
				}
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			//获取所有蔬菜 和 时间
			getVegeAll(arr) {
				let getvege = new Array();
				let time = new Array();
				for (var i = 0; i < arr.length; i++) {
					getvege.push(arr[i].name)
					time.push(arr[i].datetime)
				}
				return {
					getvege: removeArr(getvege),
					time: removeArr(time)
				}
			},
			//获取所有信息
			getOption(arr, type) {
				let vegName = this.getVegeAll(arr).getvege
				let time = this.getVegeAll(arr).time
				let sourceOne = new Array();
				sourceOne[0] = "product"
				let sourceTwo = new Array();
				let series = []
				for (var n = 0; n < time.length; n++) {
					let timeArr = new Array()
					timeArr.push(time[n])
					for (var i = 0; i < vegName.length; i++) {
						sourceOne.push(vegName[i])
						series[i] = {
							type: 'line',
							areaStyle: {},
							label: {
								normal: {
									show: true,
									position: 'top'
								}
							},
						}
						for (var j = 0; j < arr.length; j++) {
							if (arr[j].datetime == time[n]) {
								switch (type) {
									case "总斤数":
										if (arr[j].name == vegName[i]) {
											timeArr.push(arr[j].weight)
										} else {
											timeArr.push(0)
										}
										break;
									case "平均价格":
										if (arr[j].name == vegName[i]) {
											timeArr.push(arr[j].unitprice)
										} else {
											timeArr.push(0)
										}
										break;
									default:
										if (arr[j].name == vegName[i]) {
											timeArr.push(arr[j].sum)
										} else {
											timeArr.push(0)
										}
								}
							}
						}
					}
					sourceTwo.push(timeArr)
				}
				sourceTwo.unshift(removeArr(sourceOne))
				return {
					sourceTwo,
					series
				}
			}

		},
		filters: {
			fnName: function(value) {
				return value<10? "0"+value:value;
			}
		}
	}
</script>
