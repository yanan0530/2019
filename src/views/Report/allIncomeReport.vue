<template>
	<div>
		{{dataToday}}
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="年份">
			<el-radio-group v-model="yearRadio" size="medium">
				<el-radio-button  :label="year" v-for="year in setTimeArr.year "></el-radio-button>
			</el-radio-group>
			</el-form-item>
			<el-form-item label="月">
			<el-radio-group v-model="mounthRadio" size="medium">
				<el-radio-button  :label="mounth" v-for="mounth in 12"></el-radio-button>
			</el-radio-group>
			</el-form-item>
			<el-form-item label="日">
			<el-radio-group v-model="dayRadio" size="medium">
				<el-radio-button  :label="day" v-for="day in setTimeArr.day"></el-radio-button>
			</el-radio-group>
			</el-form-item>
		</el-form>
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
	</div>
</template>

<script>
	import {
		incomeAll
	} from "@/api/index"
	import{
		removeArr
	}from "@/assets/common.js"
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				dataToday: [],
				yearRadio: [],
				mounthRadio:[],
				dayRadio:[]
			}
		},
		watch:{
			yearRadio(val,oldVal){
				this.setYearData(val)
			}
		},
		computed: {
			setTimeArr() {
				let yearArr = new Array();
				let mounthArr = new Array();
				let dayArr = new Array();
				let data = this.dataToday;
				for (var i = 0; i < data.length; i++) {
					yearArr[i] = data[i].datetime.split("-")[0];
					mounthArr[i]= data[i].datetime.split("-")[1];
					dayArr[i]= data[i].datetime.split("-")[2];
				}
				return {"year":removeArr(yearArr),"mounth":removeArr(mounthArr),"day":removeArr(dayArr)};
			}
			
		},
		async mounted() {
			this.dataToday = await incomeAll()
			this.drawLine(this.dataToday);
		},
		methods: {
			drawLine(res) {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				myChart.clear();
				// 绘制图表
				// 指定图表的配置项和数据
				var option = {
					legend: {},
					tooltip: {},
					dataset: {
						// 提供一份数据。
						source: this.echartData(res)
					},
					// 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
					xAxis: {
						type: 'category'
					},
					// 声明一个 Y 轴，数值轴。
					yAxis: {},
					// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
					series: [{
							type: 'bar'
						},
						{
							type: 'bar'
						}
					]
				}
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			echartData(arr) {
				let source = [];
				source[0] = new Array("product", "总数量", "总收入");
				for (var i = 0; i < arr.length; i++) {
					let d = new Array();
					d.push(arr[i].name);
					d.push(arr[i].sumweight);
					d.push(arr[i].sum);
					source.push(d);
				}
				return source
			},
			setYearData(year){
				let data=this.dataToday;
				let eData=data.filter(d=>d.datetime.split("-")[0]==year)
				this.drawLine(eData)
			}
		}
	}
</script>
