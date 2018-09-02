var PENDING = 'PENDING';
var FULFILLED = 'FULFILLED';
var REJECTED = 'REJECTED';
var i = 1;

// 1: 构造函数Promise
function Promise(fn) {
    this.id = i++
    // 2. 构造函数内初始 状态Pending 和 value
    this.status = PENDING; // 状态是待发状态
    this.value = null;  // 初始值
    this.deffered = []; // 下一个 要执行的Promise是谁，子promise

    // 3.构造函数内调用函数（apply参数是数组，call参数是一个个，调用函数改变this指向， bind不会立即调用，只是改变this）
    fn.call(this, this.resolve.bind(this), this.reject.bind(this));

}

// 4. 结束回调函数， 执行then Promise.prototype.then 是函数
// 5. then函数内不需要保存起成果或者失败的函数
Promise.prototype = {
    // 定义成功和失败的回调函数， 改变状态， 记录数据结果， 执行后续的行为
    resolve: function(data) {
        this.status = FULFILLED;
        this.value = data;
        // 执行后续的行为
        this.done();
    },
    reject: function(err) {
        this.status = REJECTED;
        this.value = err;
        // 执行后续的行为
        this.done();
    },
    // 执行后续的行为
    done: function() {
        // 让这些this.deffered(子promise得到执行)
        this.deffered.forEach(task => this.handler(task));

    },
    handler: function(task) {   
        // 判断当前执行的状态是怎样， 调用对应的函数
        var status = this.status;
        var value = this.value;
        var p;
        switch(status) {
            case FULFILLED: 
                p = task.onfulfilled(value);
                break;
            case REJECTED:
                p = task.onrejected(value);
                break;
        }

        // 如果 p是一个promise的话，我们需要让他们继续执行
        // 把后续（task.promise）的deffer 交给这个p
        if(p && p.constructor === Promise) {
            // 是一个promise
            // 把下一个作为then链接的deffer 移交给deffered
            p.deffered = task.promise.deffered;
        }
    },
    constructor: Promise, // 改变回来原型链
    then: function(onfulfilled, onrejected) {
        // 保存该函数
        var obj = {
            onfulfilled: onfulfilled,
            onrejected: onrejected
        }

        // 新来一个Promise对象，让其存储这些
        // 并且能根据不同的Promise去then
        obj.promise = new this.constructor(function(){});
        
        // 保存起接下来的promise
        console.log(this)
        console.log(obj.promise)

        // 建立上一个与下一个primise之间的关系
        if(this.status === PENDING) {
           this.deffered.push(obj); 
        }

        // 保证不报错， 未来不能return自己  需要换人
        return obj.promise; // 下一个then的哥们

    }
}




