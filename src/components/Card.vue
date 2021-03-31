<template>
  <div class="container m-auto">
      <div class="max-w-sm rounded overflow-hidden shadow-lg justify-items-center ">
        <div  id="front" class="px-6 py-4 space-y-6"> Soy {{arrayTraining[id].pos}}
          <div v-if="arrayTraining[id].pos == true">
            <img class="w-full" src="../assets/job.jpg" alt="Girl job" />
          <div class="font-bold text-xl mb-2">{{ title }}</div>
          <p class="text-gray-700 text-base"> {{ description }}</p>
            <button @click="set_id(id)"
              class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded"
            >
              Leer más
            </button>
            </div>
            </div>
            <div id="back" class="px-6 py-4 space-y-6 flip-vertical-left">
            <div v-if="arrayTraining[id].pos == false">
              <p> {{ text }} </p>
               <button @click="set_id(id)"
              class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded"
            >
            Volver
            </button>
            </div>
            </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["title", "description", "text", "id"],
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
