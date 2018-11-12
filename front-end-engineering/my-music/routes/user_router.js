// 配置路由
const Router = require('koa-router')
const router = new Router()

// 加载控制器
let user_controller = require('../controllers/user_controller')

// 路由规则
// 测试路由
// router.get('/', async (ctx, next) => {

//     let db = require('../models/db')

//     let userData = await db.sqlQuery('SELECT * FROM users')

//     ctx.render('test', {
//         text: userData[0].username
//     })
// })

router.get('/register', (ctx, next) => {
    ctx.render('register')
})
.get('/login', (ctx, next) => {
    ctx.render('login')
})
.post('/check_username', user_controller.checkUsername )  // 检查用户名
.post('/do_register', user_controller.doRegister )   // 注册用户
.post('/do_login', user_controller.doLogin )   // 账户登陆

module.exports = router