const user_db = require('../models/db')
// 其实当require一个模块的时候，默认导出是一个空对象


// 检查用户名
// module.exports.checkUsername = function() {}
exports.checkUsername = async (ctx) => {
    // 1.接受请求体 ctx.request.body
    let { username } = ctx.request.body
    // 2.查询数据库
    let users = await user_db.sqlQuery('SELECT * FROM users where username = ?', [username])
    // 3.响应json对象
    if ( users.length !== 0 ) {
        return ctx.body = { code: '002', msg: '用户名已经存在'}
    }
    // 如果没有该用户
    ctx.body = { code: '001', msg: '可以注册' }
}

// 注册
exports.doRegister = async (ctx) => {
    // 1.接受请求体 ctx.request.body
    let { username, password, email } = ctx.request.body
    // 2.查询
    let users = await user_db.sqlQuery('SELECT * FROM users where username = ? or email = ?', [username, email])
    console.log(users)
}

