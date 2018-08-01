// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 配置axios
import Axios from 'axios'
// 配置MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入自己的css文件
import './assets/css/global.css'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'https://www.sinya.online/api/'

Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
