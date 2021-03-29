<template>
  <div class="content">
    <BarMenu />
    <br />
    <table class="bg-richblack text-white -mt-16 m-auto">
      <tr>
        <th rawspan="10" v-for="(page, index) in pages" :key="index">
          <router-link :to="page.route">
            {{ page.name }}
          </router-link>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import BarMenu from "./BarMenu.vue";
export default {
  name: "Header",
  components: {
    BarMenu,
  },
  data() {
    return {
      pages: [
        { route: "/header", name: "Header" },
        { route: "/login", name: "Iniciar sesión" },
        { route: "/signup", name: "Registrarse" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap");
</style>
