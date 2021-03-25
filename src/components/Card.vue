<template>
  <div class="container m-auto">
    <div class="grid grid-cols-3 gap-4">
      <div
        class="max-w-sm rounded overflow-hidden shadow-lg"
        v-for="card in Training"
        v-bind:key="card.title"
      >
        <img class="w-full" src="../assets/job.jpg" alt="Girl job" />
        <div class="px-6 py-4 space-y-6">
          <div class="font-bold text-xl mb-2">{{ card.title }}}</div>
          <p class="text-gray-700 text-base">
            {{ card.description }}
          </p>
          <div id="demo">
            <button
              v-on:click="show = !show"
              class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded"
            >
              Leer más/Oculta
            </button>
            <transition name="fade">
              <p v-if="show">{{ card.text }}</p>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ButtonCard from "../components/ButtonCard.vue";
export default {
  el: "#demo",
  name: "Card",
  components: ButtonCard,
  data() {
    return {
      show: true,
      Training: [
        {
          title: "hola",
          description: "asdadad",
          text:
            "asdasdsdasdasdasdasdasdadsasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
        },
        {
          title: "quetal",
          description: "rerter",
          text: "asdasdsdasdasdasdasdasdadsdddddddddd",
        },
        {
          title: "Bien",
          description: "rerter",
          text: "asdasdsdadsdddddddddd",
        },
        {
          title: "hola",
          description: "asdadad",
          text: "asdasddddddddd",
        },
        { title: "quetal", description: "rerter" },
        { title: "Bien", description: "rerter" },
        { title: "hola", description: "asdadad" },
        { title: "quetal", description: "rerter" },
        { title: "Bien", description: "rerter" },
        { title: "hola", description: "asdadad" },
        { title: "quetal", description: "rerter" },
        { title: "Bien", description: "rerter" },
        { title: "hola", description: "asdadad" },
        { title: "quetal", description: "rerter" },
        { title: "Bien", description: "rerter" },
      ],
    };
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
