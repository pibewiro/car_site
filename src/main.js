import Vue from 'vue'
import App from './App.vue'
import router from '../routes/index'
import store from "./store/index"
import VueResource from 'vue-resource'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')