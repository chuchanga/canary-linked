<template>
  <nav class="nav">
    <div class="flex px-4 flex-wrap items-center">
      <div
        class="w-full flex justify-between lg:block lg:justify-startflex flex-row lg:w-auto lg:static lg:justify-center"
      >
        <div>
          <router-link to="/home"
            ><img
              class="-mb-3 -mt-3 h-24 w-24 m-auto"
              src="../../assets/logo.svg"
              alt="logo"
            />
            <div
              class="text-lg uppercase font-bold tracking-wide text-white hover:text-cyberyellow"
            >
              Canary Linked
            </div>
          </router-link>
        </div>
        <button
          class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none z-40"
          type="button"
          v-on:click="toggleNavbar()"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        v-bind:class="{ hidden: !showMenu, flex: showMenu }"
        class="lg:flex lg:flex-grow items-center flex justify-center"
      >
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link
              class="px-3 py-2 flex items-center text-lg leading-snug text-white hover:text-cyberyellow"
              to="/board"
              >Tablón Formativo</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="px-3 py-2 flex items-center text-lg leading-snug text-white hover:text-cyberyellow"
              to="/training"
              >Orientación Laboral</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="px-3 py-2 flex items-center text-lg leading-snug text-white hover:text-cyberyellow"
              to="/contact"
              >Contacto</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="px-3 py-2 flex items-center text-lg leading-snug text-white hover:text-cyberyellow"
              to="/about"
              >Sobre Nosotros</router-link
            >
          </li>
        </ul>
        <div class="container w-32">
          <div class="flex flex-col lg:text-lg">
            <button
              @click="open = !open"
              class="mt-2 p-2 hover:text-cyberyellow items-center text-culturedwhite focus:outline-none rounded-full"
            >
              <i class="far fa-user fa-2x rounded-full self-center z-10"></i>
            </button>
            <span
              @click="open = !open"
              v-if="isLoggedIn"
              class="cursor-pointer block text-culturedwhite text-center text-sm -mt-2 mb-2"
              >Sesión iniciada como {{ currentUser }}</span
            >
            <span
              @click="open = !open"
              v-if="!isLoggedIn"
              class="cursor-pointer block text-culturedwhite text-center self-center text-sm mb-2"
              >No ha iniciado sesión</span
            >
            <div v-if="open" class="absolute mt-28 bg-richblack w-32">
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
  </nav>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      showMenu: false,
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
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
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
.nav {
  background: rgba(8, 8, 8, 0.938);
}

@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
</style>
