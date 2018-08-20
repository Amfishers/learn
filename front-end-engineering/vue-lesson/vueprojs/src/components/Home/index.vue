<template>
    <div>
        <my-swipe time="4000" url="getlunbo" ></my-swipe>
        <div class="opt-list">
            <my-ul>
                <my-li v-for="(grid, index) in grids" :key="index">
                    <router-link :to="grid.router">
                        <div class="container">
                            <img :src="grid.src" />
                            <span>{{grid.title}}</span>
                        </div>
                    </router-link>
                </my-li>
            </my-ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      grids: [
        {
          src: require("../../assets/images/news.png"),
          title: "新闻资讯",
          router: {
              name: 'news.list'
          }
        },
        {
          src: require("../../assets/images/picShare.png"),
          title: "图文分享",
          router: {
              name: 'photo.list',
              params: {
                categoryId: 0
              }
          }
        },
        {
          src: require("../../assets/images/goodsShow.png"),
          title: "商品展示",
          router: {
              name: 'goods.list',
              query: {
                id: 1
              }
          }
        },
        {
          src: require("../../assets/images/feedback.png"),
          title: "留言反馈",
          router: {
              name: 'news.list'
          }
        },
        {
          src: require("../../assets/images/search.png"),
          title: "搜索资讯",
          router: {
              name: 'news.list'
          }
        },
        {
          src: require("../../assets/images/callme.png"),
          title: "联系我们",
          router: {
              name: 'news.list'
          }
        }
      ]
    };
  },

};
</script>

<style scoped>
/* scoped属性，将样式私有化 */
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
