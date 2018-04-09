# 6 - seajs 的用法

## seajs的加载

SeaJS是一个遵循cmd规范的JavaScript模块加载框架，可以实现JavaScript的模块化开发及加载机制。

SeaJS的作者是淘宝前端工程师玉伯

下载地址：https://github.com/seajs/seajs

下载后，假定把它放在js子目录下面，就可以加载了。

```
<script src="js/sea.js"></script>
```

seajs也提供了一种方式, 用于加载入口模块文件，就像C语言的main函数一样

```
<script src="js/sea.js"></script>
<script>
	// 加载入口模块
	seajs.use("js/main");
</script>

```

## 主模块的写法

上一节的`main.js`，我把它称为"主模块"，意思是整个网页的入口代码。它有点像C语言的main()函数，所有代码都从这儿开始运行。

下面就来看，怎么写`main.js`。

如果我们的代码不依赖任何其他模块，那么可以直接写入javascript代码。

```
// main.js
alert("加载成功！");
```

但这样的话，就没必要使用`sea.js`了。通常使用seajs中定义的define() 函数定义模块中的代码

```javascript
//main.js
define(function(require, exports, module) = {
		//加载模块moduleA
    var moduleA = require('./moduleA');
    
		//加载模块moduleB    
    var moduleB = require('./moduleB');
 
 	//实现功能的代码
 	//...
    
});
```

`main.js` 模块文件中依赖`moduleA` `moduleB` 两个模块，需要分别加载。在函数define中，使用 `require('模块文件路径')` 加载需要的模块


### 异步加载 require.async

`require()` 加载模块使用的是同步方式加载，如果模块文件比较大，这种方式将会导致阻塞代码的执行。seajs也提供了异步加载的方式

```js
//main.js
define(function(require, exports, module) = {
		//异步加载模块moduleA
    require.async('./moduleA',function(moduleA){
    		//...加载完成moduleA
    		//..
    });
    
		//异步加载模块moduleB    
    require.async('./moduleB',function(moduleB){
    		//...加载完成moduleB
    		//..    
    });
 	//实现功能的代码
 	//...
});
```

## 模块导出

定义模块的目的是能让其他模块重复使用，模块通过导出才能够被其他模块加载使用。例如我们定义了模块 `moduleA`

```js
//moduleA.js
define(function(require, exports, module) = {
	
	//可以加载其他模块
	//var moduleB = require('./moduleB');
	
	//导出函数，让外部模块可以调用
	exports.add = function(){
		console.log('add');
	}

	//导出函数，让外部模块可以调用	
	exports.sum = function(){
		console.log('sum');
	}
	
});
```

使用`exports`对象，把需要导出的函数或者对象，挂在此对象下面。外部加载这个模块后，则可以调用`exports`对象中的函数和对象

```js
//main.js
define(function(require, exports, module) = {
		//加载模块moduleA
    var moduleA = require('./moduleA');
    
    //调用模块moduleA中导出的函数
    moduleA.add();
    moduleA.sum();
    
 	//实现功能的代码
 	//...
});
```

## seajs的配置

```js
// seajs 的简单配置
seajs.config({
  base: "./sea-modules/",  //基本路径
  alias: {
    //jquery的路径，加上base路径：./sea-modules/jquery/jquery/1.10.1/jquery.js
    "jquery": "jquery/jquery/1.10.1/jquery.js"
  }
})

```

在模块中要加载jquery则可以这样加载

```js
define(function(require, exports, module) = {

	//这里只需要指定配置的模块名，不需要指定路径
	var jq = require('jquery');

});
```

## seajs 与 requirejs 区别

以下使用seajs加载模块，加载mod1、mod2两个模块是按需加载，需要用到时再加载

```js
define(function(require, exports, module) {
    console.log('require module: main');

	//加载mod1模块
    var mod1 = require('./mod1');
    mod1.hello();
    //加载mod2模块
    var mod2 = require('./mod2');
    mod2.hello();

    return {
        hello: function() {
            console.log('hello main');
        }
    };
});
```

打印结果：

```
require module: main
    require module: mod1
    hello mod1
    require module: mod2
    hello mod2
    hello main
```

再来看看requirejs如何加载

```js
//先加载mod1、mod2 模块文件，加载完成之后，再调用定义函数
define(['./mod1','./mod2'],function(mod1,mod2){
	console.log('require module: main');
	mod1.hello();
	mod2.hello();	

});
```

打印结果：

```
 require module: mod1
    require module: mod2
    require module: main
    hello mod1
    hello mod2
```

区别：

+ RequireJS的做法是并行加载所有依赖的模块, 并完成解析后, 再开始执行其他代码, 因此执行结果只会"停顿"1次, 完成整个过程是会比SeaJS要快.
+ SeaJS一样是并行加载所有依赖的模块, 但不会立即执行模块, 等到真正需要(require)的时候才开始解析, 这里耗费了时间, 因为这个特例中的模块巨大, 因此造成"停顿"2次的现象, 这就是我所说的SeaJS中的"懒执行".


