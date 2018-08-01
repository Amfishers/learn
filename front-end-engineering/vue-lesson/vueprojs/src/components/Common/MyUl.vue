<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
export default {
    name: 'my-ul',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
