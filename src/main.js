import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import ElementUI from 'element-ui'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.$http=axios

// axios.defaults.baseURL='https://renoblog.xyz/api/private/v1/'

Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
