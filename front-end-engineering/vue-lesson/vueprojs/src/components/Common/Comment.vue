<template>
    <div class="tmpl">
        <div class="photo-bottom">
            <ul>
                <li class="photo-comment">
                    <div>
                        <span>提交评论</span>
                        <span><a >返回</a></span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea></textarea>
                </li>
                <li>
                    <mt-button type="primary" size="large">发表评论</mt-button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>44条评论</span>
                    </div>
                </li>
            </ul>
            <ul class="comment-list">
                <li v-for="(msg,index) in msgs" :key="index">
                    {{msg.user_name}}： {{msg.content}}  {{msg.add_time | relativeTime}}
                </li>
            </ul>
            <mt-button type="danger" size="large" @click="loadMore(page)" v-if="isBtnShow">加载更多</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'comment',
    data () {
        return {
            page: '1',  // 组件内控制页码
            msgs: {},  // 数据
            isBtnShow: true
        }
    },
    props: ['cid'],
    created () {
        let id = this.$route.query.page || '1'
        this.loadMore()
    },
    methods: {
        loadMore (page) {
            this.$axios
                .get(`getcomments/${this.cid}?pageindex=${this.page}`)
                .then(res => {
                    if(res.data.message.length === 0) {
                        this.$toast({
                            message: '没有数据了',
                        })
                        this.isBtnShow = false
                    }
                    if(page) {
                        this.msgs = this.msgs.concat(res.data.message)
                    }else {
                        this.msgs = res.data.message
                    }
                    this.page++
                })
                .catch(err => console.log('获取评论失败', err))
        }
    }
}
</script>
<style scoped>
.txt-comment textarea {
    width: 98%;
    height: 100px;
}
.photo-comment > div span:nth-child(1) {
    float: left;
    font-weight: bold;
    margin-left: 5px;
}

.photo-comment > div span:nth-child(2) {
    float: right;
}

.photo-comment {
    height: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    line-height: 30px;
    margin-bottom: 5px;
}

.txt-comment {
    padding: 5 5;
}

.txt-comment textarea {
    margin-bottom: 5px;
}

.comment-list li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
    word-wrap: break-word;
}

li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}
</style>
