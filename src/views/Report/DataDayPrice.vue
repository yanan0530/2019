<template>
	<div>
		<el-row>
			<el-form>
				<el-form-item label="蔬菜">
					<el-radio v-model="vegetableId" :label="item.id" v-for="(item, index) in vegetables" :key="index">{{ item.name }}</el-radio>
				</el-form-item>
			</el-form>
		</el-row>
		<el-row>
			<div id="myChart" :style="{ width: '100%', height: '65vh' }"></div>
		</el-row>
	</div>
</template>

<script>
	import {
		incomeYearsArray,
		incomeMountDayArray,
		incomeDataMountDayData
	} from '@/api/index.js';
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				vegetableId: 2,
				option: {
					title: {
						text: '每年每日蔬菜均价'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: []
					},
					 grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					}, 
					toolbox: {
						show: true,
						feature: {
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['line', 'bar']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					calculable: true,
					xAxis: {
						type: 'category',
						data: []
					},
					yAxis: {
						type: 'value'
					},
					series: []
				}
			};
		},
		computed: {
			...mapState(['vegetables'])
		},
		watch: {
			vegetableId(newValue, oldValue) {
				this.optionsFun(newValue);
			}
		},
		async mounted() {
			this.optionsFun(this.vegetableId);
		},
		methods: {
			async optionsFun(id) {
				let year = await incomeYearsArray(id);
				this.option.legend.data = year;
				let mounthDay = await incomeMountDayArray(id);
				this.option.xAxis.data = mounthDay;
				let datas = await incomeDataMountDayData(id);
				this.option.series = new Array(); //初始化
				for (var i = 0; i < year.length; i++) {
					let obj = {
						name: year[i],
						type: 'line',
						markLine: {
							data: [{ type: 'average', name: '平均值' }]
						},
						label: {
							normal: {
								show: true,
								position: 'top'
							}
						}, 
						data: []
					};
					let kkk = new Array();
					for (var j = 0; j < mounthDay.length; j++) {
						let dateTime = year[i] + '-' + mounthDay[j];
						let price = datas.find(d => d.datetime == dateTime);
						if (!!price) {
							obj.data.push(price.unitprice);
						} else {
							obj.data.push(0);
						}
					}
					this.option.series.push(obj);
				}
				this.$yn.eBuild(this.$echarts, 'myChart', this.option);
			}
		}
	};
</script>

<style></style>
