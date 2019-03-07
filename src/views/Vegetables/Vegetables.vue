<template>
	<div>
		<el-form ref="form" :model="form" :rules="rulesForm" label-width="80px" :inline="true">
		  <el-form-item label="蔬菜名称" prop="name">
			<el-input v-model="form.name"></el-input>
		  </el-form-item>
		 <el-form-item>
			<el-button type="primary" @click="onSubmit" v-show="btnShow">立即创建</el-button>
			<el-button type="primary" @click="onSubmit" v-show="!btnShow">编辑</el-button>
			<el-button @click="resetForm">取消</el-button>
		  </el-form-item>
		</el-form>
		
		<el-table :data="tableData" border style="width: 100%">
		<el-table-column fixed prop="id" label="Id" ></el-table-column>
		<el-table-column prop="name" label="蔬菜" ></el-table-column>
		<el-table-column  label="操作" width="100">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
				<el-button type="text" size="small">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
	{{form.type}}
</div>
</template>

<script>
	import {
		vegetablesData,addVegetables
	} from '@/api'
export default {
	data() {
		return {
			tableData: [],
			btnShow:true,
			form:{
				id:0,
				name:'',
			},
			rulesForm:{
				name:[ { required: true, message: '请输入蔬菜名称', trigger: 'change' }]
			},
		};
	},
	methods: {
		handleClick(row) {
			this.form.id=row.id
			this.form.name=row.name
			this.btnShow=false
		},
		resetForm(){
			this.btnShow=true
			this.$refs['form'].resetFields();
		},
		onSubmit(){//添加
			this.$refs['form'].validate((valid)=>{
				if(valid){
					alert("提交");
					this.$refs['form'].resetFields();
				}else{
					return false
				}
			})
		}
	},
	async mounted(){
		this.tableData=await vegetablesData();
	},
	
};
</script>
