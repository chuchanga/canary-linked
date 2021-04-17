<template>
  <div
    class="subheader-image bg-cover bg-center h-auto text-gray-100 py-24 px-10 object-fill"
  >
    <div class="md:w-1/2 mt-24 space-y-8 m-auto">
      <p class="text-3xl font-bold" :title="title">{{ title }}</p>
      <p
        class="text-2xl mb-10 leading-none space-y-8"
        :description="description"
      >
        {{ description }}
      </p>
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
<style>
.subheader-image {
  background-image: url("../assets/subheaderImg.jpg");
  background-position: center 20%;
}
</style>
