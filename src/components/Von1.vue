<template>
  <div style="text-align: center">
    <h2 v-bind:style="{fontSize:fontSize}">正方形的边长{{len}}</h2>
    <!-- 内联时间：内部代码一行 -->
    <!-- <button v-on:click="len++">边长+1</button>&NonBreakingSpace; -->
    <button @click="len++">边长+1</button>&NonBreakingSpace;
    <!-- 方法事件 -->
    <!-- <button v-on:click="changeLen(3)">边长+3</button>&NonBreakingSpace; -->
    <button @click="changeLen(3)">边长+3</button>&NonBreakingSpace;
    <!-- 方法事件 -->
    <!-- <button v-on:click="changeSize">改变字体大小</button> -->
    <button @click="changeSize">改变字体大小</button>
  </div>
</template>
<script setup>
import { ref } from "vue";

//数据
//边长
const len = ref(2); //边长初始值2
//字体大小
const fontSize = ref("30px");//字体大小初始值
//方法（函数）
// function changeLen(length){
//     len.value=len.value+length;
// }
let changeLen=(length)=>{
    len.value=len.value+length;
}
// function changeSize(event){
// if(fontSize.value==='30px'){
//     fontSize.value='40px';//字体大小由30px变为40px
//     event.target.style.fontSize='30px';//按钮对象字体放到到30px
//     //按钮对象字体放大到30px
// }else{
// fontSize.value='30px';//字体大小还原到初始值30px
// event.target.style.fontSize='13px';//按你牛对象字体还原到初始大小
// }
// }
let changeSize=(event)=>{
if(fontSize.value==='30px'){
    fontSize.value='40px';//字体大小由30px变为40px
    event.target.style.fontSize='30px';//按钮对象字体放到到30px
    //按钮对象字体放大到30px
}else{
fontSize.value='30px';//字体大小还原到初始值30px
event.target.style.fontSize='13px';//按你牛对象字体还原到初始大小
}
}
</script>
<style scoped></style>
