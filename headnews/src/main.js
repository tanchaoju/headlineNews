import Vue from 'vue'
import App from './App.vue'
import '@/styles/reset.css'
import { Toast } from 'vant'

Vue.config.productionTip = false

Vue.use(Toast)
new Vue({
  render: h => h(App)
}).$mount('#app')
