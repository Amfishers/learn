const Koa = require('koa')
const render = require('koa-art-template')
const path = require('path')
const koaStatic = require('koa-static')  // 路由解析
const bodyParser = require('koa-bodyparser')
const app = new Koa()

// 渲染 koa-art-template 模板
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

// 强行修改静态资源路径
app.use(async (ctx, next) => {
    // 判断，如果当前请求是以/public开头，重写其url再放行
    if( ctx.request.url.startsWith('/public') ) {
        ctx.request.url = ctx.request.url.replace(/^\/public/, '')
        // /public/static/css => /static/css
    }
    // else 如果不是/public开头，统一放行
    await next()
})
app.use(koaStatic('./public'))

//处理请求体开始
app.use(bodyParser())
//处理请求体结束

let router = require('./routes/user_router')

app.use( router.routes() ).use( router.allowedMethods() )
app.listen(8888, () => {
    console.log('server work on 8888 port')
})