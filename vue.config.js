module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://yapi.demo.qunar.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/mock/52671/api/'
				}
			},
			'/eureka': {
				target: 'http://192.168.7.224:9090/',
				changeOrigin: true,
				pathRewrite: {
					'^/eureka': ''
				}
			},
			'/yn': {
				target: 'http://127.0.0.1:8081',
				changeOrigin: true,
				pathRewrite: {
					'^/yn': ''
				}
			},
		}
	},
	transpileDependencies: [
		'vue-echarts',
		'resize-detector'
	]
}
