<template>
  <div class="content">
    <div class="px-56 py-1 bg-richblack text-white">
      <div class="flex justify-between items-center">
        <div class="flex flex-col space-x-1">
          <router-link to="/home"
            ><img
              class="-mb-3 -mt-3 h-24 w-24"
              src="../assets/logo.svg"
              alt="logo"
            />
            <div
              class="text-xs uppercase font-bold tracking-wide text-cyberyellow -mt-3"
            >
              Canary Linked
            </div>
          </router-link>
        </div>
        <div class="hover:text-cyberyellow text-lg">
          <router-link to="/board">Tablón Formativo</router-link>
        </div>
        <div class="hover:text-cyberyellow text-lg">
          <router-link to="/training">Orientación Laboral</router-link>
        </div>
        <div class="hover:text-cyberyellow text-lg">
          <router-link to="/contact">Contacto</router-link>
        </div>
        <div class="hover:text-cyberyellow text-lg">
          <router-link to="/about">Sobre Nosotros</router-link>
        </div>
        <div class="container w-28">
          <div class="relative text-left inline-flex flex-col">
            <button
              @click="open = !open"
              class="mt-2 p-3 w-32 hover:text-cyberyellow bg-richblack items-center text-culturedwhite focus:outline-none rounded-full"
            >
              <i class="far fa-user fa-3x rounded-full self-center"></i>
            </button>
            <span
              @click="open = !open"
              v-if="isLoggedIn"
              class="cursor-pointer block text-culturedwhite text-center text-xs -mt-2"
              >Sesión iniciada como {{ currentUser }}</span
            >
            <span
              @click="open = !open"
              v-if="!isLoggedIn"
              class="cursor-pointer block text-culturedwhite text-center self-center text-xs mb-2"
              >No ha iniciado sesión</span
            >
            <div v-if="open" class="absolute mt-24 bg-richblack w-32">
              <div
                v-if="!isLoggedIn"
                class="cursor-pointer dropdown-item block p-2 border-b text-culturedwhite border-davysgray hover:text-cyberyellow"
              >
                <router-link to="/login">Iniciar Sesión</router-link>
              </div>
              <div
                v-if="!isLoggedIn"
                class="cursor-pointer dropdown-item block p-2 text-culturedwhite hover:text-cyberyellow"
              >
                <router-link to="/signup">Regístrate</router-link>
              </div>
              <div
                v-if="isLoggedIn"
                class="cursor-pointer dropdown-item block p-2 border-b text-culturedwhite border-davysgray hover:bg-cyberyellow hover:border-richblack hover:text-richblack"
              >
                <router-link to="/profile">Perfil</router-link>
              </div>
              <div v-if="isLoggedIn">
                <div
                  class="cursor-pointer dropdown-item block p-2 text-culturedwhite hover:bg-cyberyellow hover:border-richblack hover:text-richblack"
                  @click="logout"
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      open: false,
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
</style>
