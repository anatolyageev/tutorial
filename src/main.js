import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
// import './assets/styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
  store
}).$mount('#app')
