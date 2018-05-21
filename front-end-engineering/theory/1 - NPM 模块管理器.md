# 1 - NPM 模块管理器

## 一、Node.js安装配置

Node.js安装包及源码下载地址为：https://nodejs.org/en/download/
![](http://www.runoob.com/wp-content/uploads/2014/03/download-page.jpg)

你可以根据不同平台系统选择你需要的Node.js安装包。

#### Windows上安装Node.js

32 位安装包下载地址 : https://nodejs.org/dist/v4.4.3/node-v4.4.3-x86.msi
64 位安装包下载地址 : https://nodejs.org/dist/v4.4.3/node-v4.4.3-x64.msi

本文实例以 v0.10.26 版本为例，其他版本类似， 安装步骤：

**步骤 1 : 双击下载后的安装包 v0.10.26，如下所示：**
![](http://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step1.png)

**步骤 2 : 点击以上的Run(运行)，将出现如下界面：**
![](http://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step2.png)

**步骤 3 : 勾选接受协议选项，点击 next（下一步） 按钮 :**
![](http://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step3.png)

**步骤 4 : Node.js默认安装目录为 "C:\Program Files\nodejs\" , 你可以修改目录，并点击 next（下一步）：**
![](http://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step4.png)

**步骤 5 : 点击树形图标来选择你需要的安装模式 , 然后点击下一步 next（下一步）**
![](http://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step5.png)

**步骤 6 :点击 Install（安装） 开始安装Node.js。你也可以点击 Back（返回）来修改先前的配置。 然后并点击 next（下一步）：**
![](http://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step6.png)

**安装过程：**
![](http://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step7.png)

**点击 Finish（完成）按钮退出安装向导。**
![](http://www.runoob.com/wp-content/uploads/2014/03/install-node-msi-version-on-windows-step8.png)

检测PATH环境变量是否配置了Node.js，点击开始=》运行=》输入"cmd" => 输入命令"path"，输出如下结果：

```
PATH=C:\oraclexe\app\oracle\product\10.2.0\server\bin;C:\Windows\system32;
C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;
c:\python32\python;C:\MinGW\bin;C:\Program Files\GTK2-Runtime\lib;
C:\Program Files\MySQL\MySQL Server 5.5\bin;C:\Program Files\nodejs\;
C:\Users\rg\AppData\Roaming\npm
```
我们可以看到环境变量中已经包含了 `C:\Program Files\nodejs\`

检查Node.js版本
![](http://www.runoob.com/wp-content/uploads/2014/03/node-version-test.png)


## 二、简介

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

+ 允许用户从NPM服务器下载别人编写的第三方包到本地使用
+ 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用
+ 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 `npm -v`来测试是否成功安装。命令如下，出现版本提示表示安装成功:

```
$ npm -version
2.3.0
```

但是，Node附带的`npm`可能不是最新版本，最好用下面的命令，更新到最新版本。

```
 npm install npm@latest -g
```

上面的命令中，`@latest` 表示最新版本，`-g` 表示全局安装。所以，命令的主干是`npm install npm`，也就是使用npm安装自己。之所以可以这样，是因为npm本身与Node的其他模块没有区别。

然后，运行下面的命令，查看各种信息

```
# 查看 npm 命令列表
$ npm help

# 查看各个命令的简单用法
$ npm -l

# 查看 npm 的版本
$ npm -v

# 查看 npm 的配置
$ npm config list -l
```

## 三、NPM 命令安装模块

npm 安装 Node.js 模块语法格式如下：

```
$ npm install <模块名>
```

以下实例，我们使用 npm 命令安装常用的jquery框架：

```
$ npm install jquery
```

安装好之后，jquery库文件 就放在了工程目录下的 node_modules 目录中

#### 全局安装与本地安装

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如 ：

```
npm install jquery          # 本地安装
npm install jquery -g       # 全局安装 
```

如果出现以下错误：

```
npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
```

解决办法为：

```
$ npm config set proxy null
```

+ 本地安装
 1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
 2. 本地安装的模块只在当前目录下使用

+ 全局安装
	1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
	2. 可以任何目录下都可以使用全局安装的模块

#### 卸载模块

我们可以使用以下命令来卸载模块。

```
$ npm uninstall jquery
```

#### 更新模块

我们可以使用以下命令更新模块：

```
$ npm update express
```

#### 搜索模块
使用以下来搜索模块：

```
$ npm search express
```

## 四、package.json配置文件 

### 1、概述

每个项目的根目录下面，一般都有一个 `package.json` 文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境

下面是一个最简单的package.json文件，只定义两项元数据：项目名称和项目版本。

```
{
  "name" : "豆瓣电影",
  "version" : "1.1.0",
}
```

上面代码说明，package.json文件内部就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。比如name就是项目名称，version是版本

下面是一个更完整的package.json文件

```
{
	"name": "Hello World",
	"version": "0.0.1",
	"author": "张三",
	"description": "第一个node.js程序",
	"keywords":["node.js","javascript"],
	"repository": {
		"type": "git",
		"url": "http://github.com/isaacs/npm.git"
	},
	"license":"MIT",
	"contributors":[{"name":"李四","email":"lisi@example.com"}],
	
	"scripts": {
		"start": "node index.js"
	},
	"dependencies": {
		"express": "latest",
		"mongoose": "~3.8.3",
		"handlebars-runtime": "~1.0.12",
		"express3-handlebars": "~0.5.0",
		"MD5": "~1.2.0"
	},
	"devDependencies": {
		"bower": "~1.2.8",
		"grunt": "~0.4.1",
		"grunt-contrib-concat": "~0.3.0",
		"grunt-contrib-jshint": "~0.7.2",
		"grunt-contrib-uglify": "~0.2.7",
		"grunt-contrib-clean": "~0.5.0",
		"browserify": "2.36.1",
		"grunt-browserify": "~1.3.0",
	}
}
```

### 2. 字段说明

这些字段作为了解：

+ `name` 定义项目的名称  		 (必填)
+ `version`  定义项目的版本 	 (必填)
+ `description`  项目的简介 (选填)
+ `keywords`   关键字 		(选填)
+ `author`   项目的作者 		(选填)
+ `contributors`  项目成员	(选填)
+ `repository`  指定代码存放的地方  (选填)
+ `license`  许可证			(选填)


### scripts字段

scripts指定了运行脚本命令的npm命令行缩写，比如start指定了运行`npm run start`时，所要执行的命令。

下面的设置指定了`npm run preinstall`、`npm run postinstall`、`npm run start`、`npm run test` 时，所要执行的命令

```
"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js"
}
```

### dependencies字段，devDependencies字段

+ `dependencies` 字段指定了项目运行所依赖的模块，
+ `devDependencies` 指定项目开发所需要的模块。

```
"devDependencies": {
		"bower": "~1.2.8",
		"grunt": "~0.4.1",
		"grunt-contrib-concat": "~0.3.0",
		"grunt-contrib-jshint": "~0.7.2",
		"grunt-contrib-uglify": "~0.2.7",
		"grunt-contrib-clean": "~0.5.0",
		"browserify": "2.36.1",
		"grunt-browserify": "~1.3.0",
}
```

版本号说明：

+ `1.2.2` 指定版本，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
+ `~1.2.2`，表示安装`1.2.x`的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
+ `ˆ1.2.2`，表示安装`1.x.x`的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。
+ `latest`：安装最新版本。


package.json文件可以手工编写，也可以使用 `npm init` 命令自动生成

```
$ npm init
```

这个命令采用互动方式，要求用户回答一些问题，然后在当前目录生成一个基本的package.json文件。所有问题之中，只有项目名称（name）和项目版本（version）是必填的，其他都是选填的。

有了package.json文件，直接使用npm install命令，就会在当前目录中安装所需要的模块

```
$ npm install
```

如果一个模块不在package.json文件之中，可以单独安装这个模块，并使用相应的参数，将其写入package.json文件之中。

```
$ npm install jquery --save
$ npm install jquery --save-dev
```

上面代码表示单独安装jquery模块
`--save` 参数表示将该模块写入`dependencies` 属性，
`--save-dev`表示将该模块写入`devDependencies` 属性。


# NPM􏱘􏱙􏱚􏱛 􏰩􏰤􏰪􏰫国内镜像
􏰩􏰤􏰪􏰫使用淘宝镜像 下载速度快npm config set registry https://registry.npm.taobao.org 􏰲􏰳􏰴􏰖􏰧􏰨􏰵􏰶􏰀􏰡􏰗􏰘􏰷􏰎􏰸
配置成功 下面命令会有响应npm info underscore





