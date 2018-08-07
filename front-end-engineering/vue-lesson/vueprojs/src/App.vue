<template>
  <div>
    <mt-header fixed title="信息管理系统"></mt-header>

    <router-view class="all-main"/>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/images/index.png">
        home        
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/images/vip.png">
        member
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img @click="changeHash" slot="icon" src="./assets/images/shopcart.png">
        shopcart
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/images/find.png">
        search
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    changeHash () {
      // 这个方法是不对的，思路是：
      // 当我们点击图片，立即出发了changeHash这个函数，然后就输出，但是<mt-tab-item/>这个组件 在点击之后 才会把这个id赋值给selected， 所以该调用早于了 子组件赋值给父组件的 selected。 其实应该先获取id值，然后再调用这个changeHash
      //console.log(this.selected)
      this.$nextTick(function(){
        // 在vue完成渲染任务以后的行为
        this.$router.push({
          name: this.selected
        })
      })
    }
  },
  watch: {
    // 因为watch的 selected值不会改变，所以第二次点没有触发
    // selected (newV, oldV) {
    //   this.$router.push({
    //     name: newV
    //   })
    // }
  }
}
</script>

<style>
.all-main {
  margin-bottom: 55px;
}
</style>
