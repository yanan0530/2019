<template>
	<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
	 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span slot="title">报表</span>
			</template>
			<!-- <el-menu-item-group>
				<el-menu-item index="/allIncomeReport">产品数据</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group>
				<el-menu-item index="yearIncomeReport">年度月数据</el-menu-item>
			</el-menu-item-group> -->
			<el-menu-item-group>
				<el-menu-item index="dateIncomeReport">时间报表</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
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
