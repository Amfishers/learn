<template>
    <div class="tmpl">  
        <nav-bar title="图文详情" />
        <div class="photo-title">
            <p>{{info.title}}</p>
            <span>发起日期：{{info.add_time | converTime('YYYY-MM-DD')}}</span>
            <span>{{info.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <div class="thumb">
            <vue-preview :slides="imgs" />
        </div>
        <div class="photo-desc">
            <p v-html="info.content"></p>
        </div>
        <comment :cid="$route.query.id"/>
    </div>
</template>
<script>
export default {
    data () {
        return {
            info: {}, // 图文详情数据 
            imgs: []
        }
    },
    created () {
        let detailId = this.$route.query.id
        this.$axios
            .get('getimageInfo/' + detailId)
            .then(res => {
                this.info = res.data.message[0]
            })
            .catch(err => console.log('图文详情获取失败', err))
        
        this.$axios
            .get('getthumimages/' + detailId)
            .then(res => {
                this.imgs = res.data.message
                // vue-preview 需要添加这些属性才能实现效果
                this.imgs.forEach(img => {
                    img.msrc = img.src
                    img.w = 600
                    img.h = 400
                });
            })
            .catch(err => console.log('图片缩略图获取失败', err))
            
    },
    methods: {
        handleClose () {
            console.log('图片关闭')
        }
    }
}
</script>
<style>
.photo-title {
    overflow: hidden;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}

.photo-title p {
    color: #13c2f7;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.photo-desc p {
    font-size: 14px;
}
.thumb figure {
    width: 33.333%;
    display: inline-block;
    font-size: 0;
}
.thumb img {
    width: 100%;
}

</style>
