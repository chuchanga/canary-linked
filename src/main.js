import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "tailwindcss/tailwind.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("./views/Login.vue")
  },
  {
    path: "/signup",
    name: "login",
    component: () => import("./views/Signup.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
