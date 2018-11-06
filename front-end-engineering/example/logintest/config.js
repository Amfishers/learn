const path = require('path');
module.exports = {
  uploadDir:path.join(__dirname,'public/files'),
  db:{
    // mysql默认端口3306
    // oracle默认端口1521
    // sqlserver 1433
    host     : 'localhost', //主机
    user     : 'root', // 用户名
    password : '', // 密码
    database : 'learn' // 数据库名
  }
}
