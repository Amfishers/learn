// 配置路由
const Router = require('koa-router')
const router = new Router()

// 路由规则
// 测试路由
// router.get('/', async (ctx, next) => {

//     let db = require('../server/db')

//     let userData = await db.sqlQuery('SELECT * FROM users')

//     ctx.render('test', {
//         text: userData[0].username
//     })
// })

router.get('/register', (ctx, next) => {
    ctx.render('register')
})

module.exports = router