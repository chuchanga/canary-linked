import Vue from "vue";
import Login from "../view/Login.vue";
import Header from "../view/Header.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/login", component: Login },
  { path: "/header", component: Header }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
