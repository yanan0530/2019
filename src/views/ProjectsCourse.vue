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
						<h4>距离{{ option.createtime|showDate(timeDate)}}天</h4>
						<el-divider>日常操作</el-divider>
						<ThingTag :thingid="option.thingid.split(',')" :initThing="initThing"></ThingTag>
						<el-divider>操作区域</el-divider>
						<AreaTag :areaid="option.areaid.split(',')" :initArea="initArea"></AreaTag>
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
import AreaTag from '@/components/tag/AreaTag.vue'
import ThingTag from '@/components/tag/ThingTag.vue'
export default {
	name: 'projectscourse',
	data() {
		return {
			reverse: true,
			timeOptions: [],
			projectid: '',
			timeDate: ''
		};
	},
	components: {
		AreaTag,ThingTag
	},
	computed: {
		...mapState(['initProject', 'initArea', 'initThing'])
	},
	watch: {
		projectid(newValue, oldValue) {
			this.timeDate = this.initProject.find(project => project.id == newValue).createtime;
			recordsByProjectId(newValue).then(res => {
				this.timeOptions = res;
			});
		}
	}
};
</script>
