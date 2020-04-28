import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

import 'font-awesome/css/font-awesome.min.css'
import 'normalize.css/normalize.css'
import './assets/css/global.css'

import axios from 'axios'
// 配置axios
axios.defaults.baseURL = 'http://jinjinjin.mynatapp.cc/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
