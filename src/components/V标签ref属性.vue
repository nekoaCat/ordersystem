<template>
<div class="person">
<h1>中国</h1>
<h2 ref="title">苏州</h2>
<h3>苏州高博职业学院</h3>
<button @click="showLog">点击获取h2元素</button>
</div>
</template>
<script setup>
import {ref,defineExpose} from 'vue';
let a=ref(0);
let b=ref(1);
let c=ref(2);
let title=ref();
const showLog=()=>{
    console.log(title.value);
};
defineExpose({a,b,c});
</script>
<style scoped>
.person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>