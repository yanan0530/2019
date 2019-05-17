<template>
	<div id="VegetablesPrice">
		<el-row>
			<el-form :model="form" ref="form" label-width="80px" :inline="true" :rules="rules">
				<el-form-item label="蔬菜" prop="vegetableId">
					<el-radio v-model="form.vegetableId" :label="v.id" v-for="(v, index) in vegetables" :key="index">{{ v.name }}</el-radio>
				</el-form-item>
				<el-form-item label="价格" prop="unitprice"><el-input v-model="form.unitprice"></el-input></el-form-item>
				<el-form-item label="日期" prop="datetime">
					<el-date-picker v-model="form.datetime" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">确定</el-button>
					<el-button type="primary" @click="resetForm">重置</el-button>
				</el-form-item>
			</el-form>
		</el-row>
		<el-row>
			<el-table :data="tableData" style="width: 100%">
				<el-table-column prop="datetime" label="日期" width="180"></el-table-column>
				<el-table-column prop="name" label="蔬菜名称" width="180"></el-table-column>
				<el-table-column prop="unitprice" label="平均价格" width="180"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button @click="editClick(scope.row)" type="text" size="small">
							编辑
						</el-button>
						<el-button type="text" size="small" @click="delClick(scope.row.id)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-row>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import { vpList, vpSave, vpDel } from '@/api/index.js';
export default {
	name: 'VegetablesPrice',
	data() {
		return {
			tableData: null,
			form: {
				id: null,
				vegetableId: null,
				unitprice: null,
				datetime: ''
			},
			rules: {
				vegetableId: [{ required: true, message: '请选择蔬菜', trigger: 'blur' }],
				datetime: [{ required: true, message: '请选择时间', trigger: 'blur' }],
				unitprice: [{ required: true, message: '请输入均价', trigger: 'blur' }]
			}
		};
	},
	computed: {
		...mapState(['vegetables'])
	},
	async mounted() {
		this.tableData = await vpList();
	},
	methods: {
		onSubmit() {
			let data = this.form;
			this.$refs['form'].validate(valid => {
				if (valid) {
					vpSave(data).then(res => {
						if (res) {
							this.$refs['form'].resetFields();
							vpList().then(res => {this.tableData = res;});
						}
					});
				}
			});
		},
		resetForm() {
			this.$refs['form'].resetFields();
		},
		delClick(id) {
			this.$yn.delConfirm(id,this.delFun)
		},
		delFun(id){
			vpDel(id).then(res => {
				res ? vpList().then(res => {this.tableData = res;}) : alert("删除失败")
			})
		},
		editClick(row){
			this.form=row
		}
	}
};
</script>
