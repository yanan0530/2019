module.exports = {
    devServer: {
		proxy: {
			'/yn': {
				target: 'http://127.0.0.1:8081',
				changeOrigin: true,
			}, 
		}
	},

    baseUrl: undefined,
    outputDir: 'E:/ideaProject/springboot/src/main/resources/static',
    assetsDir: undefined,
    runtimeCompiler: undefined,
    productionSourceMap: undefined,
    parallel: undefined,
    css: undefined
}
