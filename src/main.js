// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'amfe-flexible'
import './assets/base.scss'
Vue.config.productionTip = false
document.body.addEventListener('touchstart', function () { })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
