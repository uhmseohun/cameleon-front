import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueSwal from 'vue-swal'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.$api = axios.create({
  baseURL: 'http://cameleon-api.uhmtoto.space',
  headers: {
    common: {
      authorization: localStorage.token
    }
  }
})

Vue.use(vueSwal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
