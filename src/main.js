import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET'

createApp(App).mount('#app')
