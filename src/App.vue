<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <el-container>
        <el-header>
          <h1>Vue 订单系统 - 学习示例</h1>
        </el-header>
        <el-main>
          <el-tabs v-model="activeTab" type="border-card">
            <el-tab-pane label="v-model 双向绑定" name="vmodel">
              <Vmodel />
            </el-tab-pane>
            <el-tab-pane label="事件处理" name="von2">
              <Von2 />
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-config-provider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Von2 from './components/Von2.vue'
import Vmodel from './components/Vmodel.vue'

defineOptions({
  name: 'App',
})

const activeTab = ref('vmodel')
</script>

<style scoped>
.app {
  background-color: #f5f7fa;
  min-height: 100vh;
}

.el-header {
  background-color: #409eff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.el-header h1 {
  margin: 0;
  font-size: 24px;
}

.el-main {
  padding: 20px;
}
</style>
