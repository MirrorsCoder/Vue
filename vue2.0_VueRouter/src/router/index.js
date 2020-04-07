import Vue from 'vue'
import VueRouter from "vue-router"
import HelloWorld from "../components/HelloWorld.vue"
import Hi from "../components/Hi.vue"
import Index from "../components/index.vue"
import Hello1 from "../pages/hello1.vue"
import Hello2 from "../pages/hello2.vue"

Vue.use(VueRouter)


export default new VueRouter({
  linkActiveClass: "active",
  mode:'history',//历史记录
  routes: [{
      path: "/",
      redirect: "/index"
    },
    {
      path: "/hello",
      component: HelloWorld,
      redirect: "/hello/hello1",
      children: [{
          path: "hello1",
          component: Hello1
        },
        {
          path: "hello2",
          component: Hello2
        }
      ]
    },
    {
      path: "/hi/:id/:count",
      name: "hi", //有参数传递需要name
      component: Hi
    },
    {
      path: "/index",
      component: Index
    }
  ]
})
