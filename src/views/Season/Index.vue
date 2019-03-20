<template>
	<div>
		<el-form ref="form" :model="form" :rules="fromrules" label-width="80px" :inline="true">
			<el-form-item label="季节名称" prop="name">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="种植蔬菜" prop="type">
				<el-checkbox-group v-model="form.type" >
					<el-checkbox
						v-for="option in VegetableOptions"
						:label="option.id"
						:key="option.id"
						name="type"
					>
						{{ option.name }}
					</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed prop="id" label="Id"></el-table-column>
			<el-table-column prop="seasonName" value="1" label="季节"></el-table-column>
			<el-table-column prop="Vegetables" label="蔬菜"></el-table-column>
			<el-table-column prop="startTime" label="开始时间"></el-table-column>
			<el-table-column prop="endTime" label="结束时间"></el-table-column>
			<el-table-column prop="state" label="状态"></el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">
						查看
					</el-button>
					<el-button type="text" size="small">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<PaginationCommon></PaginationCommon>
		{{ this.form.type }}
	</div>
</template>
<script>
import { seasonData, vegetablesData} from '@/api'

import PaginationCommon from "@/components/PaginationCommon.vue"
export default {
	async beforeRouteUpdate (to, from, next) {
		this.tableData=await seasonData(to.query)
		next()
	},
	methods: {
		handleClick(row) {
		},
		onSubmit() {
			this.$refs['form'].validate((valid)=>{
				if(valid){
					alert(1)
				}else{
					alert("失败")
				}
			})
		}
	},
	async mounted() {
		this.tableData = await seasonData();
		this.VegetableOptions = await vegetablesData();
	},
	data() {
		return {
			tableData: [],
			VegetableOptions: [],
			form: {
				id: 0,
				name: '',
				type: [],
				endTime: null,
				state: false
			},
			fromrules: {
				name: [{ required: true, message: '请填写季节的名称', trigger: 'blur' }],
				type: [
					{
						required: true,
						message: '至少选择一种蔬菜',
						trigger: 'change',
						type: 'array'
					}
				]
			}
		};
	},
	components:{
		PaginationCommon
	}
};
</script>
