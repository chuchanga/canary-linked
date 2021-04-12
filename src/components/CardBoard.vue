<template>
  <div>
    <section class="flex flex-col justify-center rounded-lg">
      <div class="space-y-8 bg-white rounded-b-md shadow-lg p-8">
        <img :src="image" />
        <div class="grid justify-items-stretch space-y-8">
          <p class="text-richblack font-semibold text-md text-lg lg:text-2xl">
            {{ title }}
          </p>
          <p class="text-richblack justify-self-start text-lg lg:text-xl">
            <i class="text-cyberyellow fas fa-map-marker-alt"></i>
            {{ place }}
          </p>
          <p class="text-richblack justify-self-start text-lg lg:text-xl">
            <i class="text-cyberyellow far fa-calendar-alt"></i>
            {{ duration }}
          </p>
          <p class="text-richblack justify-self-start text-lg lg:text-xl">
            <i class="text-cyberyellow fas fa-info-circle"></i>
            {{ description }}
          </p>
        </div>
        <ButtonCard text="Guardar proyecto"></ButtonCard>
      </div>
    </section>
  </div>
</template>
<script>
import ButtonCard from "../components/ButtonCard.vue";

export default {
  props: ["title", "description", "place", "image", "duration"],
  components: {
    ButtonCard,
  },
};
</script>
<style>
</style>
