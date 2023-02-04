const path = require('path')
const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      comps: resolve('src/components'),
      views: resolve('src/views'),
      api: resolve('src/api')
    }
  }
}
