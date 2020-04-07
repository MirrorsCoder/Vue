// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import G_Directive from "./g_directive"

Vue.config.productionTip = false

// 全局自定义指令
// Vue.directive('focus', {
//   inserted(el){
//     el.focus();
//   }
// })
// Vue.directive('mycss',{
//   inserted(el){
//     el.style.color="#f00";
//   }
// })
// 全局过滤器
// Vue.filter("author",function(value){
//   return value + "-iwen"
// })
// Vue.filter("money",function(value){
//   return "$" + value  // ￥
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
