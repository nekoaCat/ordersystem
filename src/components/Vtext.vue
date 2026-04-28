<template>
  <div>文本插值显示内容：{{ gist }}</div>
  v-test显示内容：<span v-test="gist">你好</span>
</template>

<script setup>
//数据
let gist = '苏州高博职业学院';
</script>

<style scoped></style>
