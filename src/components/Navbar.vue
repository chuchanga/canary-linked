<template>
  <div class="content">
  <div class="px-64 py-3 bg-richblack text-white">
    <div class="flex justify-between items-center">
      <div class="flex flex-col space-x-1">
        <router-link to="/home"><img class="-mb-2 h-24 w-24" src="../assets/logo.svg" alt="logo">
        <div class="text-xs uppercase font-bold tracking-wide text-cyberyellow">Canary Linked</div>
        </router-link>
      </div>
      <!--<div class="hidden sm:flex space-x-3 text-lg" v-for="page in Pages" :key="page">
          <router-link :to="page.route" >
            {{ page.name }}
          </router-link>
          <DropdownMenu />
      </div>-->
            <div><router-link to="/training">Noticias</router-link></div>
            <div><router-link to="/contact">Contacto</router-link></div>
            <div><router-link to="/about">Sobre Nosotros</router-link></div>
            <div><router-link to="/signup">Registrarse</router-link></div>
            <div><DropdownMenu /></div>

    </div>
  </div>
  </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";
export default {
  name: "Navbar",
  components: {
    DropdownMenu
  },
  data() {
    return {
      Pages: [

        { route: "/training", name: "Noticias" },
        { route: "/contact", name: "Contacto" },
        { route: "/about", name: "Sobre nosotros" },
        { route: "/profile", name: "Mi perfil" },
        { route: "/login", name: "Iniciar sesión" },
        // { route: "/signup", name: "Registrarse" },

      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
</style>
