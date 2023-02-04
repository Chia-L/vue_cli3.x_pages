const webpackBase = require('./build/webpack.base')
const webpackDev = require('./build/webpack.dev')

module.exports = {
  // 部署应用包时的基本 URL
  publicPath: './',
  assetsDir: 'public',
  // 运行时带编译器的vue构建版本
  runtimeCompiler: true,
  configureWebpack: config => {
    Object.assign(config.resolve.alias, webpackBase.resolve.alias)
  },
  devServer: webpackDev
}
