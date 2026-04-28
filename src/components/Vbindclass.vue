<template>
  <div style="text-align: center">
    <!-- 第一个 div: 对象语法绑定 class
         当 isBorder 为 true 时添加 'border' 类, 否则不添加
         当 isGray 为 true 时添加 'color' 类, 否则不添加
    -->
    <div class="div" v-bind:class="{ border: isBorder, color: isGray }"></div>
    <!-- 第二个 div: 数组语法绑定 class
         数组内包含两个对象:
         - colorObj: 响应式对象, 控制 'color' 类 (当前值为 { color: false }, 所以不添加)
         - borderObj: 计算属性对象, 根据 isBorder 取反决定是否添加 'border' 类 (当前 isBorder = false, 所以 borderObj 返回 { border: true }, 添加边框)
    -->
    <div class="div" v-bind:class="[colorObj, borderObj]"></div>
    <!-- 第三个 div: 数组语法绑定 class
         数组内包含三项:
         1. 条件表达式: isBorder ? '' : border
            - 如果 isBorder 为 true, 添加空字符串 (无效果)
            - 如果 isBorder 为 false, 添加 border 类 (因为 border 是 ref, 模板中自动解包)
         2. 对象 { color: isGray }: 当 isGray 为 true 时添加 'color' 类
         3. div (ref 变量) : 添加 'div' 类 (标签本身已有 class="div", 重复无害)
    -->
    <div class="div" v-bind:class="[isBorder ? '' : border, { color: isGray }, div]"></div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Vbindclass',
});
import { ref, computed } from 'vue';
// ref 变量, 存储类名字符串
const div = ref('div'); // 基础类名, 与标签中的 class="div" 相同
const border = ref('border'); // 基础类名, 与标签中的 class="div" 相同
// 控制类添加的布尔值
const isBorder = ref(false); // false: 不通过对象语法直接添加边框 (但在第三个 div 的条件中取反添加)
const isGray = ref(true); // true: 添加渐变背景类
// 响应式对象, 用于控制 color 类
const colorObj = ref({ color: false }); // 初始为 false, 不添加 color 类
// 计算属性, 根据 isBorder 动态返回边框对象
const borderObj = computed(() => {
  var getBorder = !isBorder.value; // 取反: isBorder 为 false 时 getBorder 为 true
  return { border: getBorder };
});
</script>

<style scoped>
/* 基础盒子样式 */
.div {
  width: 100px;
  height: 100px;
  margin-right: 15px;
  display: inline-block;
}
/* 边框类: 黑色虚线边框 */
.border {
  border: 1px dashed black;
}
/* 背景类: 白到灰的渐变 */
.color {
  background: linear-gradient(white, gray);
}
</style>
