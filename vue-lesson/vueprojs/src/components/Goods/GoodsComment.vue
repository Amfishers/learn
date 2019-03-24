<!--  -->
<template>
  <div>
    <nav-bar title="商品评论"/>
    <comment :cid="$route.query.id" />
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}

</script>
<style scoped>
</style>
