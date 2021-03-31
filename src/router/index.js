import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/signup",
    name: "singup",
    component: () => import("../views/Signup.vue")
  },
  {
    path: "/training",
    name: "training",
    component: () => import("../views/Training.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/UserProfile.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/board",
    name: "board",
    component: () => import("../views/Board.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
