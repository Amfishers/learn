<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="img in imgs">
            <img :src="img.img" />
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
    data () {
        return {
            imgs: []  //轮播图数据
        }
    },
    created () {
        this.$axios.get('getlunbo')
        .then(res => {
            this.imgs = res.data.message
        })
        .catch(err => console.log('获取轮播图异常', err))
    }
}
</script>

<style>
</style>
