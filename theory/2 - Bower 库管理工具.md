# 2 - Bower 库管理工具

## 一、概述

随着网页功能变得越来越复杂，同一张网页加载多个JavaScript函数库早已是家常便饭。开发者越来越需要一个工具，对浏览器端的各种库进行管理，比如 ==搜索、自动安装\卸载、检查更新、确保依赖关系等等==。Bower就是为了解决这个问题而诞生的针对浏览器端的库管理工具。

Bower是twitter推出包管理工具

Bower基于node.js，所以安装之前，必须先确保已安装node.js ==(Mac系统下需要加上sudo)==

```
$ sudo npm install bower -g
```

运行上面的命令以后，Bower就已经安装在全局的系统中了。运行帮助命令，查看Bower是否安装成功

```
bower help
```

下面的命令可以更新或卸载Bower

```
# 更新
$ sudo npm update -g bower

# 卸载
$ sudo npm uninstall -g bower
```

## 二、库的安装

和npm安装模块的命令类似，`bower install` 命令用于安装某个库，需要指明库的名字

```
$ bower install backbone
```

Bower会使用库的名字，去在线索引中搜索该库的网址。某些情况下，如果一个库很新（或者你不想使用默认网址），可能需要我们手动指定该库的网址

```
$ bower install git://github.com/documentcloud/backbone.git

$ bower install http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js

$ bower install ./some/path/relative/to/this/directory/backbone.js
```

上面的命令说明，指定的网址可以是github地址、http网址、本地文件
一般情况下使用指定库名就可以了

默认情况下，会安装该库的最新版本，但是也可以手动指定版本号。

```
$ bower install jquery-ui#1.10.1
```
上面的命令指定安装jquery-ui的1.10.1版

如果某个库依赖另一个库，安装时默认将所依赖的库一起安装。比如，jquery-ui依赖jquery，安装时会连jquery一起安装。

安装后的库默认存放在项目的bower_components子目录，如果要指定其他位置，可在.bowerrc文件的directory属性设置。

## 三、库的搜索和查看

bower search命令用于使用关键字，从在线索引中搜索相关库

```
bower search jquery
```

上面命令会得到下面这样的结果

```
Search results:

    jquery git://github.com/components/jquery.git
    jquery-ui git://github.com/components/jqueryui
    jquery.cookie git://github.com/carhartl/jquery-cookie.git
    jquery-placeholder git://github.com/mathiasbynens/jquery-placeholder.git
    jquery-file-upload git://github.com/blueimp/jQuery-File-Upload.git
    jasmine-jquery git://github.com/velesin/jasmine-jquery
    jquery.ui git://github.com/jquery/jquery-ui.git
    ...
```

## 四、库的更新、卸载


```
bower update jquery-ui    # 更新库

bower uninstall jquery-ui  #卸载库

Bower list	 # 列出所有的库

```

## 五、bower.json配置文件

bower.json配置文件和npm的package.json作用是一样的，定义需要安装的库，使用命令 `bower install` 就可以安装所有定义的库

bower.json配置文件大致如下：

```
{
  "name": "app-name",
  "version": "0.1.0",
  "main": ["path/to/app.html", "path/to/app.css", "path/to/app.js"],
  "ignore": [".jshintrc","**/*.txt"],
  "dependencies": {
    "sass-bootstrap": "~3.0.0",
    "modernizr": "~2.6.2",
    "jquery": "latests"
  },
  "devDependencies": {"qunit": ">1.11.0"}
}
```

`dependencies` `devDependencies` 和npm中的package.json中是一样的

有了bower.json文件以后，就可以用bower install命令，一下子安装所有库

```
$ bower install
```

## 六、配置文件.bowerrc （了解）

项目根目录下（也可以放在用户的主目录下）的 `.bowerrc文件` 是Bower的配置文件，它大概像下面这样

```
{
  "directory" : "components",
  "json"      : "bower.json",
  "endpoint"  : "https://Bower.herokuapp.com",
  "searchpath"  : "",
  "shorthand_resolver" : ""
}
```

+ `directory`：存放库文件的子目录名。  不指定默认的目录名是：`bower_components`
+ `json`：		描述各个库的json文件名。
+ 	`endpoint`：在线索引的网址，用来搜索各种库。
+ `searchpath`：一个数组，储存备选的在线索引网址。如果某个库在endpoint中找不到，则继续搜索该属性指定的网址，通常用于放置某些不公开的库。
+ `shorthand_resolver`：定义各个库名称简写形式。

## 七、NPM、Bower的比较

+ NPM 基于Nodejs 前后端都可以使用。Bower仅仅是用于前端开发，用于加载前端开发使用的库和框架
+ NPM 在前端开发中使用比较主流







