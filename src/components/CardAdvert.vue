<template>
  <div>
    <section class="px-2 p-32 rounded-lg flex space-x-8">
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
          <div class="grid justify-items-stretch absolute">
            <div class="justify-self-start mt-4">
              <i class="fas fa-briefcase"></i>
            </div>
          </div>
          <ButtonCard></ButtonCard>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import job from "../assets/job.jpg";
import connection from "../assets/connection.jpg";
import offer from "../assets/offer.jpg";
import pushpinred from "../assets/pushpinred.png";
import pushpinblue from "../assets/pushpinblue.png";

import ButtonCard from "../components/ButtonCard.vue";
export default {
  name: "CardAdvert",
  components: {
    ButtonCard,
  },
  data() {
    return {
      Board: [
        {
          h1: "OFERTAS",
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          image: job,
          icon: pushpinred,
        },
        {
          h1: "OFERTAS",
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          image: job,
          icon: pushpinred,
        },
        {
          h1: "OFERTAS",
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          image: job,
          icon: pushpinred,
        },
        {
          h1: "Proyectos",
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          image: job,
          icon: pushpinred,
        },
        {
          h1: "Proyectos",
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          image: connection,
          icon: pushpinblue,
        },
        {
          h1: "Proyectos",
          title: "Técnico Prevención de Riesgos Laborales",
          site: "Los Cristianos",
          time: "full time",
          image: offer,
          icon: pushpinred,
        },
      ],
    };
  },
};
</script>
