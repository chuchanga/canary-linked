<template>
  <div id="app" class="bg-culturedwhite">
    <Navbar class="fixed z-50 w-full" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
