<template>
    <div class="page-swipe">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in imgs" :key="index">
                <img :src="item.img" />
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

<style scoped>
/* scoped属性，将样式私有化 */
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
