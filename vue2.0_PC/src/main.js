// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import store from "./store"
import VueSwiper from "vue-awesome-swiper"
import 'swiper/dist/css/swiper.css'

Vue.use(VueSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
