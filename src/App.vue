<template>
  <div id="app">
    <h1>Vue3 props通信演示（Father and Childs）</h1>
    <Father :app-title="appTitle" />
  </div>
</template>

<script setup>
import Father from './components/props/Father.vue'
const appTitle = '这是父组件传递的标题'

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
