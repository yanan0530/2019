<template>
  <el-container id="app">
  	<el-header><nav-top></nav-top></el-header>
  	<el-main><router-view></router-view></el-main>
  </el-container>
</template>
<script>
import FormBug from '@/components/FormBug';
import NavTop from '@/components/NavTop';
export default {
	data() {
		return {};
	},
	components: {
		FormBug,
		NavTop
	}
};
</script>
<style scoped="scoped">
.el-container {
	height: 100vh;
}
.el-header {
	background-color: #b3c0d1;
	color: #333;
	text-align: center;
	line-height: 60px;
	padding: 0px;
}
.el-main {
	background: #f5f7f9;
	color: #333;
}
</style>

