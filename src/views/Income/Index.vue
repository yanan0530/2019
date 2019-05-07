<template>
	<div>
		<el-form ref="form" :model="form" label-width="80px" :inline="true">
			<el-form-item label="日期"><el-date-picker value-format="yyyy-MM-dd" v-model="form.datetime" type="date" placeholder="选择日期"></el-date-picker></el-form-item>
			<el-form-item label="项目">
				<el-select v-model="form.projectId" placeholder="请选择" @change="fillForm">
					<el-option v-for="(item, index) in initProject" :key="index" :label="item.name" :value="item.id"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="斤数"><el-input v-model="form.weight" type="number"></el-input></el-form-item>
			<el-form-item label="收入"><el-input v-model="form.money"></el-input></el-form-item>
			<el-form-item label="平均价格"><el-input v-model="form.unitprice"></el-input></el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="datetime" label="时间"></el-table-column>
			<el-table-column label="蔬菜种类" prop="name"></el-table-column>
			<el-table-column prop="money" label="收入"></el-table-column>
			<el-table-column prop="weight" label="重量"></el-table-column>
			<el-table-column prop="unitprice" label="单价"></el-table-column>
			<el-table-column label="操作" width="100">
				<template slot-scope="scope">
					<el-button type="text" size="small" @click="delClick(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import { incomeList, incomeSave, incomeDel } from '@/api';
import { mapState } from 'vuex';
export default {
	methods: {
		/* handleClick(row) {
				this.form = row;
			}, */
		onSubmit() {
			let data = this.form;
			if (data.unitprice == null) {
				data.unitprice = (data.money / data.weight).toFixed(2);
			}
			if (data.money == null) {
				data.money = data.weight * data.unitprice;
			}
			if (data.weight == null) {
				data.weight = (data.money / data.unitprice).toFixed(2);
			}
			incomeSave(data).then(res => {
				if (res) {
					this.$router.go(0);
				}
			});
		},
		delClick(id) {
			this.$yn.delConfirm(id,this.delFunc)
		},
		fillForm(val) {
			this.form.vegetable = this.initProject.find(pro => pro.id == val).vegeid;
		},
		delFunc(id){
			incomeDel(id).then(res => {
				if (res) {
					this.$router.go(0);
				}
			});
		}
	},
	async mounted() {
		this.tableData = await incomeList();
	},
	computed: {
		initVeg() {
			return this.$store.getters.getVegetable;
		},
		...mapState(['initProject'])
	},
	data() {
		return {
			tableData: [],
			form: {
				id: null,
				vegetable: null,
				money: null,
				weight: null,
				unitprice: null,
				datetime: '',
				projectId: ''
			}
		};
	}
};
</script>
