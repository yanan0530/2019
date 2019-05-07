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
						<el-checkbox :label="o.id" :key="index" v-for="(o,index) in initProject">{{o.name}}</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="区域">
					<el-checkbox-group v-model="form.areaid">
						<el-checkbox :label="o.id" :key="index" v-for="(o,index) in initArea">{{o.areaname}}</el-checkbox>
					</el-checkbox-group>
				</el-form-item>
				<el-form-item label="记录">
					<el-checkbox-group v-model="form.thingid">
						<el-checkbox :label="o.id" :key="index" v-for="(o,index) in initThing">{{o.name}}</el-checkbox>
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
						<AreaTag :areaid="scope.row.areaid.split(',')" :initArea="initArea"></AreaTag>
					</template>
				</el-table-column>
				<el-table-column label="日常操作" prop="">
					<template slot-scope="scope">
						<ThingTag :thingid="scope.row.thingid.split(',')" :initThing="initThing"></ThingTag>
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
	} from "@/api/index.js"
	import AreaTag from '@/components/tag/AreaTag.vue'
	import ThingTag from '@/components/tag/ThingTag.vue'
	import {mapState} from 'vuex'
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
			}
		},
		computed: {
			...mapState(['initThing','initArea','initProject'])
		},
		components: {
			AreaTag,ThingTag
		},
		async mounted() {
			recordsAll().then(data => {
				this.tableData = data
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
			del(id) {
				this.$yn.delConfirm(id,this.delFun)
			},
			delFun(id){
				recordsDel(id).then(res => {
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


