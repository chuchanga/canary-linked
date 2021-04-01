import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";

import router from "./router/index.js";
import store from "./store";

/* Import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBj4Z-rcjquT5-LkbVjNJ9gJQrjqvIhLdc",
  authDomain: "canarylinked.firebaseapp.com",
  projectId: "canarylinked",
  storageBucket: "canarylinked.appspot.com",
  messagingSenderId: "747510999077",
  appId: "1:747510999077:web:7eabf7fbb62dcfbe1137cc",
  measurementId: "G-V3L131RGK5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore(); */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
