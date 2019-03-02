<template>
	<div>
		 <div>
				<el-button @click="add()">添加</el-button>
				<el-button @click="edit()">编辑</el-button>
				<el-button @click="del()">删除</el-button>
				<el-button @click="toggleSelection()">取消选择</el-button>
		</div>
	  <el-table ref="multipleTable" :data="tableData3"  tooltip-effect="dark" style="width: 100%"  @selection-change="handleSelectionChange">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="loginName" label="登录名" width="120"></el-table-column>
			<el-table-column prop="name" label="姓名" width="120"></el-table-column>
			<el-table-column prop="jobNum" label="工号" width="120"></el-table-column>
			<el-table-column prop="phone" label="手机号" width="120"></el-table-column>
			<el-table-column prop="name" label="部门"  show-overflow-tooltip></el-table-column>
	  </el-table>
		<el-dialog title="编辑信息" :visible.sync="dialogFormVisible" @closed="close">
			<el-form :model="form" ref="form" :label-width="formLabelWidth">
				<el-form-item label="登录名称" prop="loginName">
					<el-input v-model="form.loginName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码"  prop="password">
					<el-input v-model="form.password" autocomplete="off" ></el-input>
				</el-form-item>
				<el-form-item label="姓名"  prop="name">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="工号"  prop="jobNum">
					<el-input v-model="form.jobNum" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="手机号"  prop="phone">
					<el-input v-model="form.phone" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="所属部门"  prop="depart">
					<el-input v-model="form.depart" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
  </div>
</template>

<script>
export default {
	data() {
		return {
			tableData3: [
				{
					loginName: '张三',
					password: '123456789',
					name: '张三',
					jobNum: '1',
					phone: '13176377715',
					depart: '行政部'
				},
				{
					loginName: '张三',
					password: '123456789',
					name: '张三',
					jobNum: '1',
					phone: '13176377715',
					depart: '行政部'
				}
			],
			multipleSelection: [],
			dialogFormVisible: false,
			formLabelWidth: '100px',
			form: {
				loginName: '',
				password: '',
				name: '',
				jobNum: '',
				phone: '',
				depart: ''
			}
		};
	},
	methods: {
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		add() {
			this.dialogFormVisible = true;
		},
		edit() {
			let l = this.multipleSelection.length;
			if (l != 1) {
				this.$notify.error({
					title: '警告',
					message: '请选择一条信息',
					type: 'warning',
				});
			} else {
				let data = JSON.parse(JSON.stringify(this.multipleSelection))[0];
				this.form = data;
				this.dialogFormVisible = true;
			}
		},
		del() {
			let l = this.multipleSelection.length;
			if (l == 0) {
				this.$notify.error({
					title: '警告',
					message: '请选择至少一条信息',
					type: 'warning',
				});
			} else {
				let data = JSON.parse(JSON.stringify(this.multipleSelection));
				console.info(data)
			}
		},
		close() {
			this.form = {
				loginName: '',
				password: '',
				name: '',
				jobNum: '',
				phone: '',
				depart: ''
			};
		}
	}
};
</script>
