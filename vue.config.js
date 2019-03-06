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
		}
	},

}
