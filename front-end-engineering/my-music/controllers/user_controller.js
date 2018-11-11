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
    let user
    if (users.length !== 0) {
        if (users.length > 1) return ctx.body = {code: '004', msg: '用户名和邮箱都存在'}

        user = users[0]
        if (user.username === username && user.emial === email) return ctx.body = { code: '004', msg: '用户名和邮箱都存在'}
        if (user.username === username) return  ctx.body = { code: '002', msg: '用户名已经存在'}
        if (user.email === email) return ctx.body = { code: '003', msg: '邮箱已存在'}
    }
    // user.length == 0 完全不等 => 可以注册
    // 插入数据
    let result = await user_db.sqlQuery('INSERT INTO users (username, password, email) values (?,?,?)', [username, password, email])
    ctx.body = { code: '001', msg: '注册成功'}
}

