<template>
	<el-form ref="formLogin" :model="formLogin" label-width="120px" :rules="rules">
		<el-form-item label="账号" prop="username">
			<el-input v-model="formLogin.username"></el-input>
		</el-form-item>
		<el-form-item label="工号" prop="worknum">
			<el-input v-model="formLogin.worknum"></el-input>
		</el-form-item>
		<el-form-item label="密码" prop="userpassword">
			<el-input v-model="formLogin.userpassword" type="password"></el-input>
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
import { mapMutations } from 'vuex';
import { login } from '@/api/index.js';
export default {
	data() {
		return {
			formLogin: {
				username: "历史",
				userpassword: "123456",
				token:"123"
			},
			remSet: false,
			autoLogin: false,
			rules: {
				username: [{ required: true, message: '请填写账号', trigger: 'blur' }],
				userpassword: [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		};
	},
	methods: {
		...mapMutations(["initUser"]),
		onSubmit(formname) {
			this.$refs[formname].validate().then(valid => {
				if (valid) {
					login(this.formLogin).then(res => {
						alert(res)
						sessionStorage.setItem('loginUser', JSON.stringify(this.formLogin));
						this.initUser(this.formLogin);
						this.$router.push('/index');
					});
				}
			});
		},
		resetForm(formname) {
			//重置
			this.$refs[formname].resetFields();
		}
	}
};
</script>
