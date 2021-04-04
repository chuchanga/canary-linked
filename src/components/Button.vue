<template>
  <div v-if="inputLogin">
    <button class="bg-bluejeans hover:bg-capriblue py-4 text-center w-full px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20">
    </button>
  </div>
  <div v-else>
    <!--
    <button
      class="bg-white py-4 text-center w-full px-17 md:px-12 md:py-4 text-black rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20 border-4 border-blue-400"
    >
      {{ text }}
    </button>
    -->
    <router-link to="/signup" v-slot="{ href, navigate }">
      <button
        :href="href"
        @click="navigate"
        class="bg-white py-4 text-center w-full px-17 md:px-12 md:py-4 text-black rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20 border-4 border-blue-4000"
      >
        {{ text }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "inputLogin"],
};
</script>

<style></style>
