<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
	 
    <el-tab-pane label="用户管理" name="season"></el-tab-pane>
	
	<el-tab-pane label="用户管理1" name="bug"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
	computed:{
		tableData(){
			let tabList=[
				{label:"用户管理",id:1,name:"sesson"},
				{label:"用户管理",id:1,name:"sesson"},
				{label:"用户管理",id:1,name:"sesson"},
			]
			return tabList
		}
		
	},
    methods: {
      handleClick(tab, event) {
        console.log(tab.name);
		this.$router.push({name:tab.name})
      }
    }
  };
</script>