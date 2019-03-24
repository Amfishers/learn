# 8 - webpack 构建工具

## 一、什么是 Webpack

Webpack 是一个模块打包器。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源

![](http://cw.hubwiz.com/card/c/5670d0a77e7d40946afc5e65/1/1/1/img/what-is-webpack0.png)


市面上已经存在的模块管理和打包工具并不适合大型的项目，尤其单页面 Web 应用程序。最紧迫的原因是如何在一个大规模的代码库中，维护各种模块资源的分割和存放，维护它们之间的依赖关系，并且无缝的将它们整合到一起生成适合浏览器端请求加载的静态资源。

## 二、Webpack的特点和优势

Webapck 和其他模块化工具有什么区别呢？

####代码拆分

Webpack 有两种组织模块依赖的方式，同步和异步。异步依赖作为分割点，形成一个新的快。在优化了依赖树后，每一个异步区块都作为一个文件被打包。

####Loader

Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。

####智能解析

Webpack 有一个智能解析器，几乎可以处理任何第三方库，无论它们的模块形式是 CommonJS、 AMD 还是普通的 JS 文件。甚至在加载依赖的时候，允许使用动态表达式 require("./templates/" + name + ".jade")。

####插件系统

Webpack 还有一个功能丰富的插件系统。大多数内容功能都是基于这个插件系统运行的，还可以开发和使用开源的 Webpack 插件，来满足各式各样的需求。

####快速运行

Webpack 使用异步 I/O 和多级缓存提高运行效率，这使得 Webpack 能够以令人难以置信的速度快速增量编译。

## 三、安装

用 npm 安装 Webpack：

```
$ npm install webpack -g
```

通常我们会将 Webpack 安装到项目的依赖中，这样就可以使用项目本地版本的 Webpack

```
# 确定已经有 package.json，没有就通过 npm init 创建
# 安装 webpack 依赖
$ npm install webpack --save-dev
```

## 四、使用

先创建一个js入口文件 `index.js`

```
//index.js文件

document.write('HI Webpack!');
```

然后编译 `index.js` 并打包到 `bundle.js`，运行命令：

```
$ webpack ./index.js bundle.js
```

成功之后，则创建的`bundle.js` 即是我们创建的打包文件

## 五、打包依赖文件

创建 `home.js` 文件

```
//home.js

module.exports = function(){
	document.write('这是home.js打印');
}

```

`index.js` 文件修改

```
document.write('HI Webpack!');

//加载home.js模块文件
var home = require('./home.js');
home();

```

打包 `index.js` 文件

```
$ webpack ./index.js bundle.js
```

Webpack 会分析入口文件，解析包含依赖关系的各个文件。`index.js`、`home.js` 文件 都打包到 bundle.js

## 六、Loader介绍

Webpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。

Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件。

例如可以将 css文件、JSX、ES6 等代码文件使用对应的加载器(Loader)统一打包。

## 七、加载 CSS 文件

WebPACK只能处理JavaScript本身，所以我们需要css-loader去处理 CSS。我们还需要style-loader去应用这个样式在CSS文件。

安装 loader ：

```
npm install css-loader style-loader
```

==注意：安装 loaders（只需要在本地安装，不需 -g）==

我们要在页面中引入一个 CSS 文件 style.css，首页将 style.css 也看成是一个模块，然后用 css-loader 来读取它，再用 style-loader 把它插入到页面中。

```
//style.css 文件

body {
    background: red;
}
```

修改 `index.js` 文件

```
document.write('HI Webpack!');

//加载home.js模块文件
var home = require('./home.js');
home();

require("!style-loader!css-loader!./style.css");  //载入 style.css

```

执行打包命令

```
$ webpack ./index.js bundle.js
```

## 八、webpack.config.js 配置文件

打包文件，除了命令的方式，我们还可以通过配置文件的形式来打包更复杂的操作。webpack默认使用 `webpack.config.js` 文件作为配置文件

创建一个配置文件`webpack.config.js` 内容如下：

```
module.exports = {
    entry: "./index.js",  //需要打包的入口文件
    output: {
        path: __dirname,  //指定打包后输出目录，__dirname表示当前目录
        filename: "bundle.js"  //打包生成的文件名 
    },
    module: {
        loaders: [   //定义加载器
            { test: /\.css$/, loader: "style!css" }  //css加载器
        ]
    }
};
```

在命令我只需要运行：

```
webpack
```
如果完成成功，将会返回运行结果，该命令将尝试WebPACK当前目录中加载文件webpack.config.js

这里对Webpack的打包行为做了配置，主要分为几个部分：

+ `entry`：指定打包的入口文件，每有一个键值对，就是一个入口文件
+ `output`：配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称
+ `module`：定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会调用后面的loader对文件进行处理，这正是webpack强大的原因。

###漂亮的输出

如果该项目的增长，编译可能需要更长的时间。所以我们要展示一些进度条。我们想要的颜色…

我们可以这样

```
webpack --progress --colors
```

## 九、加载图片

使用 `url-load` `file-loader` 加载器加载图片

安装加载器

```
npm install url-loader

npm install file-loader
```

修改style.css文件

```
body {
    background: url('./logo.png');
}
```

配置webpack.config.js文件

```
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg)$/, loader: "url?limit=40000" }// 添加到这
        ]
    }
};
```

注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片。






