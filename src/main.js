import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Catalog from './components/Catalog/Catalog.vue'

Vue.config.productionTip = false
Vue.component('Catalog', Catalog)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
