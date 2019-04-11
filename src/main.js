import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from '@/store'
import './plugins/element.js'

import echarts from 'echarts'

Vue.prototype.$echarts = echarts 

//富文本
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)


Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
	
	
	let name = to.name;
	let label = to.meta.title;
	let tabList = {
		name,
		label
	}
	store.dispatch('tabListData', tabList).then(() => {
		if(to.path !="/login"){
			 if(store.getters.getLoginUser ==null){
				/* next("/login") */
				next()
			}else{
				next()
			} 
		}else{
			next()
		}
	}) 
})


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
