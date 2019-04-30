<template>
	
		<el-pagination
			background
			@current-change="handleCurrentChange"
			:current-page.sync="currentPage1"
			:page-size="pageSize"
			layout="total, prev, pager, next"
			:total="totalData"
		></el-pagination>
	
</template>

<script>
import {seasonData} from '@/api/index.js'
export default {
	data() {
		return {
			currentPage1: 1,
			pageSize:2,
			totalData:1000
		};
	},
	 methods: {
		handleCurrentChange(val) {
			var pageid=val
			var name=this.$route.name
			this.$router.push({ name, query: {pageid}})
		}
	}
};
</script>
	
<style scoped="scoped">
	.el-pagination{
		padding-top: 18px !important;
		padding-bottom: 18px !important;
	}
	
</style>
