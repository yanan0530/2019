module.exports = {
	devServer: {
		proxy: {
			'/yn': {
				target: 'http://127.0.0.1:8081',
				changeOrigin: true,
			}, 
		}
	},
	transpileDependencies: [
		'vue-echarts',
		'resize-detector'
	]
}
