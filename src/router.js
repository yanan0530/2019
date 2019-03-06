import Vue from 'vue'
import Router from 'vue-router'

import Platfrom from '@/views/platform/Index'
import User from '@/views/platform/User'
import Dept from '@/views/platform/Dept'

import Login from "@/views/Login/Login.vue"

import Bug from '@/views/bug/Index'

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
		component: Login
	}, {
		path: "/bug",
		component: Bug
	}, {
		path: "/role",
		component: Role,
		name: "role"
	}, {
		path: "/season",
		component: Season,
		name: "Season"
	}, {
		path: '/vegetables',
		component: Vegetables
	}, {
		path:'/income',
		component:Income
		
	}],
	mode: 'history'
})
