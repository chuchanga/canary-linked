<template>
  <div
    class="bg-cover bg-center h-auto text-richblack py-24 px-10 object-fill"
    style="
      background-image: url(https://www.eluniversal.com.mx/sites/default/files/2016/02/29/tecnologia_oficina.jpg);
    "
  >
    <div class="md:w-1/2 mt-24 space-y-8">
      <p class="text-3xl font-bold" :title="title">{{ title }}</p>
      <p
        class="text-2xl mb-10 leading-none space-y-8"
        :description="description"
      >
        {{ description }}
      </p>
      <router-link to="/contact">
        <button
          class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded focus:outline-none mt-12"
          :text="text"
        >
          {{ text }}
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import ButtonCard from "../components/ButtonCard.vue";
export default {
  name: "Subheader",
  props: ["title", "description", "text"],
  components: ButtonCard,
};
</script>
