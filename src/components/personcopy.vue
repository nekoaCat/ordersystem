<template>
  <div class="personcopy">
    personcopy
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>
    <p>电话: {{ tel }}</p>
    <p>性别: {{ sex ? '男' : '女' }}</p>
    <p>擅长科目:</p>
    <p v-html="rawHtml"></p>
    <p :style="{ color }">喜欢的颜色: {{ color }}</p>
    <br />
    <button @click="ChangeName">修改姓名</button>
  </div>
</template>

<script>
export default {
  name: 'PersonCopy',
  data() {
    return {
      name: '张三',
      age: 18,
      tel: '1234567890',
      sex: true,
      rawHtml: '<span style="font-style: italic;">Vue.js</span>',
      color: 'red',
    }
  },
  methods: {
    ChangeName() {
      this.name = '小强'
      console.log(this.name)
    },
  },
}
</script>

<style scoped>
.personcopy {
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  width: 360px;
}
</style>
