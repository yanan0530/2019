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
					<el-menu-item index="/bug" class="right">
						 <span slot="title">Bug</span>
					</el-menu-item>
					<el-menu-item index="/role" class="right">
						<span slot="title">管理员</span>
					</el-menu-item>
					<el-menu-item index="/" class="right">首页</el-menu-item>
					<el-menu-item index="/season" class="right">季节</el-menu-item>
					<el-menu-item index="/income" class="right">输入</el-menu-item>
					<el-menu-item index="/tree" class="right">Tree</el-menu-item>
					<el-submenu index="2" class="right">
						<template slot="title">我的工作台</template>
						<el-menu-item index="/vegetables">蔬菜</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
						<el-menu-item index="2-3">选项3</el-menu-item>
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
			console.log(key, keyPath);
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
