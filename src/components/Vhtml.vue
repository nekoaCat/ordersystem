<template>
    <div>文本插值显示内容：{{ gist }}</div>
  V-text显示文本内容：<span v-text="gist"></span>
  V-html显示文本内容：<span v-html="str"></span>
</template>
<script setup>
//数据
let gist = "苏州高博职业学院"
let str = '<h3>你好！<h3>'
</script>
<style scoped></style>