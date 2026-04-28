(空文件会导致 Vue SFC 解析/ESLint 规则报错；添加一个最小组件占位)

<template>
  <div />
</template>

<script setup>
defineOptions({
  name: 'test-page',
})
</script>
