import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GlobalButton from './components/GlobalButton.vue'

const app = createApp(App)

// 注册全局组件
// 这里的 'GlobalButton' 是组件的名称，可以在任何地方使用 <GlobalButton /> 来引用这个组件
app.component('GlobalButton', GlobalButton)
app.use(createPinia())
app.use(router)

app.mount('#app')
