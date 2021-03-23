import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Login from "./view/Login.vue";
import "tailwindcss/tailwind.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [{ path: "/login", component: Login }];

const router = new VueRouter({
  routes,
  mode: "history"
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
