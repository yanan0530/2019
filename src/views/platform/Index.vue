<template>
	<div>
		<el-container>
			<el-aside>
				<nav-platfrom></nav-platfrom>
			</el-aside>
			<el-container>
				<el-header></el-header>
				<el-main style="padding: 0px 50px;">
					<el-breadcrumb style="margin: 16px 0px;">
						<el-breadcrumb-item>首页</el-breadcrumb-item>
						<el-breadcrumb-item>活动列表</el-breadcrumb-item>
						<el-breadcrumb-item>活动详情</el-breadcrumb-item>
					</el-breadcrumb>
					<el-card class="box-card" style="min-height: 600px;">
						<router-view></router-view>
					</el-card>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<script>
	import NavPlatfrom from './NavPlatfrom.vue';
	export default {
		data() {
			return {};
		},
		components: {
			NavPlatfrom
		}
	};
</script>
<style scoped="scoped">
	.el-header,
	.el-footer {
		background-color: #b3c0d1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}

	.el-main {
		background: #f5f7f9;
		color: #333;
	}

	.el-aside {
		width: 200px;
		background-color: #545c64;
		color: #333;
		text-align: center;
		line-height: 200px;
		height: 100vh;
	}

	body>.el-container {
		margin-bottom: 40px;
	}
</style>
