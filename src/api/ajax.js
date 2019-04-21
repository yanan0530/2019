import axios from 'axios'
import store from '@/store.js'
import router from '@/router.js'
import {
	MessageBox,
	Notification
} from 'element-ui';
import {
	login
} from "@/api/index.js"

//请求
/* axios.interceptors.request.use((config)=>{
	var token=localStorage.getItem('token')
	config.headers['token']=token
	return config
})
//响应拦截器
axios.interceptors.response.use(res=>{
	var token='721f759b129ad3c2d534'
	localStorage.setItem('token',token)
	return res
})
axios.defaults.validateStatus=function(status){
			return status >= 200 && status < 300; 
		} */
//请求
axios.interceptors.request.use((config) => {
	//获取缓存是否有值
	/* if (store.getters.getLoginUser) {
		//设置头部
		config.headers.token = `${store.getters.getLoginUser.token}`;
	}else {//空直接跳转登录页面
		router.push('/login');
	} */
	return config
})
//响应拦截器
axios.interceptors.response.use(res => {
	//此处判断返回状态 如何1 证明过期 然后跳转登录页面
	if (res.data.code == 1) {
		let username=store.getters.getLoginUser.username
		MessageBox.prompt(`${username}`, "提示", {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
		})
		.then(({
			value
		}) => {
			login({username,userpassword:value}).then(res=>{
				Notification.success({
					title: `你好!${username}`,
					message:"欢迎登录花生定制",
					duration:2000,
				})
			})
		}).catch(() => {
			MessageBox.message({
				type: 'info',
				message: '取消输入'
			})
		})
	}
	return res
}) 
export default function ajax(url, data = {}, type = 'GET') {
	
	return new Promise(function(resolve, reject) {
		let promise

		if (type === 'GET') {
			let dataStr = ''
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&'
			})
			if (dataStr !== '') {
				dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
				url = url + '?' + dataStr
			}
			promise = axios.get(url)
		} else {
			promise = axios.post(url, data)
		}
		promise.then(response => {
			resolve(response.data)
		}).catch(error => {
			reject(error)
		})
	})

}
