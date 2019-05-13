<template>
	<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
	 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
		<el-menu-item index="datadayprice">每年每日蔬菜均价</el-menu-item>
		<el-menu-item index="dateIncomeReport">时间报表</el-menu-item>
	</el-menu>
</template>

<style scoped="scoped">
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 200px;
		min-height: 400px;
	}
	.el-menu {
		border-right-width: 0px !important;
	}
</style>
<script>
	export default {
		data() {
			return {
			};
		},
		computed: {
			isCollapse() {
				return this.$store.state.nav.isCollapse
			}
		},
		methods: {
			handleOpen(key, keyPath) {
			},
			handleClose(key, keyPath) {
			}
		}
	}
</script>
