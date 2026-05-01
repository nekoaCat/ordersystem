<template>
  <div style="text-align: center">
    <!-- 动态绑定 style，字体大小由 fontSize 决定；显示当前边长 len -->
    <h2 v-bind:style="{ fontSize: fontSize }">正方形的边长是{{ len }}</h2>
    <!-- 内联事件处理器：直接修改 len 的值（len++） -->
    <button v-on:click="len++">边长加1</button>
    <!-- 在内联事件处理器中调用方法，并传递参数 3 -->
    <button v-on:click="change(3)">边长加3</button>
    <!-- 使用方法事件处理器，绑定 size 方法 -->
    <button v-on:click="size" v-bind:style="{ fontSize: btnFontSize }">修改字体大小</button>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Von1',
});
import { ref } from 'vue';
// 响应式数据：标题字体大小，初始为 30px
const fontSize = ref('30px');
// 响应式数据：按钮字体大小，使用 ref 替代直接操作 event.target.style
const btnFontSize = ref('15px');
// 响应式数据：正方形的边长，初始为 2
const len = ref(2);
// 带参数的方法：将 len 增加指定长度
const change = (length) => {
  len.value = len.value + length;
};
// 使用 ref 响应式数据切换字体大小，避免直接操作 DOM
const size = () => {
  if (fontSize.value === '30px') {
    fontSize.value = '40px';
    btnFontSize.value = '30px';
  } else {
    fontSize.value = '30px';
    btnFontSize.value = '15px';
  }
};
</script>

<style scoped>
button {
  margin-right: 15px;
  border-radius: 5px;
}
</style>
