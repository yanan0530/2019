<template>
	<div class="block">
		<el-timeline>
			<el-timeline-item timestamp="2018/4/12" placement="top">
				<el-card>
					<h4>更新 Github 模板</h4>
					<p>王小虎 提交于 2018/4/12 20:46</p>
				</el-card>
			</el-timeline-item>
			<el-timeline-item timestamp="2018/4/3" placement="top">
				<el-card>
					<h4>更新 Github 模板</h4>
					<p>王小虎 提交于 2018/4/3 20:46</p>
				</el-card>
			</el-timeline-item>
			<el-timeline-item timestamp="2018/4/2" placement="top">
				<el-card>
					<h4>更新 Github 模板</h4>
					<p>王小虎 提交于 2018/4/2 20:46</p>
				</el-card>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script>
export default {
	data() {
		return {
			reverse: true,
			activities: [{ content: '活动按期开始', timestamp: '2018-04-15' }, { content: '通过审核', timestamp: '2018-04-13' }, { content: '创建成功', timestamp: '2018-04-11' }]
		};
	}
};
</script>

<style></style>
