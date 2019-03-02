<template>
	<el-row class="tac">
		<el-col>
			<el-menu
				default-active="2"
				class="el-menu-vertical"
				:router="true"
				@open="handleOpen"
				@close="handleClose"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
			>
				<el-menu-item index="/bug/platfrom">
					<i class="el-icon-menu"></i>
					<span slot="title">平台管理</span>
				</el-menu-item>
				<el-menu-item index="/bug/sales">
					<i class="el-icon-menu"></i>
					<span slot="title">定制中心</span>
				</el-menu-item>
				<el-menu-item index="/bug/production">
					<i class="el-icon-menu"></i>
					<span slot="title">生产中心</span>
				</el-menu-item>
				<el-menu-item index="/bug">
					<i class="el-icon-menu"></i>
					<span slot="title">仓储中心</span>
				</el-menu-item>
				<el-submenu index="1">
					<template slot="title">
					  <i class="el-icon-location"></i>
					  <span>平台管理</span>
					</template>
					<el-menu-item-group>
					  <el-menu-item index="1-1">用户管理</el-menu-item>
					  <el-menu-item index="1-2">部门管理</el-menu-item>
					  <el-menu-item index="1-3">角色管理</el-menu-item>
					  <el-menu-item index="1-3">资源管理</el-menu-item>
					  <el-submenu index="1-4">
					    <template slot="title">基础信息</template>
					    <el-menu-item index="1-4-1">选项1</el-menu-item>
					  </el-submenu>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-col>
	</el-row>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		handleOpen(key, keyPath) {
			/* console.log(key, keyPath); */
		},
		handleClose(key, keyPath) {
			// console.log(key, keyPath);
		}
	}
};
</script>
<style scoped>
.el-menu-item,
.el-submenu {
	text-align: left;
}
</style>
