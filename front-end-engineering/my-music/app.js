const Koa = require('koa')
const render = require('koa-art-template')
const path = require('path')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()


render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
});

app.use(async function (ctx) {

    const db = require('./server/db')

    let userData = await db.sqlQuery('SELECT * FROM users')
    console.log(userData)
    // ctx.render('index', {
    //     text: 'hello word!'
    // })
})


app.use( router.routes() ).use( router.allowedMethods() )
app.listen(8888, () => {
    console.log('server work on 8888 port')
})