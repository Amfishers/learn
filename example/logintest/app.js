const http = require('http');
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const Router = require('koa-router')
const cors = require('koa2-cors'); //允许跨域的插件

const app = new Koa();
const router = new Router();

app.use(cors());
router.post('/user', (ctx, next) => {
  console.log(ctx.request.body)
})


app.use(bodyparser() );
app.use(router.routes() );
app.use(router.allowedMethods() );


app.listen(9998, () => {
  console.log('端口9998登录成功')
});