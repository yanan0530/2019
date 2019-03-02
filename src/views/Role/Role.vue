<template>
	<div>
		<el-button @click="roleAdd" style="margin-bottom: 8px;">添加</el-button>
		<div class="block">
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page.sync="currentPage2"
				:page-sizes="[4, 5, 6, 7]"
				:page-size="pageSize"
				layout="sizes, prev, pager, next"
				:total="total"
			></el-pagination>
		</div>
		<el-table :data="cRoleData" style="width: 100%">
			<el-table-column prop="userName" label="角色账户"></el-table-column>
			<el-table-column prop="userRealName" label="角色名称"></el-table-column>
			<el-table-column prop="userPhone" label="联系电话"></el-table-column>
			<el-table-column prop="auth" label="拥有的权限" width="600"></el-table-column>
			<el-table-column prop="userUseWangwang" label="最后操作人"></el-table-column>
			<el-table-column fixed="right" label="权限操作">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">
						修改
					</el-button>
					<el-button
						type="text"
						size="small"
						@click.native.prevent="deleteRow(scope.$index, cRoleData)"
					>
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-dialog title="编辑角色权限" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="角色账户" label-width="120px">
					<el-input v-model="form.userName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="角色名称" label-width="120px">
					<el-input v-model="form.userRealName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="设置权限" label-width="120px">
					<el-checkbox v-model="form.userSaleRank">售前管理</el-checkbox>
					<el-checkbox v-model="form.userProRank">生产管理员</el-checkbox>
					<el-checkbox v-model="form.userSendRank">补发管理员</el-checkbox>
					<el-checkbox v-model="form.userExpressRank">快递管理员</el-checkbox>
					<el-checkbox v-model="form.userQualityRank">质检管理员</el-checkbox>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="subFrom">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { roleList } from '@/api/index.js';
export default {
	data() {
		return {
			roleData: [],
			dialogFormVisible: false,
			currentPage2: 1,
			pageSize: 4,
			total: 14,
			form: {
				userName: '',
				userRealName: '',
				userSaleRank: false,
				userProRank: false,
				userSendRank: false,
				userExpressRank: false,
				userQualityRank: false
			}
		};
	},
	computed: {
		cRoleData() {
			let startNum = this.pageSize * (this.currentPage2 - 1);
			let data = this.roleData;
			return data.slice(startNum, startNum + this.pageSize);
		}
	},
	methods: {
		handleSizeChange(val) {
			this.pageSize = val;
		},
		handleCurrentChange(val) {
			this.currentPage2 = val;
		},
		handleClick(row) {
			this.dialogFormVisible = true;
			this.form.userName = row.userName;
			this.form.userRealName = row.userRealName;
			row.userSaleRank == 'Y'
				? (this.form.userSaleRank = true)
				: (this.form.userSaleRank = false);
			row.userProRank == 'Y'
				? (this.form.userProRank = true)
				: (this.form.userProRank = false);
			row.userSendRank == 'Y'
				? (this.form.userSendRank = true)
				: (this.form.userSendRank = false);
			row.userExpressRank == 'Y'
				? (this.form.userExpressRank = true)
				: (this.form.userExpressRank = false);
			row.userQualityRank == 'Y'
				? (this.form.userQualityRank = true)
				: (this.form.userQualityRank = false);
		},
		deleteRow(index, rows) {
			rows.splice(index, 1);
		},
		/* 提交按钮事件 */
		subFrom() {
			this.dialogFormVisible = false;
			let form = this.form;
			let subData = this.roleData.filter(item => item.userName == form.userName);
			subData[0].auth = '111';
		},
		// 新增
		roleAdd() {
			this.clearFrom();
			this.dialogFormVisible = true;
		},
		// 清空form
		clearFrom() {
			this.form.userName = '';
			this.form.userRealName = '';
			this.form.userSaleRank = false;
			this.form.userProRank = false;
			this.form.userSendRank = false;
			this.form.userExpressRank = false;
			this.form.userQualityRank = false;
		}
	},

	async mounted() {
		const data = await roleList();
		this.total = data.length;
		let l = data.length;
		for (var i = 0; i < l; i++) {
			let arr = new Array();
			data[i].userSaleRank == 'Y' ? arr.push('售前管理员') : null;
			data[i].userProRank == 'Y' ? arr.push('生产管理员') : null;
			data[i].userSendRank == 'Y' ? arr.push('补发管理员') : null;
			data[i].userExpressRank == 'Y' ? arr.push('快递管理员') : null;
			data[i].userQualityRank == 'Y' ? arr.push('质检管理员') : null;
			data[i].userSuperRank == 'Y' ? arr.unshift('超级管理员:角色管理') : null;
			data[i].auth = arr.join('，  ');
		}
		this.roleData = data;
	}
};
</script>
