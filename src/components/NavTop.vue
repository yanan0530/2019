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
