<template>
	<div>
		{{this.dataToday}}
		<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
	</div>
</template>

<script>
	import {
		incomeToday
	} from "@/api"
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				dataToday: null,
			}
		},
		computed: {
			
		},
		mounted() {
			
			incomeToday().then(res => {
				
				this.drawLine(res);
			})
		},
		methods: {
			drawLine(res) {
				console.info(this.echartData(res)["sData"])
				
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				myChart.clear();
				// 绘制图表
				// 指定图表的配置项和数据
				var option = {
					title: {
						text: 'ECharts 入门示例'
					},
					tooltip: {},
					legend: {
						data: ['销量']
					},
					xAxis: {
						data: this.echartData(res)["xName"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: this.echartData(res)["sData"]
					}]
				};

				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			echartData(arr){
				let optionToday = {
					"xName": [],
					"sData": []
				};
				for (var i = 0; i < arr.length; i++) {
					optionToday.xName[i] = arr[i].vegetable
					optionToday.sData[i] = arr[i].sum
				}
				return optionToday
			}
		}
	}
</script>
