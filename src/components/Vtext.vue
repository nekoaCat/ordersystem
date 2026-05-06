<template>
  <div>文本插值显示内容：{{ gist }}</div>
  V-text显示文本内容：<span v-text="gist"></span>
</template>
<script setup>
import { ssrExportNameKey } from "vite/module-runner";

//数据
let gist = "苏州高博职业学院";
</script>
<style scoped></style>
