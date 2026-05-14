<template>
  <div class="father">
    <h2>父组件 Father</h2>
    <p>从子组件 Child 收到的计数：{{ receiveCount }}</p>
    <Child @child-click="handleChildClick" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const receiveCount = ref(0)

const handleChildClick = (val) => {
  receiveCount.value = val
  console.log(`父组件接收到子组件传来的计数: ${val}`)
}
</script>

<style scoped>
.father {
  border: 2px solid #3498db;
  padding: 20px;
  border-radius: 10px;
  background-color: #ecf5fe;
}
</style>
