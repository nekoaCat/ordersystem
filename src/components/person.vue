<template>
  <div class="Person">
    <h2>当前需求：当水温达到60度或者水位达到80厘米的时候，向服务器发送请求</h2>
    <h2>当前水温：{{ temp }}度</h2>
    <h2>当前水位：{{ height }}厘米</h2>
    <button @click="changeTemp">点击水温+10</button>&NonBreakingSpace;
    <button @click="changeHeight">点击水位+10</button>
  </div>
</template>
<script setup>
import { ref, watch, watchEffect } from "vue";
//数据
let temp = ref(10);
let height = ref(0);
//函数（方法）
function changeTemp() {
  temp.value += 10;
}
let changeHeight = () => {
  height.value += 10;
};
//监视数据,同时监视两个数据
// watch([temp, height],(newValue, oldValue) => {
//     console.log("数据变化了", newValue, oldValue);
//   });
// watch([temp, height], (value) => {
//   let [newTemp, newHeight] = value;
//   console.log(value);
//   //业务逻辑
//   if(newTemp>=60||newHeight>=80){
//     console.log('向服务器发送请求！');
    
//   }
// });
watchEffect(()=>{
  //业务逻辑
  if(temp.value>=60||height.value>=80){
     console.log('向服务器发送请求！');
  }
})
</script>
<style scoped>
.Person {
  background-color: #289deb;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
.bind-color {
  color: red;
}
</style>