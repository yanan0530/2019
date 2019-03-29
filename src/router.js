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
				path: 'user',
				component: User
			},
			{
				path: 'dept',
				component: Dept
			}
		]
	}, {
		path: '/index',
		name: 'index',
		component: Index,
	}, {
		path: "/",
		redirect: {
			name: 'index'
		},
	}, {
		path: "/login",
		name:'logon',
		component: Login,
		meta:{
			title:"登录"
		}
	}, {
		path: "/bug",
		name:'bug',
		component: Bug,
		meta:{
			title:"错误"
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
		meta:{
			title:"蔬菜"
		}
	}, {
		path: '/vegetables',
		component: Vegetables
	}, {
		path: '/income',
		component: Income

	}],
	mode: 'history'
})
