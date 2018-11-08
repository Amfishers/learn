const Koa = require('koa')
const render = require('koa-art-template')
const path = require('path')

const app = new Koa()

render(app, {
    root: path.join(__dirname, 'view'),
    extname: '.art',
    debug: process.env.NODE_ENV !== 'production'
});

app.use(async function (ctx) {
    await ctx.render('index', {
        text: 'hello word!'
    })
})

app.listen(8888, () => {
    console.log('server work on 8888 port')
})