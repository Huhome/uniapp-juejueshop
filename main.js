import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {axios} from "@/ults/api.js"
Vue.config.productionTip = false
Vue.prototype.$axios = axios
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import {axios} from "@/ults/api.js"
export function createApp() {
const app = createSSRApp(App)
app.config.globalProperties.$axios = axios
  return {
    app
  }
}
// #endif
