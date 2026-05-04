<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <el-container>
        <el-header>
          <h1>Vue 订单系统 - 学习示例</h1>
        </el-header>
        <el-main>
          <!-- 动态组件展示区域：自动映射 src/components 下所有 .vue 组件 -->
          <el-tabs v-model="activeTab" type="border-card">
            <el-tab-pane
              v-for="(component, index) in dynamicComponents"
              :key="index"
              :label="component.meta.label"
              :name="component.meta.name"
            >
              <component :is="component.component" />
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
import { ElMessage } from 'element-plus'

defineOptions({
  name: 'App',
})

// 使用 import.meta.glob 动态导入 src/components 下所有 .vue 文件
// 使用 { eager: true } 让导入同步完成，直接获得模块对象而非异步函数
const componentModules = import.meta.glob('./components/*.vue', { eager: true })

// 构建动态组件列表，包含元数据用于渲染 tab
const dynamicComponents = Object.entries(componentModules).map(([path, module]) => {
  // 从文件路径提取组件名，如 ./components/Vmodel.vue -> Vmodel
  const fileName = path.split('/').pop().replace('.vue', '')
  // 从模块的 default 组件获取 name 或使用文件名作为默认值
  const componentName = module.default?.name || fileName

  return {
    component: module.default,
    meta: {
      // 使用文件名作为 tab label（可自定义映射逻辑）
      label: fileName,
      name: fileName,
    },
  }
})

// 兼容原有逻辑：保留特殊组件的 ref 访问能力
const activeTab = ref(dynamicComponents.length > 0 ? dynamicComponents[0].meta.name : 'vmodel')
const personcopyRef = ref(null)
const childInfo = ref(null)

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