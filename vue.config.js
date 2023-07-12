const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
    externals: {
      vue: 'Vue' // Key 是 import 语句中使用的名字，值是浏览器全局环境中的名字
    }
  },
}
