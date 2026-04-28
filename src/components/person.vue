<template>
  <div class="person">
    <h2>需求：当水温达到60度或者水位达到80cm时，给服务器发送请求</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">点击水温+10</button>
    <button @click="changeHeight">点击水位+10</button>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';

// 数据
let temp = ref(10);
let height = ref(0);

// 函数（方法）
function changeTemp() {
  temp.value += 10;
}
function changeHeight() {
  height.value += 10;
}

// 【可选】多数据监听 watch 写法（注释掉，保留供参考）
// watch([temp, height], (value) => {
//   let [newTemp, newHeight] = value;
//   if (newTemp >= 60 || newHeight >= 80) {
//     console.log('给服务器发请求');
//   }
// });

// 【当前使用】watchEffect 监听实现
watchEffect(() => {
  // 业务逻辑
  if (temp.value >= 60 || height.value >= 80) {
    console.log('给服务器发请求');
  }
});
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.bind-color {
  color: red;
}
</style>
