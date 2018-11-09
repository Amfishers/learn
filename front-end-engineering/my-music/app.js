const Koa = require('koa')
const render = require('koa-art-template')
const path = require('path')
const app = new Koa()


render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

let router = require('./routes/user_router')

app.use( router.routes() ).use( router.allowedMethods() )
app.listen(8888, () => {
    console.log('server work on 8888 port')
})