<template>
	<div>
		{{this.dataToday}}
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
	</div>
</template>

<script>
	import {
		incomeAll
	} from "@/api"
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				dataToday: [],
			}
		},
		computed: {
			
		},
		mounted() {
			incomeAll().then(res => {
				this.dataToday=res
			}).then(()=>{
				this.drawLine(this.dataToday);
			})
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
				let source=[];
				source[0]=new Array("product","总数量","总收入");
				for (var i = 0; i < arr.length; i++) {
					let d=new Array();
					d.push(arr[i].name);
					d.push(arr[i].sumweight);
					d.push(arr[i].sum);
					source.push(d);
				}
				return source
			}
		}
	}
</script>
