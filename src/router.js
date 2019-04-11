import Vue from 'vue'
import Router from 'vue-router'

import Platfrom from '@/views/platform/Index'
import User from '@/views/platform/User'
import Dept from '@/views/platform/Dept'

import Login from "@/views/Login/Login.vue"

import Bug from '@/views/bug/Index'
import Tree from '@/views/bug/Tree.vue'

import Index from '@/views/index/Index.vue'

import Role from "@/views/Role/Role"
import Season from "@/views/Season/Index.vue"
import Vegetables from '@/views/Vegetables/Vegetables.vue'

import Income from '@/views/Income/Index'
Vue.use(Router)



export default new Router({
	routes: [{
		path: '/platfrom',
		name: 'platfrom',
		component: Platfrom,
		children: [{
			path: 'dept',
			component: Dept
		}]
	}, {
		path: '/index',
		name: 'index',
		component: Index,
	}, {
		path: "/",
		redirect: {
			name: 'index'
		}
	}, {
		path: "/login",
		name: 'logon',
		component: Login,
		meta: {
			title: "登录"
		}
	}, {
		path: "/bug",
		name: 'bug',
		component: Bug,
		meta: {
			title: "错误"
		}
	}, {
		path: "/user",
		name: 'user',
		component: User,
		meta: {
			title: "用户管理"
		}
	}, {
		path: '/tree',
		component: Tree
	}, {
		path: "/role",
		component: Role,
		name: "role"
	}, {
		path: "/season",
		component: Season,
		name: "season",
		meta: {
			title: "报表"
		}
	}, {
		path: '/vegetables',
		component: Vegetables,
		name: 'vegetables',
		meta: {
			title: "蔬菜管理"
		}
	}, {
		path: '/income',
		component: Income,
		name: "income",
		meta: {
			title: "收入单据"
		}
	}],
	mode: 'history'
})
