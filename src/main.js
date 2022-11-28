import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'

import BootstrapVue3 from 'bootstrap-vue-3'

// Since every component imports their Bootstrap functionality,
// the following line is not necessary:
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

var app = createApp(App).use(store).use(router);
app.use(VueAxios, axios)
app.use(BootstrapVue3)
app.mount('#app');