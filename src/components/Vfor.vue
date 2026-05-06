<template>
  <h1>根据对象训练渲染列表</h1>
  <p v-for="(value, key) in obj">属性名：{{ key }};属性值：{{ value }}</p>
  <h1>根据数组训练渲染列表</h1>
  <p v-for="item in arrayList">
    编号：{{ item.id }};姓名：{{ item.name }};电话：{{ item.tel }}
  </p>
</template>
<script setup>
import { ref } from "vue";

//声明数据
//对象
const obj = ref({
  title: "vue.js",
  url: "https://cn.vuejs.org/guide/introduction.html",
  author: "莜雨溪",
});
//数组
const arrayList = ref([
  {id:1,name:'张某',tel:'8000****'},
  {id:2,name:'李某',tel:'9000****'},
  {id:3,name:'王某',tel:'1000****'},
]);
</script>
<style scoped>

</style>
332