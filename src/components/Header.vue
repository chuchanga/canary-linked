<template>
  <div class="content">
  <header class="px-5 py-4 bg-richblack text-white">
    <div class="flex justify-between items-center">
      <span class="flex space-x-1">
        <img class="h-24 w-24" src="../assets/logo.svg" alt="logo">
          <!--path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /-->
      </span>
        <h3 class="uppercase font-bold tracking-wide text-cyberyellow">Canary Linked</h3>
      <!-- Small screens -->
      <div class="sm:hidden">
        <button type="button" class="block">
          <svg class="h-6 w-6 fill-current" src="../assets/logo.svg" viewBox="0 0 24 24" width="24" height="24">
            <path v-if="isOpen" d="M19.57 17.053a1.786 1.786 0 0 1-2.517 2.518L12 14.518 6.947 19.57a1.786 1.786 0 0 1-2.518-2.518L9.482 12 4.43 6.947a1.786 1.786 0 0 1 2.518-2.518L12 9.482l5.053-5.053a1.785 1.785 0 0 1 2.518 2.518L14.518 12l5.053 5.053z" />
            <path v-else d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
        </button>
      </div>
      <!-- sm and up -->
      <div class="hidden sm:flex space-x-3" v-for="page in Pages" :key="page">
          <router-link :to="page.route" >
            {{ page.name }}
          </router-link>
      </div>
    </div>

    <!-- NavBar when is open -->
    <!-- <nav class="mt-3 border-t border-teal-200 border-opacity-25 py-4">
      <div class="flex flex-col space-y-2">
        <a class="link link--active" href="#">Cartelera</a>
        <a class="link" href="#">Próximamente</a>
        <a class="link" href="#">Precios</a>
        <a class="link" href="#">Contacto</a>
      </div>
    </nav> -->
  </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      Pages: [
        { route: "/home", name: "Home" },
        { route: "/about", name: "Sobre nosotros" },
        { route: "/training", name: "Noticias" },
        { route: "/login", name: "Iniciar sesión" },
        { route: "/signup", name: "Registrarse" },
        { route: "/profile", name: "Mi perfil" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
</style>
