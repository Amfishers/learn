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

