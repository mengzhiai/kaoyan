import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/page",
    children:[
      {
        path: "/page",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/page.vue")
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
