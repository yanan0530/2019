<template>
	<el-tabs v-model="tabHover.tabhover" @tab-click="handleClick" closable @tab-remove="removeTab">
		<el-tab-pane
			v-for="(tab) in tableData"
			:key="tab.name"
			:label="tab.label"
			:name="tab.name"
		></el-tab-pane>
	</el-tabs>
</template>
<script>
export default {
	data() {
		return {
		};
	},
	computed: {
		tableData() {
			return this.$store.state.nav.tabList;
		},
		tabHover() {
			return this.$store.state.nav;
		}
	},
	methods: {
		handleClick(tab) {
			this.$router.push({ name: tab.name });
		},
		removeTab(tab){
			this.$store.dispatch('delTabList',tab)
		}
	}
};
</script>
