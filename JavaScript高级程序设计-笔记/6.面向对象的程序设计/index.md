## 对象

> ECMA-262 把对象定义为： “无序属性的合集，其属性可以包含基本值、对象或拼音”



平时创建对象时，都会加一些属性或方法，例如

```javascript
let person = {
	name: 'Fisher',
	sayName: function() {
        console.log(this.name)
	}
}
```

其实这些属性在创建时都带有一些特征值，JavaScript通过这些特征值来定义他们

#### 属性类型

ECMAscript中有两种属性： 数据属性和访问器属性

[[Configurable]]: 表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器的属性 。默认值是true

 [[Enumerable]]: 表示能否通过for-in 循环返回属性。默认是 true

[[Writable]]: 表示能否修改属性的值。默认是 true

[[Value]]: 包含这个属性的数据值。默认是 undefined

举个例子

```javascript
var person = {
    name: 'fishers'
}
```

在这个例子中 [[Configurable]].  [[Enumerable]]].  [[Writable]] 特性都被设置为true， 而 [[Value]] 特性被设置为指定的值 'fishers'。 要修改这些默认属性的特性，就需要用 Object.definedProperty() 方法。（Vue双向绑定原理 Object.definedProperty() ）



该方法接收三个参数： 属性所在的对象，属性的名字和一个描述符对象。

其中 描述符(descriptor)对象的属性必须是： configurable、enumerable、writable、value

但要注意的是：

- Writable 设置为false之后，value 设置会无效，而且严格模式下 修改value值会报错
- 多次调用 Object.definedProperty() 方法修改同一个属性，但在把 configurable 特性设置为 false 之后就会有限制了
- 在调用 Object.definedProperty() 方法创建一个新的属性时，如果不指定， configurable、enumerable、writable 特性默认是 false











#### 创建对象

最原始的工厂模式

```javascript
function createPerson() {
    var o = new Object()
    o.name = name
    o.age = age
    o.sayName = function() {
        console.log(this.name)
    }
    return o
}
var person1 = createPerson('fisher', 18)
```

这种方式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题（怎么知道一个对象的类型），所以出现了__构造函数模式__

```javascript
funtion Person(name, age) {
    this.name = name
    this.age = age
    this.sayName = function() {
        console.log(this.nage)
    }
}
var person1 = New Person('fisher', 18)
```

这样看来，Person() 相对 createPerson() 有以下不同：

- 没有显示的创建对象
- 直接将属性与方法赋予this对象
- 没有return

这时候我们可以联想到 new 的大概实现原理。

1. 创建一个新的对象
2. 将构造函数的作用域赋给新的对象（因此this指向了这个新对象）
3. 执行构造函数中的代码（为这个对象添加属性）
4. 返回新函数



