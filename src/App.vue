<template>
  <el-container>
	<el-aside width="auto" style="background-color: rgb(84, 92, 100);"><nav-left></nav-left></el-aside>
		<el-container>
		<el-header><nav-top></nav-top></el-header>
		<el-main>
			<tabs-list></tabs-list>
			<el-card class="box-card">
			  <router-view></router-view>
			</el-card>
		</el-main>
	</el-container>
</el-container>
</template>
<script>
import FormBug from '@/components/FormBug';
import NavTop from '@/components/NavTop';
import NavLeft from '@/components/NavLeft'
import TabsList from '@/components/TabsList'
import {vegeInit} from '@/api'
export default {
	data() {
		return {};
	},
	provide(){
		
	},
	components: {
		FormBug,
		NavTop,
		NavLeft,
		TabsList
	},
	created() {
		vegeInit().then(res=>{
			this.$store.dispatch('initVegetables',res);
		})
	}
};
</script>
<style scoped="scoped">
.el-container ,.el-aside{
	height: 100vh;
}
.el-header {
	color: #333;
	text-align: center;
	line-height: 60px;
	padding: 0px;
	border-bottom:solid 1px #e6e6e6;
	height: 61px !important;
}
.el-main {
	background: #f5f7f9;
	color: #333;
}
</style>

