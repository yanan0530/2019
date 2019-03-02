<template>
	 <el-form ref="formLogin" :model="formLogin" label-width="120px" :rules="rules">
		<el-form-item label="账号" prop="username">
			<el-input v-model="formLogin.username" ></el-input>
		</el-form-item>
		<el-form-item label="工号" prop="worknum">
			<el-input v-model="formLogin.worknum"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="password">
			<el-input v-model="formLogin.password" type="password"></el-input>
		</el-form-item>
		<el-form-item>
			<el-checkbox v-model="autoLogin">记住密码</el-checkbox>
			<el-checkbox v-model="remSet">自动登录</el-checkbox>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit('formLogin')">立即创建</el-button>
			<el-button type="primary" @click="resetForm('formLogin')">重置</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
export default {
	data(){
		return {
			formLogin:{
				username:null,
				worknum:null,
				password:null
			},
			remSet:false,
			autoLogin:false,
			rules:{
				username:[
					{required:true,message:'请填写账号',trigger:'blur'}
				],
				password:[
					{required:true,message:'请输入密码',trigger:'blur'}
				]
			}
		}
	},
	methods:{
		onSubmit(formname){
			this.$refs[formname].validate().then(valid=>{
				console.info(valid)
			})
		},
		resetForm(formname){//重置
			this.$refs[formname].resetFields()
		}
	}
};
</script>
