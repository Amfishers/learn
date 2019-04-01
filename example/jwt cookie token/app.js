const Koa = require('koa')
const Router = require('koa-router')

const jwt = require('koa-jwt')
const jsonwebtoken = require('jsonwebtoken')

let app = new Koa()
let router = new Router()

router.get('/login', ctx => {
    let token = jsonwebtoken.sign({uid: 1}, 'shhhh')
    ctx.response.set('token', token)
    ctx.body = '登陆成功'
})
.get('/index', ctx => {
    ctx.body = '可以访问了'
})

app.use(jwt({ secret: 'shhhh'}).unless({path:[/^\/login/,'/jquery.js']}))

app.listen(8888)
// 静态资源
app.use(require('koa-static')('.'))

// 中间件配置
// 最后路由处理
app.use(router.routes())
// 补充405和501
app.use(router.allowedMethods())