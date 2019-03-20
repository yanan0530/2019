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
			/* '/api': {
				target: 'http://127.0.0.1:8000',
				changeOrigin: true,
			}, */
		}
	},
}
