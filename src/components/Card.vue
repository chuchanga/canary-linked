<template>
  <div
    class="w-full flex flex-col justify-center mx-2 lg:flex-row rounded-lg shadow-lg"
  >
    <div id="front">
      <div v-if="arrayTraining[id].pos == true">
        <img class="w-full" :src="url" alt="Fotos de personas trabajando " />
        <div class="font-bold text-xl mb-8 px-4 mt-4">{{ title }}</div>
        <button
          @click="set_id(id)"
          class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 mb-12 border hover:border-transparent rounded"
        >
          Leer consejos
        </button>
        <br />
      </div>
    </div>
    <div id="back">
      <div v-if="arrayTraining[id].pos == false" class="text-left py-8 px-8">
        <p>{{ text[0] }}</p>
        <br />
        <p class="ml-4">{{ text[1] }}</p>
        <p class="ml-4">{{ text[2] }}</p>
        <p class="ml-4">{{ text[3] }}</p>
        <p class="ml-4">{{ text[4] }}</p>
        <p class="ml-4">{{ text[5] }}</p>
        <div class="flex justify-center align-middle">
          <button
            @click="set_id(id)"
            class="bg-cyberyellow hover:bg-minionyellow text-black self-center font-semibold mt-8 mb-2 py-2 px-4 border hover:border-transparent rounded"
          >
            Volver
          </button>
        </div>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["title", "description", "text", "id", "url"],
  computed: {
    ...mapState("pagination", ["arrayTraining"]),
  },
  methods: {
    ...mapActions("animation", ["set_id"]),
  },
};
</script>
<style>
</style>
