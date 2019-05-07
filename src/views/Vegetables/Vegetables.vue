<template>
	<div>
		<el-form ref="form" :model="form" :rules="rulesForm" label-width="80px" :inline="true">
			<el-form-item label="蔬菜名称" prop="name">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="状态">
				<el-radio-group v-model="form.state">
					<el-radio :label="0">未种植</el-radio>
					<el-radio :label="1">种植</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" v-show="btnShow">立即创建</el-button>
				<el-button type="primary" @click="onSubmit" v-show="!btnShow">编辑</el-button>
				<el-button @click="resetForm">取消</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed prop="id" label="Id"></el-table-column>
			<el-table-column prop="name" label="蔬菜"></el-table-column>
			<el-table-column prop="state" label="状态"></el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">
						编辑
					</el-button>
					<el-button type="text" size="small" @click="delClick(scope.row.id)">
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import {
		vegeList,
		vegeSave,
		vegeDel
	} from '@/api';
	export default {
		data() {
			return {
				tableData: [],
				btnShow: true,
				form: {
					id: '',
					name: '',
					state: 0
				},
				rulesForm: {
					name: [{
						required: true,
						message: '请输入蔬菜名称',
						trigger: 'change'
					}]
				}
			};
		},
		methods: {
			//编辑
			handleClick(row) {
				this.form.id = row.id;
				this.form.name = row.name;
				this.form.state=row.state;
				this.btnShow = false;
			},
			//重置
			resetForm() {
				this.btnShow = true;
				this.$refs['form'].resetFields();
			},
			//提交
			onSubmit() {
				//添加
				let data = this.form
				this.$refs['form'].validate(valid => {
					if (valid) {
						vegeSave(data).then(res => {
							if (res) {
								alert('提交成功');
							} else {
								alert('提交失败');
							}
						}).then(res => {
							this.$refs['form'].resetFields();
							this.$router.go(0);
						})
					} else {
						return false;
					}
				});
			},
			//删除
			delClick(id) {
				this.$yn.delConfirm(id,this.delFun)
			},
			delFun(id){
				vegeDel(id).then(res => {
					res ? this.$router.go(0) : alert("删除失败")
				})
			}
		},
		async mounted() {
			let data = await vegeList();
			this.tableData = data;
		}
	};
</script>
