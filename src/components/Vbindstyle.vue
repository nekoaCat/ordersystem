<template>
  <div>
    <!-- 使用数组语法绑定多个样式对象
         styleObj1 和 styleObj2 中的样式会被合并应用到该 div
         若属性冲突，后定义的对象（styleObj2）会覆盖前者
    -->
    <div v-bind:style="[styleObj1, styleObj2]">Vue.js指令</div>
    <!-- 使用对象语法绑定样式
         样式对象中的属性值可以是响应式数据（如 text），也可以是固定值
         这里 text 的值为 'center'，因此文本居中，同时字体大小设为 50px
    -->
    <div v-bind:style="{ 'text-align': text, 'font-size': '50px' }">使用v-bind指令为style属性绑定数据</div>
  </div>
</template>

<script setup>
// 设置组件名称，便于 Vue DevTools 调试
defineOptions({
  name: 'Vbindstyle',
});
import { ref } from 'vue';
// 响应式数据，控制文本对齐方式（用于第二个 div）
const text = ref('center');
// 第一个样式对象：文本居中 + 下边距
const styleObj1 = ref({
  'text-align': 'center', // 使用引号包裹的属性名
  marginBottom: '20px',
});
// 第二个样式对象：字体粗细 600 + 字体大小 80px
const styleObj2 = ref({
  'font-weight': '600', // 引号包裹
  fontSize: '80px',
});
</script>

<style scoped></style>
