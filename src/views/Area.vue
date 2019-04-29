<template>
	<div>
		<el-row>
			<el-form ref="form" :model="form"  label-width="80px" :inline="true">
				<el-form-item label="区域名称" >
					<el-input v-model="form.areaname"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit" >立即创建</el-button>
					<el-button @click="resetForm">取消</el-button>
				</el-form-item>
			</el-form>
		</el-row>
		<el-row>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column label="区域" prop="areaname"></el-table-column>
				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
						<el-button type="text" size="small" @click="delClick(scope.row.id)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-row>
	</div>
</template>

<script>
	import {areaAll,areaSave,areaDel} from "@/api/index.js"
	export default {
		data() {
			return {
				vegeoptions: [],
				form: {
					id: '',
					areaname: '',
				},
				tableData: []
			}
		},
		mounted() {
			areaAll().then(data => {
				this.tableData = data
			})
		},
		methods: {
			onSubmit() {
				let data = this.form
				areaSave(data).then(res => {
					if (res) {
						this.$router.go(0)
					}
				})
			},
			delClick(d) {
				areaDel(d).then(res => {
					if (res) {
						this.$router.go(0)
					}
				})
			},
			handleClick(row) {
				this.form=row
			},
			resetForm(){
				this.form={
					id: '',
					areaname: '',
				}
			}

		},
	}
</script>
