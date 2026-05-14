<template>
  <div id="app">
    <h1>Vue3 自定义事件示例：子组件向父组件通信</h1>
    <Father />
  </div>
</template>

<script setup>
import Father from './components/emit/Father.vue'
</script>

<style scoped>
body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 20px;
    }
    #app {
        max-width: 800px;
        margin: 0 auto;
    }
</style>
