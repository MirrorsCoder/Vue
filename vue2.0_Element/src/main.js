// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { Button, Select, Option, Steps, Step } from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Steps)
Vue.use(Step)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
