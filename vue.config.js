module.exports = {
  devServer: {
    proxy: {
      '/shankeword': {
        target: 'http://192.168.1.222:83',
        ws: true,
        changeOrigin: true
      },
			'/api': {
				target: 'http://jsonplaceholder.typicode.com',
				changeOrigin: true,
				pathRewrite:{
					'^/api': ''
				}
			},
    }
  },

}