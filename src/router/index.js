import Vue from "vue";
import Login from "../views/Login.vue";
import Header from "../views/Header.vue";
import Signup from "../views/Signup.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/login", component: Login },
  { path: "/header", component: Header },
  { path: "/signup", component: Signup }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
