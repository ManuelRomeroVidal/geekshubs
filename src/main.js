import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

var app = createApp(App).use(store).use(router);
app.use(VueAxios, axios)
app.mount('#app');