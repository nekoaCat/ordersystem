<template>
  <div class="grandchild">
    <h4>我是局部注册的孙子组件 GrandChild</h4>
    <!-- 尝试使用 LocalChild 组件（注意：局部注册不会自动传递给后代） -->
    <!-- 下面的代码会报错，因为 孙子组件GrandChild 中没有注册子组件 LocalChild -->
    <LocalChild />
  </div>
</template>

<script setup>
// 注意：没有导入或注册 LocalChild，所以运行时会报错
</script>

<style scoped>
.grandchild {
  border: 1px solid #42b983;
  padding: 10px;
  margin: 10px 0;
}
</style>
