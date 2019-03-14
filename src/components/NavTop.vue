<template>
	<el-menu
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
		:router="true"
	>	
		<el-menu-item index="/bug" class="right">Bug</el-menu-item>
		<el-menu-item index="/role" class="right">管理员</el-menu-item>
		<el-menu-item index="/index" class="right">首页</el-menu-item>
		<el-menu-item index="/season" class="right">季节</el-menu-item>
		<el-menu-item index="/income" class="right">输入</el-menu-item>
		<el-menu-item index="/tree" class="right">Tree</el-menu-item>
		<el-submenu index="2" class="right">
			<template slot="title">我的工作台</template>
			<el-menu-item index="/vegetables">蔬菜</el-menu-item>
			<el-menu-item index="2-2">选项2</el-menu-item>
			<el-menu-item index="2-3">选项3</el-menu-item>
		</el-submenu>
		<el-menu-item index="/index" class="left">
			<img src="@/assets/logo.png" height="60px" />
		</el-menu-item>
	</el-menu>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>
<style scoped="scoped">
.right {
	float: right !important;
}
.left {
	float: left !important;
}
</style>
