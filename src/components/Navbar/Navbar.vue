<template>
  <nav class="nav flex flex-col px-4 lg:flex-row">
    <div
      class="flex justify-between lg:block lg:justify-start lg:w-auto lg:static"
    >
      <div class="lg:ml-8">
        <router-link to="/home"
          ><img
            class="h-20 w-20 m-auto"
            src="../../assets/logo.svg"
            alt="logo"
          />
          <div
            class=" uppercase font-bold tracking-wide -mt-4 p-2 text-white hover:text-cyberyellow"
          >
            Canary Linked
          </div>
        </router-link>
      </div>
      <button
        class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        v-on:click="toggleNavbar(), closeUserFromBurguer()"
      >
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div
      v-bind:class="{ hidden : !showMenu, flex : showMenu }"
      class="flex lg:flex lg:flex-grow items-center"
    >
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li v-on:click="toggleNavbar()" class="nav-item">
          <router-link
            class="px-3 py-4 lg:py-10 flex items-center text-md lg:text-xl leading-snug text-white hover:text-cyberyellow"
            to="/board"
            >Nuestro Tablón</router-link
          >
        </li>
        <li v-on:click="toggleNavbar()" class="nav-item">
          <router-link
            class="px-3 py-4 lg:py-10 flex items-center text-md lg:text-xl leading-snug text-white hover:text-cyberyellow"
            to="/training"
            >Orientación Laboral</router-link
          >
        </li>
        <li v-on:click="toggleNavbar()" class="nav-item">
          <router-link
            class="px-3 py-4 lg:py-10 flex items-center text-md lg:text-xl leading-snug text-white hover:text-cyberyellow"
            to="/contact"
            >Contacto</router-link
          >
        </li>
        <li v-on:click="toggleNavbar()" class="nav-item">
          <router-link
            class="px-3 py-4 lg:mr-10 lg:py-10 flex items-center text-md lg:text-xl leading-snug text-white hover:text-cyberyellow"
            to="/about"
            >Sobre Nosotros</router-link
          >
        </li>
        <div @mouseenter="toggleUserMenu()" @mouseleave="toggleUserMenu()" class="container w-32 z-40 hover:text-cyberyellow lg:ml-2 lg:mr-8">
          <div class="flex flex-col lg:text-lg">
            <button v-if="!userImageUrl"
              class="mt-2 p-2 hover:text-cyberyellow items-center text-culturedwhite focus:outline-none rounded-full"
            >
              <i class="far fa-user fa-2x rounded-full self-center"></i>
            </button>
            <img class="h-14 w-14 mt-2 self-center object-cover rounded-full cursor-pointer" v-if="userImageUrl!=null" :src=userImageUrl alt="Foto de perfil del usuario">
            <span
              v-on:click="toggleUserMenu()"
              v-if="isLoggedIn"
              class="cursor-pointer block text-culturedwhite text-center text-xs"
              >Sesión iniciada como {{ currentUser }}</span
            >
            <span
              v-on:click="toggleUserMenu()"
              v-if="!isLoggedIn"
              class="cursor-pointer block text-culturedwhite text-center self-center text-xs"
              >No ha iniciado sesión</span
            >
            <div v-if="open" class="absolute mt-24 bg-richblack w-32">
              <div
                v-on:click="toggleUserMenu(), toggleNavbar()"
                v-if="!isLoggedIn"
                class="cursor-pointer dropdown-item block p-2 border-b text-culturedwhite border-davysgray hover:bg-cyberyellow hover:border-richblack hover:text-richblack"
              >
                <router-link to="/login">Iniciar Sesión</router-link>
              </div>
              <div
               v-on:click="toggleUserMenu(), toggleNavbar()"
                v-if="!isLoggedIn"
                class="cursor-pointer dropdown-item block p-2 border-b text-culturedwhite border-davysgray hover:bg-cyberyellow hover:border-richblack hover:text-richblack"
              >
                <router-link to="/signup">Regístrate</router-link>
              </div>
              <div
                v-on:click="toggleUserMenu(), toggleNavbar()"
                v-if="isLoggedIn"
                class="cursor-pointer dropdown-item block p-2 border-b text-culturedwhite border-davysgray hover:bg-cyberyellow hover:border-richblack hover:text-richblack"
              >
                <router-link to="/profile">Perfil</router-link>
              </div>
              <div v-if="isLoggedIn"
              v-on:click="toggleUserMenu(), toggleNavbar()">
                <div
                  class="cursor-pointer dropdown-item block p-2 text-culturedwhite hover:bg-cyberyellow hover:border-richblack hover:text-richblack"
                  @click="logout" v-on:click="toggleUserMenu(), toggleNavbar()"
                >
                  Logout
                </div>
              </div>
            </div>
          </div>
        </div>
      </ul>
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
      userImageUrl: null
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  mounted() {
    if (firebase.auth().currentUser) {
      firebase.storage().ref("users/" + firebase.auth().currentUser.uid + "/profile.jpg").getDownloadURL().then(imgUrl => {
        this.userImageUrl = imgUrl;
      });
    }
  },

  methods: {
    toggleNavbar () {
      this.showMenu = !this.showMenu;
    },
    toggleUserMenu () {
      this.open = !this.open;
    },
    closeUserFromBurguer () {
      if (this.open === true) {
        this.open = false;
      }
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
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
.nav {
  background: #161616;
}

</style>
