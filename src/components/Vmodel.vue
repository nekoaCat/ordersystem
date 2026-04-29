<template>
<div style="padding: 20px; max-width: 500px; margin: auto;">
<h2>v-model 双向数据绑定</h2>
<!-- v-model 语法糖，简化了表单元素的双向绑定 -->
<!-- 1. input 输入框 -->
<input type="text" v-model="formData.text" placeholder="请输入文本" />
<p>输入的文本：{{ formData.text }}</p>
<!-- 2. textarea 多行文本 -->
<textarea v-model="formData.Textarea" placeholder="请输入多行文本"></textarea>
<p>输入的多行文本：{{ formData.Textarea }}</p>
<!-- 3. radio 单选框 -->
<label><input type="radio" v-model="formData.sex" value="男" /> 男</label>
<label><input type="radio" v-model="formData.sex" value="女" /> 女</label>
<p>选择的性别：{{ formData.sex }}</p>
<!-- 4. checkbox 多选框 -->
<label><input type="checkbox" v-model="formData.hobby" value="唱歌" /> 唱歌</label>
<label><input type="checkbox" v-model="formData.hobby" value="跳舞" /> 跳舞</label>
<label><input type="checkbox" v-model="formData.hobby" value="画画" /> 画画</label>
<p>选择的爱好：{{ formData.hobby }}</p>
<!-- 5. select 下拉框 -->
<select v-model="formData.city">
<option value="">请选择城市</option>
<option value="北京">北京</option>
<option value="上海">上海</option>
<option value="广州">广州</option>
</select>
<p>选择的城市：{{ formData.city }}</p>
</div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  text: '',
  Textarea: '',
  sex: '',
  hobby: [],
  city: ''
})
</script>

<style scoped>

</style>
