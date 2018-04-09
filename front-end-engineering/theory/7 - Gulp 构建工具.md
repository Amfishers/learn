# 7 - Gulp 构建工具
## 一、Gulp简介
Gulp基于Node.js的前端构建工具，通过Gulp的插件可以实现
+ 前端代码的编译（sass、less）
+ 压缩html css js
+ 压缩混淆js代码
+ 浏览器自动刷新
+ 代码校验
+ 测试
+ 图片的压缩

## 二、安装Gulp

首先*必须*要全局安装一遍：

```
$ sudo npm install gulp -g
```

接着我们要进去到项目的根目录本地安装一次（确保你根目录存在package.json文件）：

```
$ npm install gulp --save-dev
```
`—save-dev` 这个属性会将条目保存到你`package.json`的`devDependencies`里面

## 三、安装Gulp插件 

Gulp有很多插件，每个插件功能都不一样，常见的插件有如下

+ ==压缩html (gulp-htmlmin)==
+ 压缩css   gulp-cssnano
+ gulp-jsmin  JS代码压缩
+ 
+ ==压缩css（gulp-minify-css）== 
+ ==压缩混淆js代码（gulp-uglify）== 
+ ==合并js文件（gulp-concat）==
+ jshint
+ ==js代码校验（gulp-jshint）==     jshint
+ 压缩图片（gulp-imagemin）
+ 实时刷新

+ sass的编译（gulp-ruby-sass）

安装插件使用如下命令

安装一个

```
npm install gulp-uglify --save-dev
```

安装多个

```
npm install gulp-minify-css gulp-jshint gulp-concat --save-dev
```

## 四、加载插件

接着我们要创建一个 `gulpfile.js` , `gulpfile.js` 文件是gulp的配置文件
在根目录下。下面就是一个典型的gulpfile.js文件

```
//1.加载gulp和插件
var gulp = require('gulp'),
//加载js代码压缩gulp插件
var uglify = require('gulp-uglify');

//2.创建任务，minify是任务名称
gulp.task('minify', function () {
  return gulp.src('js/app.js')
			    .pipe(uglify())
			    .pipe(gulp.dest('build'))
});
```

+ `gulp.src('js/app.js')`  指定所要处理的文件
+ `.pipe(uglify())`        调用压缩js函数`uglify()`
+ `.pipe(gulp.dest('build'))`   指定输出的目录`build`,不存在则创建

执行minify任务时，执行下面命令就可以了

```
$ gulp minify
```


## 五、示例

`gulpfile.js` 文件配置如下：

```
var gulp = require('gulp');

//加载js代码压缩插件
var uglify = require('gulp-uglify');
//加载js代码校验插件
var jshint = require('gulp-jshint');
//加载js文件合并插件
var concat = require('gulp-concat');
//重命名文件
var rename = require('gulp-rename');

//创建任务
gulp.task('js', function () {
  return gulp.src('src/**/*.js')
    .pipe(jshint())  //调用校验
    .pipe(uglify())	 //调用压缩
    .pipe(concat('app.js'))   //调用合并，合并后的文件app.js
	  .pipe(rename({suffix: '.min'}))   //文件名后添加.min后缀
    .pipe(gulp.dest('build'));        //输出目录：build
});
```

上面代码使用pipe命令，分别进行jshint、uglify、concat三步处理

==注意：需要处理的js代码不能有语法错误，否则将导致整个任务执行不成功==


## gulp模块的方法

#### task(参数1,参数2) 函数

+ task方法用于定义具体的任务
`参数1` 是任务名，`参数2` 是任务函数。

下面是一个非常简单的任务函数

```
gulp.task('greet', function () {
   console.log('Hello world!');
});
```
执行此任务，执行以下命令即可

```
$ gulp greet
```

执行任务 `greet` , 对应的函数就会被执行


+ task方法还可以指定按顺序运行的一组任务

```
gulp.task('build', ['css', 'js', 'imgs']);
```

`css` `js` `imgs` 是三个已经存在的任务，`build`依赖这三个任务，执行`build`任务，这三个任务将都会同时执行，没办法保证先后顺序


如下代码，是先执行greet任务，在执行css任务中的代码

```
gulp.task('css', ['greet'], function () {
   // Deal with CSS here
});
```

+ 默认任务

如果一个任务的名字为default，就表明它是“默认任务”，在命令行直接输入gulp命令，就会运行该任务。

```
gulp.task('default', function () {
  // Your default task
});

```

在终端输入gulp 即可执行这个默认任务，不需要任务名

```
$ gulp 
```




#### src() 函数

gulp模块的src方法，用于指定所要处理的文件

```
gulp.task('minify', function () {
  return gulp.src('js/app.js')
			    .pipe(gulp.dest('build'));
});
```

`src('参数')` 中的参数有以下几种形式

+ `js/app.js`：指定确切的文件名。
+ `js/*.js`：  某个目录所有后缀名为js的文件。
+ `js/**/*.js`：某个目录及其所有子目录中的所有后缀名为js的文件。
+ `!js/app.js`：除了js/app.js以外的所有文件


`src('参数')` 参数还可以是一个数组，用来指定多个成员

```
	gulp.src(['js/**/*.js', '!js/**/*.min.js'])
```

#### dest(参数) 函数

`dest(参数)` 用于指定输出的文件目录, 如果有目录不存在，将会被新建。

```
gulp.src('./client/templates/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./build/templates'))
  .pipe(minify())
  .pipe(gulp.dest('./build/minified_templates'));
```

#### watch() 方法

watch方法用于指定需要监视的文件。一旦这些文件发生变动，就运行指定任务

```
gulp.task('watchtask', function () {
   gulp.watch('script/*.js', ['build']);
});
```
上面的代码，一旦script目录下的js文件发送变化，则执行build任务


watch方法也可以用回调函数，代替指定的任务。

```
gulp.task('watchTask',function(){
	gulp.watch('src/**/*.js',function(event){
		//当文件发送变化，此函数被调用
			console.log('Event type: ' + event.type);
   		console.log('Event path: ' + event.path);
	});
});
```

#### 图片压缩(了解)

可以使用gulp-imagemin插件来压缩jpg、png等图片

+ 使用 `imagemin-pngquant` 插件压缩png图片
+ 使用 `imagemin-jpegtran` 插件压缩jpg图片

```
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant'); //png图片压缩插件
var jpegtran = require('imagemin-jpegtran'); //jpg图片压缩插件

//任务 ： 压缩jpg
gulp.task('jpgmin', function () {
    return gulp.src('img/*.jpg')
		        .pipe(imagemin({
		            progressive: true,
		            use: [jpegtran()]    //使用jpegtran来压缩jpg图片
		        }))
		        .pipe(gulp.dest('dist'));
});


// 任务：压缩png
gulp.task('pngmin',function(){
    return gulp.src('img/*.png')
           .pipe(imagemin({
                quality: '65-80', 
                speed: 4,
                use:[pngquant()] //使用pngquant来压缩png图片
           }))
           .pipe(gulp.dest('dist'));
});

```

#### 实时重载

首先安装模块插件

```
$ npm install --save-dev browser-sync
```
gulpfile.js 配置

```
var gulp = require('gulp');
//加载browser-sync
var browserSync = require('browser-sync');
```











 
 






