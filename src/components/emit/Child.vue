<template>
  <div class="child">
    <h3>子组件 Child</h3>
    <p>子组件的内容：{{ count }}</p>
    <button @click="sendCountToFather">点击发送事件给父组件（子传父）</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const sendCountToFather = () => {
  count.value++
}
</script>

<style scoped>
    .child {
        border: 2px solid #f39c12;
        padding: 16px;
        margin: 10px 0;
        border-radius: 8px;
        background-color: #fef5e7;
    }
    button {
        margin-top: 8px;
        padding: 6px 12px;
    }
</style>
