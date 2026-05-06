<template>
 <div style="text-align: center">
    <!-- 第一个盒子，具备盒子样式，有颜色 -->
     <div class="div" v-bind:class="{color:isGray,border:isBorder }"></div>
     <!-- 第2个盒子，具备盒子样式，有颜色、有边框 -->
      <div class="div" v-bind:class="[colorObj,borderObj]"></div>
        <!-- 第3个盒子，具备盒子样式，有颜色、有边框 -->
         <div v-bind:class="[div,{color:isGray},isBorder ? '': border]"></div>
 </div>
</template>
<script setup>
 import{computed,ref} from'vue';
 const div=ref('div');
 const border=ref('border');
 const isGray=ref(true);
 const isBorder=ref(false);
 const colorObj=ref({color:false});
 const borderObj=computed(()=>{
    const getBorder=!isBorder.value;
    return {border:getBorder}
 })
</script>
<style scoped >
/*基础盒子样式*/
    .div {
        width: 100px;
        height: 100px;
        margin-right: 15px;
        display: inline-block;
    }
    /*边框类：黑色虚线边框*/
    .border {
        border: 1px dashed black;
    }
    /*背景类：白到灰的渐变*/
    .color {
        background: linear-gradient(white, gray);
    }
</style>
