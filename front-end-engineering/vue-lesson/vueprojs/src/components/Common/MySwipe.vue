<!--  -->
<template>
  <div class="page-swipe">
    <mt-swipe :auto="parseInt(time)">
        <mt-swipe-item v-for="(item,index) in imgs" :key="index">
            <div></div>
            <img :src="item.img || item.src" />
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'my-swipe',
  data () {
    return {
      imgs: [],
    };
  },
  props: ['url', 'time'],
  created () {
    this.$axios
      .get(this.url)
      .then(res => {
        this.imgs = res.data.message;
      })
      .catch(err => console.log("获取轮播图异常", err));
  },
}
</script>
<style scoped>
.page-swipe {
  width: 100%;
}
.page-swipe .mint-swipe {
  height: 280px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
.page-swipe .mint-swipe-item {
  line-height: 200px;
}
.page-swipe .mint-swipe-item img {
  width: 100%;
}
.page-swipe-desc {
  text-align: center;
  color: #666;
  margin-bottom: 5px;
}
</style>
