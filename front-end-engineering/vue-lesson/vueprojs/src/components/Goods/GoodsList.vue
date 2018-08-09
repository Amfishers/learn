<template>
    <div>
        <ul>
            <li>
                <a>
                    <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200239192345.jpg">
                    <div class="title">好东西啊</div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥80</span>
                            <s>￥9000</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩99件
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200239192345.jpg">
                    <div class="title">好东西啊</div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥80</span>
                            <s>￥9000</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩99件
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200239192345.jpg">
                    <div class="title">好东西啊</div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥80</span>
                            <s>￥9000</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩99件
                            </div>
                        </div>
                    </div>
                </a>
            </li>
            
          
        </ul>
    </div>
</template>
<script>
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
