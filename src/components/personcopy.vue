<template>
  <!-- 使用一个 class="person" 的 <div> 作为容器。 -->
  <div class="person">
    <h1>Personcopy</h1>
    <p>单文件组件加载成功</p>
    <!-- 内部通过插值语法 {{}} 分别显示姓名、年龄和电话，数据来源于 <script setup> 中定义的变量-->
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>电话: {{ tel }}</h2>
  </div>
</template>

<!-- setup传统写法 -->
<!-- <script>
// 定义了三个常量 name、age、tel，分别赋值为字符串和数字。
// 这些数据是静态的、非响应式的，如果后续需要修改并触发视图更新，应改用 ref 或 reactive。
// 在 setup函数中声明的顶层变量会自动暴露给模板<template></template>使用，因此模板中可以直接访问 name、age、tel
export default {
  name: "Personcopy",
  setup() {
    // 定义了三个常量 name、age、tel，分别赋值为字符串和数字。
    // 这些数据是静态的、非响应式的，如果后续需要修改并触发视图更新，应改用 ref 或 reactive。
    // 在 setup函数中声明的顶层变量会自动暴露给模板<template></template>使用，因此模板中可以直接访问 name、age、tel,记得加return
    const name = "张三";
    const age = 18;
    const tel = "13812208520";
    // console.log(name);
    // console.log(age);
    // console.log(tel);
    return { name, age, tel };
  },
};
</script> -->
<!-- 传统satup函数写法,必须有return返回值 -->
 <script>
 import { ref } from 'vue';
 export default {
   name: 'Personcopy',
   setup() {
     let name = ref('张三'); //响应式数据
     const age = 18;
     const tel = '13911019078';
     const sex = true;
     const rawHtml = '<span style="font-style: italic;">Vue.js应用开发</span>';
     const color = 'bind-color';
     //添加修改姓名方法或者函数changeName
     function changeName() {
       name.value = '小强';
       console.log(name); //测试用的
     }
     return{name,age,tel,sex,rawHtml,color};
     },
 };
</script>

<!-- 使用 scoped 属性，表示样式仅作用于当前组件，避免污染全局 -->
<style scoped>
/* 为 .person 类设置了背景色（天蓝）、阴影、圆角和内边距，形成一个卡片样式的视觉呈现 */
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
