import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		nav:{
			isCollapse : false
		}
	},
	mutations: {
		changeCollapse(state){
			state.nav.isCollapse=!state.nav.isCollapse
			console.info(state.nav.isCollapse)
		}
	},
	actions: {
		changeCollapse(context){
			context.commit("changeCollapse")
		}
	}
})
