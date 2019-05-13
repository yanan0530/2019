<template>
	<el-row :gutter="24">
		<el-col :span="1">
			<i class="el-icon-menu" @click="isC"></i>
		</el-col>
		<el-col :span="23" width="100%">
				<el-menu
					:default-active="$route.path"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
					:router="true"
				>	
					<el-menu-item index="/projects" class="right">种植计划</el-menu-item>
					<el-menu-item index="/income" class="right">收入单据</el-menu-item>
					<el-menu-item index="/projectscourse" class="right">种植历程</el-menu-item>
					<el-menu-item index="/records" class="right">日常记录</el-menu-item>
					<el-submenu index="2" class="right">
						<template slot="title">我的工作台</template>
						<el-menu-item index="/vegetables">蔬菜</el-menu-item>
						<el-menu-item index="/thing">事情</el-menu-item>
						<el-menu-item index="/area">区域管理</el-menu-item>
					</el-submenu>
				</el-menu>
			
		</el-col>
	</el-row>
</template>
<script>
export default {
	data() {
		return {
		};
	},
	methods: {
		handleSelect(key, keyPath) {
		},
		isC(){
			this.$store.dispatch('changeCollapse')
		}
	}
};
</script>
<style scoped="scoped">
	.el-row{
		margin-left: 0px !important;
		margin-right: 0px !important;
	}
.right {
	float: right !important;
}
.left {
	float: left !important;
}
</style>
