module.exports = {
    entry: {
        //可以有多个入口，也可以有一个，如果一个，就默认从这一个入口分析
        // main为不固定写法
        'main': './main.js'
    },
    //输出
    output: {
        filename: './build.js'
    },
    //监控
    watch: true
}