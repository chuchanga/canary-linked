<template>
  <div class="flex-col justify-center mx-2 lg:flex-row rounded-lg shadow-lg">
    <div id="front">
      <div v-if="arrayTraining[id].pos == true">
        <img class="w-full" :src="url" :alt="description" />
        <div class="font-bold text-xl mb-4 px-2 mt-2">{{ title }}</div>
        <button
          @click="set_id(id)"
          class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 mb-6 border hover:border-transparent rounded"
        >
          Leer más
        </button>
        <br>
      </div>
    </div>
    <div id="back">
      <div v-if="arrayTraining[id].pos == false" class="text-left py-8 px-8">
        <p>{{ text[0] }}</p>
        <br>
        <p class="ml-4">{{ text[1] }}</p>
        <p class="ml-4">{{ text[2] }}</p>
        <p class="ml-4">{{ text[3] }}</p>
        <p class="ml-4">{{ text[4] }}</p>
        <p class="ml-4">{{ text[5] }}</p>
        <button
          @click="set_id(id)"
          class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold mt-4 py-2 px-4 border hover:border-transparent rounded content-center"
        >
          Volver
        </button>
        <p> ⠀⠀⠀</p>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["title", "description", "text", "id", "url"],
  computed: {
    ...mapState("animation", ["show"]),
    ...mapState("pagination", ["arrayTraining"]),
  },
  methods: {
    ...mapActions("animation", ["set_id"]),
  },
};
</script>
<style>
</style>
