import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: null,
		loginUser: sessionStorage.getItem('loginUser') ? JSON.parse(sessionStorage.getItem('loginUser')) : null,
		nav: {
			isCollapse: false,
			tabList: [],
			tabhover: '',
		},
		vegetables: null,
	},
	getters: {
		getLoginUser(state) {
			return state.loginUser;
		},
		getVegetable:state=>{
			return state.vegetables;
		}
	},
	mutations: {
		initVegetables(state, data) {
			state.vegetables = data;
		},
		initUser(state, data) {
			state.LoginUser = data;
		},
		changeCollapse(state) {
			state.nav.isCollapse = !state.nav.isCollapse
		},
		tabListDataM(state, data) {
			let name = data.name;
			let arr = state.nav.tabList
			state.nav.tabhover = name;
			for (var i = 0, l = arr.length; i < l; i++) {
				if (arr[i].name == name) {
					return false;
				}
			}
			state.nav.tabList.push(data);
		},
		delTabListM(state, index) {
			state.nav.tabList.splice(index, 1);
		}
	},
	actions: {
		changeCollapse(context) {
			context.commit("changeCollapse")
		},
		tabListData(context, data) {
			context.commit("tabListDataM", data)
		},
		delTabList(context, data) {
			var arr = this.state.nav.tabList;
			let index;
			for (var i in arr) {
				let name = arr[i].name
				if (name == data) {
					index = i
				}
			}
			context.commit('delTabListM', index)
		},
		initVegetables(context, data) {
			
			context.commit("initVegetables", data)
		}
	}
})
