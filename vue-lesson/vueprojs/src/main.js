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
import Comment from '@/components/Common/Comment'
// 轮播图
import MySwipe from '@/components/Common/MySwipe'
// 图片预览插件
import VuePreview from 'vue-preview'
// 注册全局组件
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)
Vue.component(Comment.name, Comment)
Vue.component(MySwipe.name, MySwipe)
// 定义moment全局日期过滤器
import Moment from 'moment'
// 设置语言
Moment.locale('zh-cn')
// {{ 'xxx' | converTime('yyyy-mm-dd') }}
Vue.filter('converTime', function(data, formatStr) {
  return Moment(data).format(formatStr)
})
Vue.filter('relativeTime', function(data) {
  return Moment(data).fromNow()
})
Vue.filter('converStr', function(str, count) {
  return str.subString(0, count) + '...'
})

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = 'https://www.sinya.online/api/'
// 配置拦截器,用于通用的loading
Axios.interceptors.request.use(function(config) {
  MintUI.Indicator.open({
    text: '完美加载中...',
    // spinnerType: 'fading-circle'
  });
  return config
})
// 关闭loading
Axios.interceptors.response.use(function(response) {
  MintUI.Indicator.close()
  return response
})
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
