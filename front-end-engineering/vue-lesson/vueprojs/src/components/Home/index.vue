<template>
    <div class="page-swipe">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in imgs" :key="index">
                <img :src="item.img" />
            </mt-swipe-item>
        </mt-swipe>
        <div class="opt-list">
            <my-ul>
                <my-li v-for="(grid, index) in grids" :key="index">
                    <a>
                        <div class="container">
                            <img :src="grid.src" />
                            <span>{{grid.title}}</span>
                        </div>
                    </a>
                </my-li>
            </my-ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgs: [],  //轮播图数据
            grids: [
                { src:require('../../assets/images/news.png'), title: '新闻资讯' },
                { src:require('../../assets/images/picShare.png'), title: '图文分享' },
                { src:require('../../assets/images/goodsShow.png'), title: '商品展示'},
                { src:require('../../assets/images/feedback.png'), title: '留言反馈' },
                { src:require('../../assets/images/search.png'), title: '搜索资讯' },
                { src:require('../../assets/images/callme.png'), title: '联系我们' }
            ]

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
.opt-list ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.opt-list li {
    width: 33.333%;
}
.opt-list .container {
    width: 50px;
    margin: 10px auto;
}
.opt-list .container img {
    display: block;
    width: 100%;
}
.opt-list .container span {
    display: block;
    line-height: 32px;
}
</style>
