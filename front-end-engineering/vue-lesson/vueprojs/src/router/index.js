import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import Member from '@/components/Member/index'
import Shopcart from '@/components/Shopcart/index'
import Search from '@/components/Search/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
