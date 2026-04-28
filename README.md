# OrderSystem - Vue 3 学习项目

这是一个用于学习 Vue 3 的实战练习项目，采用 Vite + Vue 3 + Pinia + Vue Router 技术栈。

## 项目功能

本项目主要演示 Vue 3 的核心基础概念和常用技术：

- **组件基础**：Car、Carcopy、person、personcopy 等组件用于练习组件的创建与使用
- **指令学习**：Vtext、Vbindclass、Vbindstyle、Von1、Von2 等组件分别演示 `v-text`、`v-bind`、事件处理等核心指令
- **页面测试**：test.vue 作为页面测试文件

## 技术栈

- Vue 3.5
- Vite 7
- Pinia 3 (状态管理)
- Vue Router 5
- Vitest (单元测试)
- Playwright (端到端测试)

## 安装与运行

```bash
# 安装依赖
npm install

# 开发模式运行（热重载）
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 测试指令

```bash
# 运行单元测试（Vitest）
npm run test:unit

# 运行端到端测试（Playwright）
# 首次运行需要安装浏览器
npx playwright install

# 运行 e2e 测试
npm run test:e2e

# 仅在 Chromium 上运行测试
npm run test:e2e -- --project=chromium

# 调试模式运行测试
npm run test:e2e -- --debug
```

## 代码规范

```bash
# 运行所有 lint 检查
npm run lint

# 格式化代码
npm run format
```

## 项目结构

```
src/
├── components/      # Vue 组件
│   ├── Car.vue
│   ├── Vbindclass.vue
│   ├── Von1.vue
│   └── ...
├── pages/           # 页面文件
│   └── test.vue
├── router/          # 路由配置
├── stores/          # Pinia 状态管理
├── App.vue          # 根组件
└── main.js          # 入口文件
```

## 推荐 IDE 配置

- VS Code + Vue Official 插件（禁用 Vetur）
- 浏览器：Chromium 系列（Chrome/Edge/Brave）配合 Vue DevTools