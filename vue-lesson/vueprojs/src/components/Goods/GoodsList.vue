<template>
    <div class="pro-loadmore" :style="{ height:boxHeight }">   <!-- 不知道为什么mounted之后 height不会改变  -->
        <nav-bar title="商品展示" />
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" @top-status-change="handleTopChange" :auto-fill="false" :bottom-all-loaded="isAllLoaded" ref="loadmore">
            <!--{:all-fill="false" 如果数据没有填充满页面，就会出现loadBottom一直加载 }-->
            <ul>
                <li v-for="(item,index) in goodsList" :key="index">
                    <router-link :to="{name: 'goods.detail', params: {id: item.id}}">
                        <img :src="item.img_url">
                        <div class="title">{{item.title}}</div>
                        <div class="desc">
                            <div class="sell">
                                <span>￥{{item.sell_price}}</span>
                                <s>￥{{item.market_price}}</s>
                            </div>
                            <div class="detail">
                                <div class="hot">
                                    热卖中
                                </div>
                                <div class="count">
                                    剩{{item.stock_quantity}}件
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span v-show="topStatus === 'loading'">Loading...</span>
            </div>
        </mt-loadmore>
    </div>
</template>
<script>
// 网络图片 img src随便玩
// 本地静态资源图片 告知webpack  帮助移动到未来的dist目录
// import ImgSrc from '../xx.jpg'
// <img :src="ImgSrc" />

  export default {
    props: ['apprefs'],
    data() {
      return {
        topStatus: '',
        goodsList: [],  // 商品列表数据
        page: '1',  // 页码
        isAllLoaded: false,  // 是否全部加载完毕
        boxHeight: null,  // 父盒子高度 
      };
    },
    created() {
        this.page = this.$route.query.id || '1'
        this.loadMoreData(this.page)
    },
    mounted() {
        // 装载数据完毕   接收apprefs appHeader appFooter
        // 公式： 设备高度 - 头 - 尾 =  中间的高度（loadmore父元素的高度）
        let headerHeight = this.apprefs.appHeader.$el.offsetHeight
        let footerHeight = this.apprefs.appFooter.$el.offsetHeight
        console.log('headerHeight',headerHeight)
        console.log('footerHeight',footerHeight)
        console.log('window.innerHeight',window.innerHeight)
        // 因为我的loadmore的div是绝对位置，所以 应该使用 window.innerHeight 而不是 document.body.clientHeight
        this.boxHeight = window.innerHeight - headerHeight - footerHeight
        console.log(this.boxHeight)
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status
        console.log(status)
      },
      loadMoreData(page) {
        this.$axios.get('getgoods?pageindex=' + page)
        .then(res => {
            this.goodsList = res.data.message
        })
        .catch(err => {
            console.log(err, '商品列表获取失败')
        })
      },
      concatData(page) {
        this.$axios.get('getgoods?pageindex=' + page)
        .then(res => {
            if(res.data.message.length === 0) {
                this.isAllLoaded = true
                this.$toast('没有更多数据了')
            }
            this.goodsList = res.data.message.concat(this.goodsList)
            this.page ++
            this.$refs.loadmore.onBottomLoaded()
        })
        .catch(err => {
            console.log(err, '商品列表获取失败')
        })
      },
      loadTop() {
        this.$refs.loadmore.onTopLoaded(); 
        console.log('刷新被执行')
      },
      loadBottom() {
        //this.allLoaded = true // 若数据已全部获取完毕
        console.log('上拉加载被执行')
        this.concatData(this.page)
        // 正确的方式是给list加元素，直到加满为止
      },
    },
  };
</script>
<style scoped>

ul {
    overflow: hidden;
}
li {
    width: 50%;
    float: left;
    padding: 6px;
    box-sizing: border-box;
}

li > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;
}

li > a:not(.mui-btn) img {
     width: 100%;
}
.pro-loadmore {
    position: absolute;
    top: 40px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
}
.title {
    line-height: 20px;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.sell > span {
    float: left;
    color: red;
    text-align: left;
}

.detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}

.detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
}

/*撑开，去除浮动没有的高度*/

.detail {
    overflow: hidden;
}

.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}

img {
    height: 200px;
}
</style>
