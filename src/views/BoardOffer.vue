<template>
  <div class="bg-minionyellow flex justify-center space-x-12 p-24 rounded-3xl">
    <section class="flex flex-col rounded-lg lg:grid grid-cols-3 gap-4">
      <div
        v-for="card in arrayBoard"
        :key="card"
        class="wrapper max-w-xs bg-white rounded-b-md shadow-lg"
      >
        <div v-if="card.show">
          <div>
            <img :src="card.image" />
          </div>
          <div class="space-y-6 p-8">
            <div class="grid justify-items-stretch space-y-8">
              <p
                class="text-richblack font-semibold text-md text-lg lg:text-2xl"
              >
                {{ card.title }}
              </p>
              <p
                class="text-richblack leading-sm justify-self-start text-lg lg:text-xl"
              >
                <i class="text-cyberyellow fas fa-map-marker-alt"></i>
                {{ card.place }}
              </p>
              <p
                class="text-richblack leading-sm justify-self-start text-lg lg:text-xl"
              >
                <i class="text-cyberyellow far fa-calendar-alt"></i>
                {{ card.time }}
              </p>
              <p
                class="text-richblack leading-sm justify-self-start text-lg lg:text-xl"
              >
                <i class="text-cyberyellow fas fa-info-circle"></i>
                {{ card.description }}
              </p>
            </div>
            <ButtonCard text="Guardar proyecto"></ButtonCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ButtonCard from "../components/ButtonCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    ButtonCard,
  },
  computed: {
    ...mapState("paginationBoard", ["arrayBoard"]),
  },
};
</script>
<style>
</style>
