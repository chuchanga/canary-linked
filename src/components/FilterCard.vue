<template>
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Filtro</h2>
          </div>
          <div class="my-2 space-x-8 flex sm:flex-row flex-col">
            <div class="space-x-8 flex flex-row mb-1 sm:mb-0">
              <div class="relative">
                <p class="font-bold">Categorías</p>
                <select id="categoria" v-model="array[0].category"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option>Educación</option>
                  <option>Reponedor</option>
                  <option>Vigilante</option>
                </select>
                <p class="font-bold">Elegida: {{ array[0].category }}</p>
              </div>
              <div class="relative">
                <p class="font-bold">Duración</p>
                <select v-model="array[0].duration"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option>Parcial</option>
                  <option>Completo</option>
                </select>
                <p class="font-bold">Elegida: {{ array[0].duration }}</p>
              </div>
              <div class="relative">
                <p class="font-bold">Ubicación</p>
                <select v-model="array[0].location"
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option>Los Cristianos</option>
                  <option>Santa Cruz</option>
                </select>
                <p class="font-bold">Elegida: {{ array[0].location }}</p>
              </div>
            </div>
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
              <input v-model="array[0].search"
                placeholder="Search"
                class="appearance-none text-lg lg:text-xl block pl-8 pr-6 py-2 w-full bg-white placeholder-gray-400 text-richblack focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
              <p class="font-bold">Elegida: {{ array[0].search }}</p>
            </div>
            <button class="bg-cyberyellow hover:bg-goldenrod text-black font-semibold py-2 px-4 border hover:border-transparent rounded content-center items-center"
             @click="filtercard(array)">
              Filtrar
            </button>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            ></div>
          </div>
        </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      array: [
        {
          category: "",
          duration: "",
          location: "",
          search: "",
        }
      ]
    };
  },
  methods: {
    ...mapActions("filtercard", ["filtercard"]),
  },
};
</script>

<style>

</style>
