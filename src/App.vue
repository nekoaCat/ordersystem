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
            <el-tab-pane label="ref 获取子组件" name="personcopy">
              <!-- 使用 ref 属性声明模板引用，替代传统的 document.getElementById -->
              <Personcopy ref="personcopyRef" />
              <el-divider />
              <el-button type="primary" @click="getChildData">
                通过 ref 获取子组件数据
              </el-button>
              <el-button @click="resetChildName">重置子组件姓名</el-button>
              <el-card v-if="childInfo" style="margin-top: 16px;">
                <p>从子组件获取的姓名：{{ childInfo.name }}</p>
                <p>从子组件获取的年龄：{{ childInfo.age }}</p>
                <p>从子组件获取的电话：{{ childInfo.tel }}</p>
              </el-card>
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
import Personcopy from './components/personcopy.vue'
import { ElMessage } from 'element-plus'

defineOptions({
  name: 'App',
})

const activeTab = ref('vmodel')

// 使用 ref(null) 声明子组件引用，替代 document.getElementById
const personcopyRef = ref(null)
const childInfo = ref(null)

// 通过 ref 访问子组件实例，读取 defineExpose 暴露的数据
function getChildData() {
  if (personcopyRef.value) {
    childInfo.value = {
      name: personcopyRef.value.name,
      age: personcopyRef.value.age,
      tel: personcopyRef.value.tel,
    }
    ElMessage.success('已从子组件获取数据')
  }
}

// 通过 ref 修改子组件暴露的状态
function resetChildName() {
  if (personcopyRef.value) {
    personcopyRef.value.name = '已重置'
    ElMessage.info('子组件姓名已重置')
  }
}
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
