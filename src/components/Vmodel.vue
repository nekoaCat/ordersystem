<template>
  <div style="padding: 20px; max-width: 600px; margin: auto;">
    <el-card shadow="hover">
      <template #header>
        <h2 style="margin: 0;">v-model 双向数据绑定</h2>
      </template>

      <el-form label-width="100px" label-position="top">
        <!-- 1. input 输入框 -->
        <el-form-item label="文本输入">
          <el-input v-model="formData.text" placeholder="请输入文本" clearable />
          <p style="margin-top: 8px; color: #606266;">输入的文本：{{ formData.text }}</p>
        </el-form-item>

        <!-- 2. textarea 多行文本 -->
        <el-form-item label="多行文本">
          <el-input v-model="formData.Textarea" type="textarea" placeholder="请输入多行文本" :rows="3" />
          <p style="margin-top: 8px; color: #606266;">输入的多行文本：{{ formData.Textarea }}</p>
        </el-form-item>

        <!-- 3. radio 单选框 -->
        <el-form-item label="性别选择">
          <el-radio-group v-model="formData.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
          <p style="margin-top: 8px; color: #606266;">选择的性别：{{ formData.sex }}</p>
        </el-form-item>

        <!-- 4. checkbox 多选框 -->
        <el-form-item label="兴趣爱好">
          <el-checkbox-group v-model="formData.hobby">
            <el-checkbox label="唱歌" />
            <el-checkbox label="跳舞" />
            <el-checkbox label="画画" />
          </el-checkbox-group>
          <p style="margin-top: 8px; color: #606266;">选择的爱好：{{ formData.hobby }}</p>
        </el-form-item>

        <!-- 5. select 下拉框 -->
        <el-form-item label="城市选择">
          <el-select v-model="formData.city" placeholder="请选择城市" style="width: 100%;">
            <el-option label="北京" value="北京" />
            <el-option label="上海" value="上海" />
            <el-option label="广州" value="广州" />
          </el-select>
          <p style="margin-top: 8px; color: #606266;">选择的城市：{{ formData.city }}</p>
        </el-form-item>

        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const formData = ref({
  text: '',
  Textarea: '',
  sex: '',
  hobby: [],
  city: ''
})

const handleSubmit = () => {
  ElMessage.success('提交成功！')
  console.log('表单数据：', formData.value)
}

const handleReset = () => {
  formData.value = {
    text: '',
    Textarea: '',
    sex: '',
    hobby: [],
    city: ''
  }
  ElMessage.info('已重置')
}
</script>

<style scoped>
</style>
