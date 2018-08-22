<template>
  <div class="new-detail">
    <nav-bar :title="title" />
    <div class="news-title">
      <p>{{newsDetail.title}}</p>
      <div>
        <span>{{newsDetail.click}}次点击</span>
        <span>分类:民生经济</span>
        <span>添加时间:{{newsDetail.add_time | converTime('YYYY-MM-DD')}}2015-01-01</span>
      </div>
    </div>
    <div class="news-content" v-html="newsDetail.content"><!--{{newsDetail.content}}--></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsDetail: {}, // 新闻详情
      title: ''
    };
  },
  created() {
    // 获取路由查询
    let id = this.$route.query.id;
    this.$axios
      .get("getnew/" + id)
      .then(res => {
        this.newsDetail = res.data.message[0];
      })
      .catch(err => {
        console.log(err);
      });
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    let title = ''
    if(from.name ==  null) {
      if(to.name === 'news.detail') {
        title = '新闻详情'
      }else if(to.name === 'photo.info') {
        title = '商品图文介绍'
      }
    }else if(from.name === 'news.list') {
      title = '新闻详情'
    }else if(from.name === 'goods.detail') {
      title = '商品图文介绍'
    }

    // 最终都放行，打不了复制一个title 为空串
    next(vm => {
      vm.title = title  //  vm 就是未来组件对象的this
    })
  }
};
</script>
<style>
.new-detail {
  margin-bottom: 55px;
}
.new-detail .news-title {
  margin-top: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.new-detail .news-title p {
  color: #0a87f8;
  font-size: 20px;
  font-weight: bold;
}
.new-detail .news-title span {
  margin-right: 10px;
}
/*主体文章的左右距离*/
.new-detail .news-content {
  padding: 10px 5px;
}
.new-detail .news-content img {
  width: 100%;
}
</style>
