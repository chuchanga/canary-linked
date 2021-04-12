<template>
  <div class="p-12 flex flex-col lg:flex-row">
    <div class="lg:space-x-32 flex flex-col lg:flex-row">
      <!--------------------------------------  Categorías  ---------------------------------------------->
      <div class="relative">
        <p class="font-bold">Categorías</p>
        <div v-if="mymood == 'offers'">
          <select
            id="categoria"
            v-model="array.category"
            class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          >
            <option>Todos</option>
            <option v-for="index in getOffers().category.length" :key="index">
              {{ getOffers().category[index - 1] }}
            </option>
          </select>
        </div>
        <div v-else>
          <select
            id="categoria"
            v-model="array.category"
            class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          >
            <option>Todos</option>
            <option v-for="index in getProjects().category.length" :key="index">
              {{ getProjects().category[index - 1] }}
            </option>
          </select>
        </div>
      </div>
      <!--------------------------------------  Duracion  ---------------------------------------------->
      <div class="relative">
        <p class="font-bold">Duración</p>
        <div v-if="mymood == 'offers'">
          <select
            id="categoria"
            v-model="array.duration"
            class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          >
            <option>Todos</option>
            <option v-for="index in getOffers().duration.length" :key="index">
              {{ getOffers().duration[index - 1] }}
            </option>
          </select>
        </div>
        <div v-else>
          <select
            id="categoria"
            v-model="array.duration"
            class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          >
            <option>Todos</option>
            <option v-for="index in getProjects().duration.length" :key="index">
              {{ getProjects().duration[index - 1] }}
            </option>
          </select>
        </div>
      </div>
      <!--------------------------------------  Ubicación  ---------------------------------------------->
      <div class="relative">
        <p class="font-bold">Ubicación</p>
        <div v-if="mymood == 'offers'">
          <select
            id="categoria"
            v-model="array.place"
            class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          >
            <option>Todos</option>
            <option v-for="index in getOffers().place.length" :key="index">
              {{ getOffers().place[index - 1] }}
            </option>
          </select>
        </div>
        <div v-else>
          <select
            id="categoria"
            v-model="array.place"
            class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
          >
            <option>Todos</option>
            <option v-for="index in getProjects().place.length" :key="index">
              {{ getProjects().place[index - 1] }}
            </option>
          </select>
        </div>
      </div>
      <!--------------------------------------  Barra de búsqueda  ---------------------------------------------->
      <div class="block relative mt-4">
        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
          <svg
            viewBox="0 0 24 24"
            class="h-4 w-4 lg:-mt-16 fill-current text-gray-500"
          >
            <path
              d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
            ></path>
          </svg>
        </span>
        <input
          v-model="array.search"
          placeholder="Buscar"
          class="appearance-none text-lg lg:text-xl block pl-8 pr-6 py-2 w-full bg-white placeholder-gray-400 text-richblack focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
        />
      </div>
      <!--------------------------------------  Botones  ---------------------------------------------->
      <div class="flex flex-col">
        <button
          class="bg-cyberyellow hover:bg-goldenrod focus:outline-none shadow-2xl mt-4 p-2 text-black font-semibold border hover:border-transparent rounded-lg content-center items-center"
          @click="setMood(mymood)"
        >
          Filtrar
        </button>
        <button
          class="bg-cyberyellow hover:bg-goldenrod focus:outline-none shadow-2xl mt-4 p-2 text-black font-semibold border hover:border-transparent rounded-lg content-center items-center"
          @click="stopFilter()"
        >
          Dejar de filtrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  props: ["mymood"],
  data() {
    return {
      array: {
        category: "Todos",
        duration: "Todos",
        place: "Todos",
        search: "",
        mood: "offers",
        seeMoreOffersButton: this.seeMoreOffersButton,
        seeMoreProjectsButton: this.seeMoreProjectsButton,
      },
    };
  },
  methods: {
    ...mapActions("paginationBoard", ["filter_card"]),
    ...mapActions("paginationBoard", ["stop_filter"]),
    ...mapGetters("data", ["getOffers"]),
    ...mapGetters("data", ["getProjects"]),
    setMood(mymood) {
      this.array.mood = mymood;
      this.filter_card(this.array);
    },
    stopFilter() {
      this.array.category = "Todos";
      this.array.duration = "Todos";
      this.array.place = "Todos";
      this.array.search = "";
      this.stop_filter(this.array);
    },
  },
  computed: {
    ...mapState("paginationBoard", ["seeMoreOffersButton"]),
    ...mapState("paginationBoard", ["seeMoreProjectsButton"]),
  },
};
</script>

<style>
</style>
