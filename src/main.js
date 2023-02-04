import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入view组件库
import 'view-design/dist/styles/iview.css'
import ViewUI from 'view-design'

// 引入Element组件库
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'

// 引入vxe-table
import 'vxe-table/lib/style.css'
import VXETable from 'vxe-table'

// 引入iconfont
import '@/assets/iconfont/iconfont.woff'
import '@/assets/iconfont/iconfont.ttf'
import '@/assets/iconfont/iconfont.css'

// 安装插件
[ViewUI, Element, VXETable].forEach(UI => {
  Vue.use(UI)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
