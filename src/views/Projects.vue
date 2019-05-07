<template>
	<div>
		<el-row>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="蔬菜">
					<el-select v-model="form.vegeid" placeholder="请选择">
						<el-option v-for="item in vegeoptions" :key="item.id" :label="item.name" :value="item.id">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="时间">
					<el-date-picker v-model="form.createtime" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
					</el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">确定</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</el-row>
		<el-row>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column label="项目" prop="name"></el-table-column>
				<el-table-column label="创建时间" prop="createtime"></el-table-column>
				<el-table-column label="结束时间" prop="endtime"></el-table-column>
				<el-table-column label="当前状态">
					<template slot-scope="scope">
						<el-tag type="success" v-show="scope.row.state==1">正在种植</el-tag>
						<el-tag type="warning" v-show="scope.row.state!=1">已结束</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="总收入" prop="sum"></el-table-column>
				<el-table-column label="总产量" prop="weight"></el-table-column>
				<el-table-column label="均价" prop="average"></el-table-column>
				<el-table-column label="总天数" >
					<template slot-scope="scope">
						{{scope.row.endtime|showDate(scope.row.createtime)}}天
					</template>
				</el-table-column>
				<el-table-column label="每日收益" >
					<template slot-scope="scope">
						{{scope.row.endtime|showDate(scope.row.createtime)|dailyIncome(scope.row.sum)}}元
					</template>
				</el-table-column>
				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">改变状态</el-button>
						<el-button type="text" size="small" @click="delClick(scope.row.id)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-row>
	</div>
</template>

<script>
	import {
		vegeList,
		projectSave,
		projectAll,
		projectDel,
		projectUpdate
	} from "@/api/index.js"
	export default {
		data() {
			return {
				vegeoptions: [],
				form: {
					vegeid: '',
					createtime: '',
					state: 1,
				},
				tableData: []
			}
		},
		mounted() {
			vegeList().then(data => {
				this.vegeoptions = data
			})
			projectAll().then(data => {
				this.tableData = data
			})
		},
		methods: {
			onSubmit() {
				let data = this.form
				projectSave(data).then(res => {
					if (res) {
						this.$router.go(0)
					}
				})
			},
			delClick(d) {
				this.$yn.delConfirm(id,this.delFun)
			},
			delFun(id){
				projectDel(id).then(res => {
					if (res) {
						this.$router.go(0)
					}
				})
			},
			handleClick(row) {
				projectUpdate(row).then(res => {
					if (res) {
						this.$router.go(0)
					}
				})
			}

		},
	}
</script>

<style>
</style>
