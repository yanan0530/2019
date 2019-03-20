import axios from 'axios'
import store from '@/store'
//请求
axios.interceptors.request.use((config)=>{
	console.info(store.state.nav.isCollapse)
	var token=localStorage.getItem('token')
	config.headers['token']=token
	return config
})
//响应拦截器
axios.interceptors.response.use(res=>{
	// var token=res.headers.token
	// axios.defaults.headers.common['token']='721f759b129ad3c2d534'; 
	var token='721f759b129ad3c2d534'
	localStorage.setItem('token',token)
	return res
})
axios.defaults.validateStatus=function(status){
			return status >= 200 && status < 300; 
			 // return /^(2|3)\d{2}$/.test(status)
		}
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
