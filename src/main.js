import Vue from "vue";
import App from "./App.vue";

import "tailwindcss/tailwind.css";

import router from "./router/index.js";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
