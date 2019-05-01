<template>
	<div>
		<el-row>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="时间" >
					<el-date-picker v-model="form.createtime" type="date" placeholder="选择日期" value-format="yyyy-MM-dd">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="项目">
					<el-checkbox-group v-model="form.projectid">
						<el-checkbox :label="o.id" :key="index" v-for="(o,index) in options">{{o.name}}</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="区域">
					<el-checkbox-group v-model="form.areaid">
						<el-checkbox :label="o.id" :key="index" v-for="(o,index) in areaoptions">{{o.areaname}}</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="记录">
					<el-checkbox-group v-model="form.thingid">
						<el-checkbox :label="o.id" :key="index" v-for="(o,index) in thingsoptions">{{o.name}}</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="备注">
					<el-input type="textarea" v-model="form.remarks"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button @click="resetForm">取消</el-button>
				</el-form-item>
			</el-form>
		</el-row>
		<el-row>
			<el-table :data="tableData" border style="width: 100%">
				<el-table-column label="时间" prop="createtime"></el-table-column>
				<el-table-column label="项目" prop="name"></el-table-column>
				<el-table-column label="区域">
					<template slot-scope="scope">
						<el-tag v-for="(area,index) in scope.row.areaid.split(',')" :key="index">{{area|showAreaTitle(areaoptions)}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="日常操作" prop="">
					<template slot-scope="scope">
						<el-tag v-for="(thing,index) in scope.row.thingid.split(',')" :key="index">{{thing|showThingTitle(thingsoptions)}}</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="备注" prop="remarks"></el-table-column>
				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
						<el-button type="text" size="small" @click="del(scope.row.id)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-row>
	</div>
</template>

<script>
	import {
		recordsAll,
		recordsSave,
		recordsDel,
		projectByState,
		areaAll,
		thingAll,
	} from "@/api/index.js"
	export default {
		data() {
			return {
				form: {
					id: '',
					projectid: [],
					thingid: [],
					createtime:"",
					remarks:"",
					areaid:[]
				},
				tableData: [],
				options: "",
				areaoptions: "",
				thingsoptions: '',
			}
		},
		async mounted() {
			this.thingsoptions = await thingAll();
			areaAll().then(data => {
				this.areaoptions = data
			})
			recordsAll().then(data => {
				this.tableData = data
			})
			projectByState().then(res => {
				this.options = res
			})
		},
		methods: {
			changeData(data){
				let oldData=data;
				let newDataArr=new Array()
				for(var i=0;i<oldData.projectid.length;i++){
					let newData={
						id:null,
						projectid:oldData.projectid[i],
						thingid:oldData.thingid.toString(),
						createtime:oldData.createtime,
						remarks:oldData.remarks,
						areaid:oldData.areaid.toString()
					}
					newDataArr.push(newData)
				}
				return newDataArr
			},
			onSubmit() {
				 let data = this.changeData(this.form) 
				recordsSave(data).then(res => {
					if (res) {
						this.$router.go(0)
					}
				})
			},
			del(d) {
				recordsDel(d).then(res => {
					if (res) {
						this.$router.go(0)
					}
				})
			},
			handleClick(row) {
				this.form = row
			},
			resetForm() {
				this.form = {
					id: '',
					areaname: '',
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.el-tag{
		margin-right: 5px;
	}
</style>
