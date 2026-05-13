<template>
  <div class="child">
    <h3>子组件Child</h3>
    <!-- 显示通过【非函数 props】接收的数据 -->
    <p>姓名来自 Father：{{ name }}</p>
    <p>年龄来自 Father：{{ age }}</p>
    <hr />
    <!-- 子组件输入框：用户输入新姓名 -->
    <label>新姓名：</label>
    <input type="text" v-model="newName" placeholder="例如：张强" /> <br />
    <label>新年龄：</label>
    <input type="number" v-model.number="newAge" /> <br />
    <button @click="sendToFather">更新父组件数据（子传父）</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 声明接收 Father 传递的 props
// 数组形式：'name' 和 'age' 是非函数值（父传子）
// 'onUpdateData' 是传递函数（子传父的桥梁）
const props = defineProps(['name', 'age', 'onUpdateData'])

// 子组件内部数据，用于存储用户输入的修改值
const newName = ref('')
const newAge = ref(0)

// 子组件方法：调用父组件传递的函数，实现子传父
const sendToFather = () => {
  if (props.onUpdateData && typeof props.onUpdateData === 'function') {
    props.onUpdateData({ name: newName.value, age: newAge.value })
    newName.value = ''
    newAge.value = 0
  } else {
    console.warn('父组件没有提供 onUpdateData 函数，无法通信')
  }
}
</script>

<style scoped>
.child {
  border: 2px solid #e67e22;
  padding: 16px;
  border-radius: 10px;
  background-color: #fff5e6;
  margin-top: 16px;
}
button {
  margin-top: 10px;
}
</style>
