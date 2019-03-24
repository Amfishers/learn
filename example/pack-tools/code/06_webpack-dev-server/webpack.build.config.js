const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        //可以有多个入口，也可以有一个，如果一个，就默认从这一个入口分析
        // main为不固定写法
        'main': './src/main.js'
    },
    //输出
    output: {
        path: path.resolve('./dist'),  //path的一个api，相对转绝对
        filename: './build.js'
    },
    module: {
        loaders: [
            { 
                //安装 css-loader style-loader 包
                test: /\.css$/,
                loader: 'style-loader!css-loader' 
            },
            {
                //安装包：  file-loader  url-loader
                //limit 字节大小，如果图片大于限定字节就会多出一张图片
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url-loader?limit=4096'   
            }, 
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    //监控
    plugins: [
        //插件执行顺序与元素索引有关
        new HtmlWebpackPlugin({
            template:'./src/index.html', //参照物
        })
    ]
}