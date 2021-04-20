import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import firebase from "firebase/app";
import "firebase/auth";
import "./components/firebaseInit.js";
import router from "./router/index.js";
import store from "./store";
import VueAnalytics from "vue-analytics";

Vue.use(VueAnalytics, {
  id: "UA-194336838-1",
  router,
});

Vue.config.productionTip = false;
Vue.prototype.$firebaseDatabase = firebase.default.firestore();

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
