import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Store from "@/stores/mainRoot/index"

const app = createApp(App)

app.use(Store);
app.mount('#app')
