<template>
  <div class="flex-col justify-center lg:flex-row rounded-lg shadow-lg">
    <div id="front">
      <div v-if="arrayTraining[id].pos == true">
        <img class="w-full" :src="url" :alt="description" />
        <div class="font-bold text-xl mb-4">{{ title }}</div>
        <button
          @click="set_id(id)"
          class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded"
        >
          Leer más
        </button>
        <br>
      </div>
    </div>
    <div id="back">
      <div v-if="arrayTraining[id].pos == false">
        <p>{{ text }}</p>
        <button
          @click="set_id(id)"
          class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded content-center"
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
