<template>
    <div class="tmpl">
        <nav-bar title="图文列表" />
        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li>
                    <a href="javascript:;">标题1</a>
                </li>
                <li>
                    <a href="javascript:;">标题2</a>
                </li>
                <li>
                    <a href="javascript:;">标题3</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="item in imgs" :key="item.id">
                    <a>
                        <img v-lazy="item.img_url">
                        <p>
                            <span>{{item.title}}</span>
                            <br>
                            <span>{{item.zhaiyao}}</span>
                        </p>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
export default {
  data () {
    return {
      imgs: []  //图片数据
    }
  },
  beforeRouteUpdate(from, to, next) {
    let categoryId = this.$route.params.categoryId;
    this.categoryId()
  },
  created() {
    // 1.获取路由参数
    let categoryId = this.$route.params.categoryId
    // 2.通过url拼接发送请求
    this.$axios.get('getimages/' + categoryId)
    .then(res => {
      this.imgs = res.data.message
    })
    .catch(err => {
      console.log('获取图片失败',err)
    })
    // 3.获取数据做渲染
  },
  
}
</script>
<style>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>
