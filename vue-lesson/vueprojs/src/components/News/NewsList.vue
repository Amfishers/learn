<template>
  <div class="main">
    <nav-bar title="新闻列表" />
    <ul>
      <li v-for="list in NewsList" :key="list.id">
        <router-link :to="{name: 'news.detail', query: {id: list.id}}">
          <div class="wrapper">
            <div class="img">
              <img :src="list.img_url" :alt="list.title">
            </div>
            <div class="title">
              <p>{{list.title}}</p>
            </div>
            <div class="info">
              <span class="moods">点击数: {{list.click}}</span>
              <span class="time">{{list.add_time | converTime('YYYY-MM-DD')}}</span>
            </div>
          </div>
        </router-link>
      </li>  
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      NewsList: []
    }
  },
  // created适合操作数据
  created () {
    this.$axios.get('getnewslist')
    .then(res => {
      this.NewsList =res.data.message
    })
    .catch( err => console.log('新闻列表异常', err))
  }
}
</script>

<style scoped>
.main {
  margin-bottom: 55px;
}
.wrapper {
  position: relative;
  padding: 12px 12px 12px 70px; 
}
.img {
  position: absolute;
  top: 12px;
  left: 12px;
}
.img img {
  width: 45px;
  height: 45px;
}
.title {
  padding-bottom: 10px;
  color: #000;
}
.title p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info {
  color: #999;
}
.time {
  float: right;
}
</style>
