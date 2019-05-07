<template>
	<div>
		<el-tag v-for="(thing,index) in thingid" :key="index">{{thing|showThingTitle(initThing)}}</el-tag>
	</div>
</template>
<script>
export default {
	props: {
		thingid: {
			type: Array
		},
		initThing: {
			type: Array
		}
	},
};
</script>
<style scoped="scoped">
	.el-tag{
		margin-right: 5px;
	}
</style>