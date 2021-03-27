<template>
  <div class="content flex justify-center mt-16 space-x-20">
    <carousel-3d
      :controlsVisible="true"
      :clickable="false"
      :controlsPrevHtml="'&#10092; '"
      :controlsNextHtml="'&#10093; '"
      :controlsWidth="30"
      :controlsHeight="60"
      :width="300"
      :height="400"
    >
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
          <section class="px-2">
            <div
              class="wrapper max-w-xs bg-white rounded-b-md shadow-lg overflow-hidden"
            >
              <img
                :data-index="index"
                :class="{
                  current: isCurrent,
                  onLeft: leftIndex >= 0,
                  onRight: rightIndex >= 0,
                }"
                :src="slide.src"
                alt=""
              />

              <div class="p-3 space-y-3">
                <h3 class="text-gray-700 font-semibold text-md">
                  {{ slide.title }}
                </h3>
                <p class="text-sm text-gray-900 leading-sm">
                  {{ slide.description }}
                </p>
                <p></p>
                <button
                  class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded"
                >
                  Leer más
                </button>
              </div>
            </div>
          </section>
        </template>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import job from "../assets/job.jpg";
import socialNetwork from "../assets/socialNetwork.jpg";
import offer from "../assets/offer.jpg";
export default {
  name: "CardAdvert",
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: [
        {
          title: "El trabajo: 4 claves para conseguir empleo",
          description: "Descubre los 4 tips clave para encontrar trabajo.",
          src: job,
        },
        {
          title:
            "4 cambios que debes hacer ahora en tus redes sociales si buscas",
          description:
            "Tus redes sociales pueden jugar un papel determinante en tu búsqueda de empleo.",
          text: "2",
          src: socialNetwork,
        },
        {
          title: " 5 consejos para crear la carta de presentación perfecta",
          description:
            "Descubre los 5 consejos que pueden hacerte útil para desarrollar la carta de presentación perfecta",
          text: "3",
          src: offer,
        },
      ],
    };
  },
};
</script>
<style scoped>
.carousel-3d-slide {
  background: white;
  border-color: transparent;
}
</style>
