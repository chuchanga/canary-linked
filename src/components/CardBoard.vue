<template>
  <div class="bg-minionyellow flex justify-center space-x-12 p-24 rounded-3xl">
    <section class="flex flex-col rounded-lg lg:grid grid-cols-3 gap-4">
          <div>
            <img :src="image" />
          </div>
          <div class="p-8 space-y-6 wrapper max-w-xs bg-white rounded-b-md shadow-lg">
            <div class="grid justify-items-stretch space-y-8">
              <p
                class="text-richblack font-semibold text-md text-lg lg:text-2xl"
              >
                {{ title }}
              </p>
              <p
                class="text-richblack leading-sm justify-self-start text-lg lg:text-xl"
              >
                <i class="text-cyberyellow fas fa-map-marker-alt"></i>
                {{ place }}
              </p>
              <p
                class="text-richblack leading-sm justify-self-start text-lg lg:text-xl"
              >
                <i class="text-cyberyellow far fa-calendar-alt"></i>
                {{ duration }}
              </p>
              <p
                class="text-richblack leading-sm justify-self-start text-lg lg:text-xl"
              >
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
