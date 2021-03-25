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
    path: "/header",
    name: "header",
    component: () => import("../views/Header.vue")
  },
  {
    path: "/signup",
    name: "login",
    component: () => import("../views/Signup.vue")
  },
  {
    path: "/training",
    name: "training",
    component: () => import("../views/Training.vue")
  },
  {
    path: "/trainingsaul",
    name: "trainingsaul",
    component: () => import("../views/TrainingSaul.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
