<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px" :inline="true">
			<el-form-item label="事情"><el-input v-model="form.name"></el-input></el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="id" label="id"></el-table-column>
			<el-table-column label="事情" prop="name"></el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
					<el-button type="text" size="small" @click="delClick(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import { thingAll, thingSave,thingDel } from '@/api/index.js';
export default {
	data() {
		return {
			form: {
				id: '',
				name: ''
			},
			tableData: []
		};
	},
	async mounted() {
		this.tableData = await thingAll();
	},
	methods: {
		onSubmit() {
			thingSave(this.form).then(res => {
				if (res) {
					this.$router.go(0);
				}
			});
		},
		handleClick(row) {
			this.form = row;
		},
		delClick(id){
			this.$yn.delConfirm(id,this.delFun)
		},
		delFun(id){
			thingDel(id).then(res=>{
				if (res) {
					this.$router.go(0);
				}
			})
		}
	}
};
</script>

<style></style>
