<template>
  <div>
    <!-- Vue中的事件修饰符:
    1.prevent: 阻止默认事件 (常用) ;
    2.stop: 阻止事件冒泡 (常用) ;
    3.once: 事件只触发一次 (常用)
    4.capture: 使用事件的捕获模式;
    5.self: 只有event. target是当前操作的元素是才触发事件;
    6.passive: 事件的默认行为立即执行, 无需等待事件回调执行完毕;
    -->
    <h2>[事件修饰符]Demo</h2>
    <h2>欢迎来到[{{ name }}]学习</h2>
    <!-- 若是阻止超链接默认跳转行为,直接在事件后加事件修饰符prevent禁止超链接的默认行为 -->
    <!-- 阻止默认事件 (常用) -->
    <a href="http://www.gist.edu.cn/" @click.prevent="showInfo">点我提示信息</a>
    <!-- 阻止事件冒泡 (常用) -->
    <div class="demo1" @click="showInfo">
      <button @click="showInfo">点我提示信息</button>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Von2',
});
const name = '苏州高博职业学院';
function showInfo() {
  alert('同学你好');
}
</script>

<style scoped>
* {
  margin-top: 20px;
}
.demo1 {
  height: 50px;
  background-color: skyblue;
}
</style>
