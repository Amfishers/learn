#### promise 原理


[执行顺序](./顺序.png)

.then( onfulfilled, onrejected)  两个参数，保存起来，供未来调用resole取得这些函数

细节：

promise是一个容器，有三种状态：
fulfilled
pending
rejected

