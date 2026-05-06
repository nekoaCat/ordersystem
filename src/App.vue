<template>
  <div>
    <h1>组件局部注册演示</h1>
    <p>局部注册的组件只能在当前组件中使用，后代组件无法直接使用。</p>

    <h2>方式一：直接导入（语法糖自动局部注册）</h2>
    <LocalChildA />

    <h2>检查父组件使用孙子组件GrandChild还是子组件LocalChild，看文本显示内容。</h2>
    <GrandChild />

    <h2>方式二：使用 components 选项注册</h2>
    <LocalChildB />
  </div>
</template>

<script setup>
// 方式一：在 script setup 中导入即自动局部注册
import LocalChildA from './components/LocalChild.vue';
import GrandChild from './components/GrandChild.vue';
</script>

<script>
// 方式二：传统 Options 写法局部注册（仅作对比）
import LocalChildB from './components/LocalChild.vue';
export default {
  components: {
    LocalChildB
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>
