import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import axios from "axios";
Vue.prototype.axios = axios;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/page",
    children: [
      {
        path: "/page",
        name: "page",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/page.vue")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/about/About.vue")
      },
      {
        path: "/professional",
        name: "professional",
        component: () => import("../views/professional/Professional")
      },
      {
        path: "/tutoring",
        name: "tutoring",
        component: () => import("../views/tutoring/Tutoring")
      },
      {
        path: "/interview",
        name: "interview",
        component: () => import("../views/interview/Interview")
      },
      {
        path: "/information",
        name: "information",
        component: () => import("../views/information/Information")
      },
      {
        path: "/contact",
        name: "contact",
        component: () => import("../views/contact/Contact.vue")
      }
    ]
  },
  {
    path: "/pc",
    name: "Home",
    component: () => import("../views/newPage/pc.vue"),
  },
  {
    path: "/h5",
    name: "h5",
    component: () => import("../views/newPage/h5.vue"),
  }
];

const router = new VueRouter({
  routes
});

export default router;
