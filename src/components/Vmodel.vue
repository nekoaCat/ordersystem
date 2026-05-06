<template>
  <div style="padding: 20px; max-width: 500px; margin: auto">
    <h2>v-model双向数据绑定示例</h2>
    <div>
      <label>单行文本</label>
      <input type="text" v-model="formData.text" placeholder="请输入单行文本" />
      <p>当前输入内容：{{ formData.text }}</p>
    </div>
    <div>
      <label>多行文本</label>
      <textarea v-model="formData.textarea" placeholder="请输入多行文本" rows="3"></textarea>
      <p>当前输入内容：{{ formData.textarea }}</p>
    </div>
    <div>
      <label>性别</label>
      <input type="radio" value="男" v-model="formData.gender" />男
      <input type="radio" value="女" v-model="formData.gender" />女
      <p>当前选择：{{ formData.gender }}</p>
    </div>
    <!-- Element-plus 单选按钮-->
    <div class="mb-2 ml-4">
      <el-radio-group v-model="radio1">
        <el-radio value="1" size="large">男</el-radio>
        <el-radio value="2" size="large">女</el-radio>
      </el-radio-group>
    </div>
    <div>
      <label>复选框</label>
      <label>
        <input type="checkbox" value="阅读" v-model="formData.hobbies" /></label>阅读
      <label>
        <input type="checkbox" value="旅行" v-model="formData.hobbies" /></label>旅行
      <label>
        <input type="checkbox" value="运动" v-model="formData.hobbies" /></label>运动
      <p>当前选择：{{ formData.hobbies.join(", ") }}</p>
    </div>

    <div>
      <select v-model="formData.city">
        <option value="">请选择城市</option>
        <option value="北京">北京</option>
        <option value="上海">上海</option>
        <option value="广州">广州</option>
      </select>
      <p>请选择您的城市：{{ formData.city }}</p>
    </div>
    <hr />
    <h3>所有表单数据（实时响应）</h3>
    <pre>{{ JSON.stringify(formData, null, 2) }}</pre>
  </div>
</template>
<script setup>
import { ref } from "vue";
import "element-plus/dist/index.css";
defineOptions({
  name: "VModelDemo",
});
const formData = ref({
  text: "",
  textarea: "",
  gender: "男",
  hobbies: [],
  city: "",
});
const radio1 = ref("1");
</script>
<style scoped></style>
