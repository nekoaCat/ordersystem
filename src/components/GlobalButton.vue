<template>
  <button class="global-btn" @click="handleClick">
    <!-- slot 插槽，允许父组件传入自定义内容，如果父组件没有传入内容，则显示默认文字“全局按钮” -->
    <slot>全局按钮</slot>
  </button>
</template>
<script setup>
const handleClick = () => {
  alert("我是全局注册的按钮组件！");
};
</script>
<style scoped>
/* 为 class="global-btn" 的元素设置样式 */
.global-btn {
  /* 背景颜色：绿色 */
  background-color: #42b983;
  /* 文字颜色：白色 */
  color: white;
  /* 去掉默认边框 */
  border: none;
  /* 内边距：上下8px，左右16px */
  padding: 8px 16px;
  /* 圆角边框 */
  border-radius: 4px;
  /* 鼠标悬停时变为手型 */
  cursor: pointer;
}
/* 鼠标悬停时的样式 */
.global-btn:hover {
  /* 背景颜色变深一点 */
  background-color: #359268;
}
</style>
