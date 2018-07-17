
// beforeCreate
// created
// beforeMount
// mounted
// beforeUpdate
// updated
// activated
// deactivated
// beforeDestroy
// destroyed
  
  var Test = {
    template:`<div>
      我是test组件 {{text}}
      <button @click="text=text+1;">更改</button>
    </div>`,
    data:function () {
      return {
        text:'hello world'
      }
    },
    activated:function () {
      console.log('组件被激活了');
    },
    deactivated:function () {
      console.log('组件被停用了');
    },

    // created 和 actived  都是v-if="true" 子组件的状态
    // created 没有被keep-alive内置组件包裹, actived被包裹了
    // 销毁和停用同上


    // 对应父组件v-if false  就销毁当前组件
    beforeDestroy:function() { //销毁之前
      console.log('beforeDestroy');
    },
    destroyed:function () { // 销毁后
      console.log('destroyed');
    },
    // 销毁,最终都是做一些其他功能的施放,比如:保存到localStorage
    beforeCreate:function () {
       // 组件创建之前
       // console.log(this.text);
       console.log('beforeCreate');
    },
    created:function () {
      // 组件创建之后
      // console.log(this.text);
      console.log('created');
    }
    // 使用该组件,就会触发以上的事件函数(钩子函数)
    // created中可以操作数据..  并且 可以实现vue->页面的影响,  应用:发起ajax请求
    // beforeMount:function () {
    //     // vue起作用,装载数据到DOM之前
    //     // console.log(document.body.innerHTML);
    //     console.log('beforeMount');
    // },
    // mounted:function () {
    //    // vue起作用,装载数据到DOM之后
    //    // console.log(document.body.innerHTML);
    //    console.log('mounted');
    // },
    // // 基于数据改变,影响页面
    // beforeUpdate: function () {  // 改变前
    //   console.log(document.body.innerHTML);
    // },
    // updated: function () {  // 改变后
    //   console.log(document.body.innerHTML);
    // }

    // 以上两个是当有更改数据才会触发
    // 应用: beforeUpdate 可以获取原DOM
    // updated 可以获取新DOM
    // ---------------------------
    // beforeMount vue启动前的DOM
    // mounted  vue启动后的DOM  只执行一次

  }

  var App = {
    components:{
      test:Test
    },
    data:function () {
      return {
        isExist:true
      }
    },
    template:`
      <div>
        <keep-alive>
          <test v-if="isExist"></test>
        </keep-alive>
        <button @click="isExist = !isExist">事关子组件生死</button>
      </div>
    `
  }
  new Vue({
    el:'#app',
    components:{
      app:App
    },
    template:'<app/>'
  })
