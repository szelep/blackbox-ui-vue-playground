import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import './assets/base.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(ElementPlus);
