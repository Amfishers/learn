### cookie 和 session的补充

- cookie就是一个区分不同浏览器的标识

- session是服务器中的存储方式 

- cookie 常用属性
  1. maxAge   一个数字表示从 Date.now() 得到的毫秒数
  2. expires一个数字表示从 Date.now() 得到的毫秒数
  3. httponly 设置是否不允许客户端操作cookie
  4. 保证兼容性可以同时设置,如果浏览器都识别,则优先以maxAge为准



### jwt 在 koa 中的使用

```javascript
const jwt = require('koa-jwt');
const jsonwebtoken = require('jsonwebtoken');
let token = jsonwebtoken.sign({},'shhhhh'); // 登录后返回token

// 请求时验证token           
// 不论如何都显示页面        
// 排除 以/public开头的
app.use(jwt({ secret: 'shhhhh',passthrough:true }).unless({path:[/^\/public/]}));
```



##### 小结： jwt的使用有一些注意事项

1. unless 函数，代表排除哪些不进行 token 验证

1. passthrough 代表是否最终都显示页面（通常设置为true， token的目的是记住用户状态）

1. 当用户端获取到 token 之后，必须在请求头上加 authorization: bearer + 空格 + token（空格一定要加）

   

##### cookie存在的安全性问题

- CSRF (Cross-site request forgery 跨域站点伪造) 伪造请求

\- 试想: 用户不小心进入黑客准备好的页面,页面内隐藏了一个表单提交

  \- 提交时携带用户的数据.. 

  \- 能通过什么???   用户的cookie数据



#### 什么是 token

- token就是令牌,将令牌传递给服务器,从而服务器根据不同的令牌识别不同的用户.

- token机制下伴有加密算法,从而让该标识更安全

- token机制类似cookie,区别在于非自动而全手动的响应/请求头



#### 为什么使用token

那么如果机制一样.. 我们只有在cookie无法实现需求的时候才使用token

应用场景:

​    1: 移动端原生应用(根本没有浏览器更不谈cookie了)

讨论:

​    跨域的场景下是否必须使用token???

​    1: 由于跨域默认不允许携带cookie,所以导致cookie看起来好像无用了,

​    因此我们会想到使用token

​    2: 注意: 

​        跨域下CORS也是可以携带cookie的,只是需要在服务器和客户端做一些设置

​        jsonp会自动携带cookie

​        代理也能代理请求的cookie等头信息

​    3:总结:基于第1/2点描述,只有第1条满足的情况,我们必须使用token....