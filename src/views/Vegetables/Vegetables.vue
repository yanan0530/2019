<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px" :inline="true">
			<el-form-item label="Id">
				<el-input v-model="form.id"></el-input>
			</el-form-item>
		  <el-form-item label="蔬菜名称">
			<el-input v-model="form.name"></el-input>
		  </el-form-item>
		 <el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button>取消</el-button>
		  </el-form-item>
		</el-form>
		
		<el-table :data="tableData" border style="width: 100%">
		<el-table-column fixed prop="id" label="Id" ></el-table-column>
		<el-table-column prop="name" label="蔬菜" ></el-table-column>
		<el-table-column  label="操作" width="100">
			<template slot-scope="scope">
				<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
				<el-button type="text" size="small">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
	{{form.type}}
</div>
</template>

<script>
	import {
		vegetablesData
	} from '@/api'
export default {
	methods: {
		handleClick(row) {
			console.log(row);
		},
		onSubmit(){
			
		}
	},
	async mounted(){
		this.tableData=await vegetablesData();
	},
	data() {
		return {
			tableData: [],
			form:{
				id:0,
				name:'',
			}
		};
	}
};
</script>
