import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/signup",
    name: "singup",
    component: () => import("../views/Signup.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/training",
    name: "training",
    component: () => import("../views/Training.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/UserProfile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
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
  },

];

const router = new VueRouter({
  routes,
  mode: "history"
});

// Nav Guards

router.beforeEach((to, from, next) => {
  // Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NOT logged in
    if (!firebase.auth().currentUser) {
      // Go to Login
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if IS logged in
    if (firebase.auth().currentUser) {
      // Go to Login
      next({
        path: "/home",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    next();
  }
});

export default router;
