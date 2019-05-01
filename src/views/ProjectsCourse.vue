<template>
	<el-row :gutter="20" id="projectscourse">
		<el-col>
			<el-form class="demo-form-inline">
				<el-form-item label="项目">
					<el-radio v-model="projectid" :label="project.id" v-for="(project, index) in initProject" :key="index">{{ project.createtime + project.name }}</el-radio>
				</el-form-item>
			</el-form>
		</el-col>
		<el-col :span="6">
			<el-timeline :reverse="reverse">
				<el-timeline-item :timestamp="option.createtime" placement="top" v-for="(option, index) in timeOptions" :key="index">
					<el-card>
						<h3>距离{{ option.createtime|showDate(timeDate)}}天</h3>
						<el-divider>日常操作</el-divider>
						<el-tag id="thingid" v-for="(thing, index) in option.thingid.split(',')" :key="'thingid' + index">{{ thing | showThingTitle(initThing) }}</el-tag>
						<el-divider>操作区域</el-divider>
						<el-tag id="areaid" v-for="(area, index) in option.areaid.split(',')" :key="'areaid' + index">{{ area | showAreaTitle(initArea) }}</el-tag>
						<p>{{ option.remarks }}</p>
					</el-card>
				</el-timeline-item>
			</el-timeline>
		</el-col>
	</el-row>
</template>

<script>
import { recordsAll, recordsByProjectId } from '@/api/index.js';
import { mapState } from 'vuex';
export default {
	name: 'projectscourse',
	data() {
		return {
			reverse: false,
			activities: [{ content: '活动按期开始', timestamp: '2018-04-15' }, { content: '通过审核', timestamp: '2018-04-13' }, { content: '创建成功', timestamp: '2018-04-11' }],
			timeOptions: [],
			projectid: 15,
			timeDate: ''
		};
	},
	computed: {
		...mapState(['initProject', 'initArea', 'initThing'])
	},
	watch: {
		projectid(newValue, oldValue) {
			this.timeDate = this.initProject.find(project => project.id == newValue).createtime;
			console.info(this.timeDate)
			recordsByProjectId(newValue).then(res => {
				this.timeOptions = res;
			});
		}
	}
};
</script>
<style scoped="scoped">
.el-tag {
	margin-left: 10px;
}
</style>
