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
			<el-table-column prop="name" label="姓名" width="120"></el-table-column>
			<el-table-column prop="id" label="Id" width="120"></el-table-column>
			<el-table-column prop="age" label="年龄" width="120"></el-table-column>
	  </el-table>
		<el-dialog title="编辑信息" :visible.sync="dialogFormVisible" @closed="close">
			<el-form :model="form" ref="form" :label-width="formLabelWidth">
				<el-form-item label="id"  prop="id">
					<el-input v-model="form.id" type="number" autocomplete="off" ></el-input>
				</el-form-item>
				<el-form-item label="姓名"  prop="name">
					<el-input v-model="form.name" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="年龄"  prop="jobNum">
					<el-input v-model="form.age" autocomplete="off"></el-input>
				</el-form-item>
				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="subSumit">确 定</el-button>
			</div>
		</el-dialog>
  </div>
</template>

<script>
 import {userList,addUser,delUser} from "@/api"
export default {
	data() {
		return {
			tableData3: [],
			multipleSelection: [],
			dialogFormVisible: false,
			formLabelWidth: '100px',
			form: {
				id: '',
				name: '',
				age: 18,
			}
		};
	},
	async mounted() {
		this.tableData3=await userList()
	},
	methods: {
		subSumit(){
			this.dialogFormVisible = false
			addUser(this.form).then(res=>{
			})
		},
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
				delUser({"id":data[0].id}).then(res=>{
					if(res==true){
						this.$router.go(0);
						/* userList().then(res=>{
							this.tableData3=res;
						}) */
					}
				})
			}
		},
		close() {
			this.form= {
				id: '',
				name: '',
				age: 18,
			};
		}
	}
};
</script>
