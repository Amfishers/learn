<template>
    <div class="header">
        <i @click="goback" class="left"></i>
        <h1 class="title">{{title}}</h1>
    </div>
</template>

<script>
export default {
    name: 'nav-bar',
    props: ['title'],
    methods: {
        goback() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.header {
    position: relative;
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #f1f1f1;
}
.left {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    z-index: 2;
}
.left::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-left: 2px solid #000;
    border-top: 2px solid #000;
    transform: rotate(-45deg) translate(0, -50%);
}
.title {
    flex: 1;
    margin: 0 60px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: center;
    line-height: 40px;
}

</style>
