<template>
  <div class="father">
    <h2>父组件 Father</h2>
    <p>从根组件 App 收到的数据：{{ appTitle }}</p>
    <!-- 显示父组件自己的数据（将作为非函数 props 传递给子组件） -->
    <p>当前父组件姓名：{{ fatherName }}</p>
    <p>当前父组件年龄：{{ fatherAge }}</p>
    <hr />
    <!-- 向子组件 Child 传递 props：
         非函数 props：name 和 age（传值）
         函数 props：on-update-data（传递函数），短横线写法（kebab-case） -->
    <Child
      :name="fatherName"
      :age="fatherAge"
      :on-update-data="handleChildUpdate"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

defineProps({
  appTitle: {
    type: String,
    default: ''
  }
})

const fatherName = ref('王大明')
const fatherAge = ref(40)

// 定义一个函数，准备通过 props 传给子组件
// 子组件会调用此函数，将新的姓名和年龄作为参数回传给父组件
const handleChildUpdate = (newData) => {
  if (newData.name) {
    fatherName.value = newData.name
  }
  if (newData.age !== undefined) {
    fatherAge.value = newData.age
  }
}
</script>

<style scoped>
.father {
  border: 2px solid #3498db;
  padding: 20px;
  border-radius: 10px;
  background-color: #ecf5fe;
}
.father p {
  margin: 8px 0;
}
</style>
