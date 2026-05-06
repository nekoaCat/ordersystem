<template>
  <!-- grade成绩大于等于90，优秀 -->
  <h1 v-if="grade >= 90">小明的成绩：优秀</h1>
  <!-- grade成绩大于等于80且小于90，良好 -->
  <h1 v-else-if="grade >= 80 && grade < 90">小明的成绩：良好</h1>
  <!-- grade成绩大于等于70且小于80，中 -->
  <h1 v-else-if="grade >= 70 && grade < 80">小明的成绩：中</h1>
  <!-- grade成绩大于等于60且 小于70，及格-->
  <h1 v-else-if="grade >= 60 && grade < 70">小明的成绩：及格</h1>
  <!-- grade成绩小于60，不及格-->
  <h1 v-else>小明的成绩：不及格</h1>
  <h1 v-show="grade >= 90">你很棒!</h1>
</template>
<script setup>
import { ref } from "vue";
//数据
let grade = ref(70);
//两个计时器
setTimeout(() => {
  grade.value = 82;
}, 5000);
setTimeout(() => {
  grade.value = 93;
}, 10000);
</script>
<style scoped></style>
