<template>
  <h2>当前求和</h2>
  <h3>{{ count }}</h3>
  <button @click="count++">+1</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style scoped>

</style>
