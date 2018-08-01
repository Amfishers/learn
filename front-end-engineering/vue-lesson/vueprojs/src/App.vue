<template>
  <div>
    <mt-header fixed title="信息管理系统"></mt-header>

    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/images/index.png">
        home
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/images/vip.png">
        member
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="./assets/images/shopcart.png">
        shopcart
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/images/find.png">
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
  watch: {
    selected (newV, oldV) {
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
