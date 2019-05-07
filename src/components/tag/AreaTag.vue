<template>
	<div>
		<el-tag v-for="(area, index) in areaid" :key="index">{{ area | showAreaTitle(initArea)}}</el-tag>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: {
		areaid: {
			type: Array
		},
		initArea: {
			type: Array
		}
	}
};
</script>
<style scoped="scoped">
.el-tag {
	margin-right: 5px;
}
</style>
