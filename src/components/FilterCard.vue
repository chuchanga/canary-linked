<template>
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Filtro</h2>
          </div>
          <div class="my-2 space-x-8 flex sm:flex-row flex-col">
            <div class="space-x-8 flex flex-row mb-1 sm:mb-0">
              <!--------------------------------------  Categorías  ---------------------------------------------->
              <div class="relative">
                <p class="font-bold">Categorías</p>
                <div v-if="mymood == 'offers'">
                <select id="categoria" v-model="array.category"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                    <option>Todos</option>
                    <option v-for="index in getOffers().category.length" :key="index"> {{getOffers().category[index - 1]}}</option>
                </select>
                </div>
                  <div v-else>
                  <select id="categoria" v-model="array.category"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                    <option>Todos</option>
                    <option v-for="index in getProjects().category.length" :key="index"> {{getProjects().category[index - 1]}}</option>
                </select>
                </div>
                <p class="font-bold">Elegida: {{ array.category }}</p>
              </div>
              <!--------------------------------------  Duracion  ---------------------------------------------->
              <div class="relative">
                <p class="font-bold">Duración</p>
                <div v-if="mymood == 'offers'">
                <select id="categoria" v-model="array.duration"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                    <option>Todos</option>
                    <option v-for="index in getOffers().duration.length" :key="index"> {{getOffers().duration[index - 1]}}</option>
                </select>
                </div>
                  <div v-else>
                  <select id="categoria" v-model="array.duration"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                    <option>Todos</option>
                    <option v-for="index in getProjects().duration.length" :key="index"> {{getProjects().duration[index - 1]}}</option>
                </select>
                </div>
                <p class="font-bold">Elegida: {{ array.duration }}</p>
              </div>
              <!--------------------------------------  Ubicación  ---------------------------------------------->
              <div class="relative">
                <p class="font-bold">Ubicación</p>
                <div v-if="mymood == 'offers'">
                <select id="categoria" v-model="array.place"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                    <option>Todos</option>
                    <option v-for="index in getOffers().place.length" :key="index"> {{getOffers().place[index - 1]}}</option>
                </select>
                </div>
                  <div v-else>
                  <select id="categoria" v-model="array.place"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                    <option>Todos</option>
                    <option v-for="index in getProjects().place.length" :key="index"> {{getProjects().place[index - 1]}}</option>
                </select>
                </div>
                <p class="font-bold">Elegida: {{ array.place }}</p>
              </div>
            <!--------------------------------------  Barra de búsqueda  ---------------------------------------------->
            <div class="block relative mt-12">
              <span
                class="h-full absolute inset-y-0 left-0 flex items-center pl-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-current text-gray-500"
                >
                  <path
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                  ></path>
                </svg>
              </span>
              <input v-model="array.search"
                placeholder="Search"
                class="appearance-none text-lg lg:text-xl block pl-8 pr-6 py-2 w-full bg-white placeholder-gray-400 text-richblack focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
              <p class="font-bold">Elegida: {{ array.search }}</p>
            </div>
            <!--------------------------------------  Botones  ---------------------------------------------->
            <button class="bg-cyberyellow hover:bg-goldenrod text-black font-semibold py-2 px-4 border hover:border-transparent rounded content-center items-center"
             @click="setMood(mymood)">
              Filtrar
            </button>
            <button class="bg-cyberyellow hover:bg-goldenrod text-black font-semibold py-2 px-4 border hover:border-transparent rounded content-center items-center"
             @click="stopFilter()">
              Dejar de filtrar
            </button>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            ></div>
          </div>
        </div>
        </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["mymood"],
  data() {
    return {
      array: {
        category: "Todos",
        duration: "Todos",
        place: "Todos",
        search: "",
        mood: "offers"
      }
    };
  },
  methods: {
    ...mapActions("filterCard", ["filtercard"]),
    ...mapActions("filterCard", ["stopFilter"]),
    ...mapGetters("data", ["getOffers"]),
    ...mapGetters("data", ["getProjects"]),
    setMood(mymood) {
      this.array.mood = mymood;
      console.log(this.array.mood);
      this.filtercard(this.array);
    },
  },

};
</script>

<style>

</style>
