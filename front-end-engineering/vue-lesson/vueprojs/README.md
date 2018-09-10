# vueprojs

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

####加载的组件
Axios    通信/相当于发ajax请求
moment   时间格式处理
mint-ui  UI视图，饿了么团队出品

####文件说明:
全局操作  main.js
路由操作  router/index.js
自定义组件  components/Common

#### 全局样式
assets/css

####自定义组件
MyUl  ```name: my-ul```
Myli  ```name: my-li```
NavBar ```name: nav-bar```
Myswipe ```my-swipe```
Comment ```name: comment```


####插件
vue-preview  图片预览

######父子组件内样式的心得
* 父不管子
* 子管自己
* 爷爷（全局） 都管
* 全局css管理组件隔代疼

__建议： 组件负责自己的样式，全局都可以控制__

####添加新的路由口溜
> 先有子 注册子 使用子

####组件提取思想
1、看组件是否长得一样
2、动态数据接口URL是否一致
3、对象数据结构是否一致


#### 打包的js 按需加载   (路由懒加载)[https://router.vuejs.org/zh/guide/advanced/lazy-loading.html]
安装插件 syntax-dynamic-import，并且 .babelrc 配置

{
  "plugins": ["@babel/plugin-syntax-dynamic-import"]
}


``` 
结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。

const Foo = () => import('./Foo.vue')
在路由配置中什么都不需要改变，只需要像往常一样使用 Foo：

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
``` 
所以在 router下的 index.js 文件所import的文件 进行修改


#### 总结

- EventBus 就是一个new Vue 
  - $emit(xxx,数据)   与$on 成对出现， $emit 为触发事件
  - $on('xxx',fn)     $on 加监听事件
  - $once('xxx',fn)   监听事件，只触发一次之后移除
  - $off('xxx')       移除事件
- 路由守卫
  - 1. 全局守卫(前): 前端的权限控制中 next() next(false)
  - 1. 后置路由
  - 路由独享的(带不了组件，比较鸡肋)
  - 组件内的路由钩子函数(from to next)    beforeRouteEnter / beforeRouteUpdate / beforeRouteLeave 
    - 1. 进入前, 根据过来的路由做判断，让组件做不同显示
         -beforeRouteEnter -> next(vm => vm.xxx = 123;)
    - 1. 路由更新（组件created不会被调用）
         - 路由参数的改变触发: ?id=xxx  /xxx/:id
    - 1. 路由离开前 (用户离开前的询问及保存)
- slot 坑。。   给子组件传入DOM的时候也可以指定坑名  
- <span slot="xx">1</span>
- 子组件内声明 <slot name="xx"></slot>
- 内置组件
  - keep-alive  缓存频繁的创建和销毁的组件=> 停用与激活
  - transition  给元素或组建添加 过渡效果(js + css)
  - 两者结合着中，因为transition代表组件的入场移除  所以就需要keep-alive
- 特殊函数
  - this.$nextTick(fn) 在vue生成DOM以后的DOM操作行为
    - 比如: 当前this.isExist = true; 立刻操作这个元素不行，
    - 而需要在$nectTick中，因为当前代码执行的时候元素还未存在
  - this.$set(obj,key,value); 手动通知vue数据响应式
  - this.$refs.xxx =>   ref="xxx" 
    - 元素获取的就是元素对象
    - 组件获取的就是组件对象 也可以使用： xxx.$el 获取DOM对象
