<template>
  <div class="bg-minionyellow flex justify-center space-x-12 p-24 rounded-3xl">
    <section class="flex flex-col rounded-lg lg:grid grid-cols-3 gap-4">
      <div
        v-for="card of Board"
        :key="card"
        class="wrapper max-w-xs bg-white rounded-b-md shadow-lg"
      >
        <p class="text-4xl">{{ card.h1 }}</p>
        <img class="h-24 absolute" :src="card.icon" />
        <div>
          <img :src="card.image" alt="" />
        </div>
        <div class="p-8 space-y-6">
          <div class="grid justify-items-stretch space-y-8">
            <p class="text-gray-700 font-semibold text-md">
              {{ card.title }}
            </p>
            <p class="text-sm text-gray-900 leading-sm justify-self-start">
              <i class="fas fa-map-marker-alt"></i>
              {{ card.site }}
            </p>
            <p class="text-sm text-gray-900 leading-sm justify-self-start">
              <i class="far fa-calendar-alt"></i>
              {{ card.time }}
            </p>
          </div>
          <ButtonCard text="Guardar proyecto"></ButtonCard>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import interview from "../assets/interview.jpg";
import connection from "../assets/connection.jpg";
import offer from "../assets/offer.jpg";

import ButtonCard from "../components/ButtonCard.vue";
export default {
  components: {
    ButtonCard,
  },
  data() {
    return {
      Board: [
        {
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          description:
            "Buscamos persona formada y con experiencia en haber trabajado en Recursos Humanos para incorporación inmediata.",
          image: interview,
        },
        {
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          description:
            "Buscamos persona formada y con experiencia en haber trabajado en Recursos Humanos para incorporación inmediata.",
          image: connection,
        },
        {
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          description:
            "Buscamos persona formada y con experiencia en haber trabajado en Recursos Humanos para incorporación inmediata.",
          image: offer,
        },
        {
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          description:
            "Buscamos persona formada y con experiencia en haber trabajado en Recursos Humanos para incorporación inmediata.",
          image: offer,
        },
        {
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          description:
            "Buscamos persona formada y con experiencia en haber trabajado en Recursos Humanos para incorporación inmediata.",
          image: offer,
        },
        {
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          description:
            "Buscamos persona formada y con experiencia en haber trabajado en Recursos Humanos para incorporación inmediata.",
          image: offer,
        },
      ],
    };
  },
};
</script>
<style>
</style>
