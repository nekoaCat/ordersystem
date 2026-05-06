<template>
  <div>
    <!-- Vue中的事件修饰符：
        1.prevent：阻止默认事件（常用）；
        2.stop：阻止事件冒泡（常用）；
        3.once：事件只触发一次（常用）
        4.capture：使用事件的捕获模式；
        5.self：只有event.target是当前操作的元素时才触发事件；
        6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕；
        -->
    <h2>[事件修饰符]Demo</h2>
    <h2>欢迎来到{{ gist }}学习</h2>
    <!-- 1.prevent：阻止默认事件（常用) -->
    <a href="http://www.gist.edu.cn/" @click.prevent="showInfo">点我提示信息</a>
    <!-- 2.stop：阻止事件冒泡（常用）； -->
    <div class="demo1" @click="showInfo('div')">
      <button @click.stop="showInfo('button')">点击查看信息</button>
    </div>
    <!-- 3.once：事件只触发一次（常用） -->
    <button @click.once="showInfo('button')">点击查看信息</button>
    <!-- 4.capture：使用事件的捕获模式；由外向内 -->
    <div class="box1" @click.capture="showInfo('div1')">
      div1
      <div class="box2" @click="showInfo('div2')">div2</div>
    </div>
    <!-- 5.self：只有event.target是当前操作的元素时才触发事件； -->
    <div class="demo1" @click.self="showMsg">
      <button @click="showMsg">点击查看信息</button>
    </div>
  </div>
</template>
<script setup>
//数据
const gist = "苏州高博职业学院";
//方法
function showInfo(msg) {
  alert(msg);
}
const showMsg = () => {
  alert(event.target);
};
</script>
<style scoped>
* {
  margin-top: 20px;
}
.demo1 {
  height: 50px;
  background-color: skyblue;
}
.box1 {
  background-color: skyblue;
  width: 500px;
}
.box2 {
  background-color: orange;
  width: 400px;
  margin-left: 10px;
}
</style>
