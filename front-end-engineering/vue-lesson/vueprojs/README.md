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

####插件
vue-preview  图片预览

######父子组件内样式的心得
* 父不管子
* 子管自己
* 爷爷（全局） 都管
* 全局css管理组件隔代疼

__建议： 组件负责自己的样式，全局都可以控制__
