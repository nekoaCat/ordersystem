<template>
  <h2>自定义指令</h2>
  <!-- 需求1：定义v-big指令，和v-text功能类似，但会把绑定的数值放大10倍。
       需求2：定义一个v-fbind指令，和v-bind功能类似，但可以让其所绑定的input元素默认获取焦点。 -->

  <!-- 准备好一个容器 -->
  <div>
    <h2>当前的n值是:<span v-text="n"></span></h2>
    <h2>放大10倍后的n值是:<span v-big="n"></span></h2>
    <button @click="n++">点我n+1</button>

    <!-- 添加一个输入框，使用v-fbind指令，使其自动获取焦点 -->
    <div>
      <input type="text" name="" id="" placeholder="我会自动获取焦点" v-fbind />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
let n = ref(1);

// 定义 v-big 指令：将绑定的数值放大10倍后显示在元素中
const vBig = {
  mounted(el, binding) {
    // 设置元素的文本内容为绑定值的10倍
    // el：指令绑定的元素（这里是span），binding：一个对象，包含传递给指令的值等参数
    el.textContent = binding.value * 10;
  },
  updated(el, binding) {
    // 当绑定的值更新时，重新设置文本内容
    el.textContent = binding.value * 10;
  },
};

// 定义 v-fbind 指令：让绑定的 input 元素自动获取焦点
const vFbind = {
  // 元素挂载后自动获取焦点
  mounted(el) {
    el.focus();
  },
};
</script>
<style scoped>
/* 为 .app 类设置了灰色背景、阴影、圆角和内边距，使整个根组件呈现为一个卡片式的视觉容器 */
/* .app {
background-color: #ddd;
box-shadow: 0 0 10px;
border-radius: 10px;
padding: 20px;
} */
</style>