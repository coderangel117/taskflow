import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import mitt from 'mitt'

import App from './App.vue'

const app = createApp(App)
const emitter = mitt()
app.provide('emitter', emitter)

app.use(router).use(createPinia())

app.mount('#app')
