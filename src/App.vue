<template>
  <div class="app">
    <!-- <h1>你好啊！Hello Vue!</h1> -->
    <!-- <Person /> 标签使用了从 ./components/Person.vue 导入的 Person 子组件 -->
    <!-- <Person /> -->
    <!-- <Personcopy /> -->
    <!-- <Car/> -->
    <!-- <Vtext /> -->
    <!-- <Vhtml /> -->
    <!-- <Vif /> -->
    <!-- <Vfor /> -->
    <!-- <Vbindclass /> -->
    <!-- <Von1 /> -->
    <Von2 />
  </div>
</template>

<!-- Vue 3 引入的组合式 API 语法糖 -->
<script setup>
// 导入了位于同一项目 components 目录下的 Person 子组件<Person /> 标签
// 导入后即可在模板中<template></template>直接以 <Person /> 的形式使用，无需手动注册。
// import Person from './components/Person.vue';
// import Car from './components/Car.vue';
// import Personcopy from "./components/Personcopy.vue";
// import Vtext from './components/Vtext.vue';
// import Vhtml from './components/Vhtml.vue';
// import Vif from './components/Vif.vue';
// import Vfor from './components/Vfor.vue';
// import Vbindclass from './components/Vbindclass.vue';
// import Vbindstyle from './components/Vbindstyle.vue';
// import Von1 from './components/Von1.vue';
import Von2 from './components/Von2.vue';

defineOptions({
  name: 'App', //组件名,方便 Vue DevTools 调试
});
// export default {
//   name: "App", //组件名
//   components: { Personcopy }, //注册组件Personcopy
// };
</script>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
