import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import Member from '@/components/Member/index'
import Shopcart from '@/components/Shopcart/index'
import Search from '@/components/Search/index'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'
import PhotoDetail from '@/components/Photo/PhotoDetail'
import GoodsList from '@/components/Goods/GoodsList'
import GoodsDetail from '@/components/Goods/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //首先进行重定向的操作
      path: '/',
      redirect: { 
        name: 'home' 
      }
    },
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
    },
    // 新闻列表
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    // 新闻详情
    {
      path: '/news/detail',
      name: 'news.detail',
      component: NewsDetail
    },
    // 图文列表
    {
      path: '/photo/list/:categoryId',
      name: 'photo.list',
      component: PhotoList
    },
    // 图文详情
    {
      path: '/photo/detail',
      name: 'photo.detail',
      component: PhotoDetail
    },
    // 商品列表
    {
      path: '/goods/list',
      name: 'goods.list',
      component: GoodsList
    },
    // 商品详情
    {
      path: '/goods/detail/:id',
      name: 'goods.detail',
      component: GoodsDetail
    },
    // 商品图文介绍,复用新闻详情组件
    {
      path: '/goods/photo/info',
      name: 'photo.info',
      component: NewsDetail
    }
  ]
})
