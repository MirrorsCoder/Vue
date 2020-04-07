import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Layout from "@/pages/layout"
import Details from "@/pages/details/details"
import Pet from "../pages/details/pet.vue"
import Cake from "../pages/details/cake.vue"
import Beauty from "../pages/details/beauty.vue"
import Jewellery from "../pages/details/jewellery.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:"/layout",
      children:[
        {
          path:"layout",
          component:Layout
        },
        {
          path:"details",
          component:Details,
          redirect:"/details/cake",
          children:[
            {
              path:"pet",
              component:Pet
            },
            {
              path:"cake",
              component:Cake
            },
            {
              path:"beauty",
              component:Beauty
            }, 
            {
              path:"jewellery",
              component:Jewellery
            }                                 
          ]
        }
      ]
    }
  ]
})
