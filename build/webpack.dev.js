const proxyUrl = '172.16.4.42' // 代理环境的url地址

module.exports = {
  proxy: {
    '/api': {
      target: proxyUrl,
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  },
  after: require('../mock/mock-server')
}
