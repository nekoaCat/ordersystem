<template>
  <div class="personcopy">
    personcopy
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>
    <p>电话: {{ tel }}</p>
    <p>性别: {{ sex ? '男' : '女' }}</p>
    <p>擅长科目:</p>
    <p v-html="rawHtml"></p>
    <p :style="{ color }">喜欢的颜色: {{ color }}</p>
    <br />
    <button @click="ChangeName">修改姓名</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'PersonCopy',
})

// 使用 ref 声明响应式数据
const name = ref('张三')
const age = ref(18)
const tel = ref('1234567890')
const sex = ref(true)
const rawHtml = ref('<span style="font-style: italic;">Vue.js</span>')
const color = ref('red')

// 修改姓名的方法
function ChangeName() {
  name.value = '小强'
  console.log(name.value)
}

// 使用 defineExpose 暴露内部状态，父组件通过 ref 可以访问
defineExpose({
  name,
  age,
  tel,
  sex,
  color,
})
</script>

<style scoped>
.personcopy {
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  width: 360px;
}
</style>
