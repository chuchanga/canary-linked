<template>
  <div class="content">
  <div class="px-64 py-3 bg-richblack text-white">
    <div class="flex justify-between items-center">
      <div class="flex flex-col space-x-1">
        <router-link to="/home"><img class="-mb-2 h-24 w-24" src="../assets/logo.svg" alt="logo">
        <div class="text-xs uppercase font-bold tracking-wide text-cyberyellow">Canary Linked</div>
        </router-link>
      </div>
            <div>
              <router-link to="/training">Noticias</router-link>
            </div>
            <div>
              <router-link to="/contact">Contacto</router-link>
            </div>
            <div>
              <router-link to="/about">Sobre Nosotros</router-link>
            </div>
            <div v-if="isLoggedIn">
              <router-link to="/profile">Perfil</router-link>
            </div>
             <div v-if="!isLoggedIn">
              <router-link to="/login">Inicia Sesión</router-link>
            </div>
            <div v-if="!isLoggedIn">
              <router-link to="/signup">Regístrate</router-link>
            </div>
            <div v-if="isLoggedIn">
              <button class="bg-richblack hover:bg-cyberyellow text-center w-full text-white hover:text-richblack rounded leading-tight md:text-base font-sans" @click="logout">Logout</button>
            </div>
            <div>
              <DropdownMenu />
            </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import DropdownMenu from "./DropdownMenu.vue";
export default {
  name: "Navbar",
  components: {
    DropdownMenu
  },
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.go({ path: this.$router.path });
      });
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
</style>
