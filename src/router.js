import Vue from 'vue'
import Router from 'vue-router'

import Platfrom from '@/views/platform/Index'
import User from '@/views/platform/User'
import Dept from '@/views/platform/Dept'

import Login from "@/views/Login/Login.vue"

import Bug from '@/views/bug/Index'
import Tree from '@/views/bug/Tree.vue'

import Index from '@/views/index/Index.vue'

import Season from "@/views/Season/Index.vue"
//蔬菜管理
import Vegetables from '@/views/Vegetables/Vegetables.vue'
import VegetablesPrice from '@/views/Vegetables/VegetablesPrice'
import Income from '@/views/Income/Index'

//报表  
import AllIncomeReport from "@/views/Report/allIncomeReport"
import YearIncomeReport from "@/views/Report/YearIncomeReport"
import DateIncomeReport from "@/views/Report/DateIncomeReport"
import DataDayPrice from '@/views/Report/DataDayPrice.vue'
//事情 
import ThingIndex from '@/views/Thing/Index.vue';
//种植计划
import Projects from "@/views/Projects.vue"
import Area from "@/views/Area.vue"
import Records from "@/views/Records.vue"
//历程
import ProjectsCourse from "@/views/ProjectsCourse.vue"


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
			meta: {
				rule: "1234"
			}
		}, {
			path: '/thing',
			name: 'thing',
			component: ThingIndex,
			meta: {
				title: "事情管理"
			}
		}, {
			path: "/",
			name: 'index',
			component: Index,
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
			path: "/allIncomeReport",
			component: AllIncomeReport,
			name: "allIncomeReport",
			meta: {
				title: "年度数据"
			}
		}, {
			path: "/yearIncomeReport",
			component: YearIncomeReport,
			name: "yearIncomeReport",
			meta: {
				title: "年度月数据"
			}
		}, {
			path: "/dateIncomeReport",
			component: DateIncomeReport,
			name: "dateIncomeReport",
			meta: {
				title: "时间数据"
			}
		}, {
			path: '/vegetables',
			component: Vegetables,
			name: 'vegetables',
			meta: {
				title: "蔬菜管理"
			}
		}, {
			path: '/vegetablesprice',
			component: VegetablesPrice,
			name: 'vegetablesprice',
			meta: {
				title: "蔬菜价格管理"
			}
		}, {
			path: '/income',
			component: Income,
			name: "income",
			meta: {
				title: "收入单据"
			}
		}, {
			path: '/projects',
			component: Projects,
			name: "projects",
			meta: {
				title: "种植计划"
			}
		}, {
			path: '/area',
			component: Area,
			name: "area",
			meta: {
				title: "区域管理"
			}
		}, {
			path: '/records',
			component: Records,
			name: "records",
			meta: {
				title: "日常记录单"
			}
		}, {
			path: '/projectscourse',
			name: 'ProjectsCourse',
			component: ProjectsCourse,
			meta: {
				title: "种植历程"
			}
		},
		{
			path: '/datadayprice',
			name: 'DataDayPrice',
			component: DataDayPrice,
			meta: {
				title: "每年每日蔬菜均价"
			}
		}
	],
	// mode: 'history'
})
