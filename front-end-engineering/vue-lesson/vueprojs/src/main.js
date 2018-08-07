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
import './assets/css/common.css'
// 引入iconfont
import './assets/font/iconfont.css'
// 引入自己的ul和li组件
import MyLi from '@/components/Common/MyLi'
import MyUl from '@/components/Common/MyUl'
import NavBar from '@/components/Common/NavBar'
// 图片预览插件
import VuePreview from 'vue-preview'
// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
// 定义moment全局日期过滤器
import Moment from 'moment'
// {{ 'xxx' | converTime('yyyy-mm-dd') }}
Vue.filter('converTime', function(data, formatStr) {
  return Moment(data).format(formatStr)
})

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
// 安装插件，注册全局组件及挂载属性
Vue.use(MintUI)
// 安装图片预览插件
Vue.use(VuePreview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
