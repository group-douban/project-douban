import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

// 屏蔽开发环境的提示
Vue.config.productionTip = false

//导入全局样式
import './assets/reset.css'

new Vue({ 
  // 把下面挂载到vue实例上
  router,
  store,
  render: h => h(App)
}).$mount('#app')
