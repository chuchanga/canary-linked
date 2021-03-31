<template>
  <div class="container m-auto">
      <div class="max-w-sm rounded overflow-hidden shadow-lg justify-items-center ">
        <div  id="front" class="px-6 py-4 space-y-6">
          <div v-if="show == true">
            <img class="w-full" src="../assets/job.jpg" alt="Girl job" />
          <div class="font-bold text-xl mb-2">{{ title }}</div>
          <p class="text-gray-700 text-base"> {{ description }}</p>
            <button @click="animation()"
              class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded"
            >
              Leer más
            </button>
            </div>
            </div>
            <div id="back" class="px-6 py-4 space-y-6 flip-vertical-left">
            <div v-if="show == false">
              <p> {{ text }} </p>
               <button @click="animation()"
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
export default {
  props: ["title", "description", "text", "id"],
  data() {
    return {
      show: true
    };
  },
  methods: {
    animation() {
      const front = document.getElementById("front");
      front.classList.toggle("flip-vertical-right");
      const back = document.getElementById("back");
      back.classList.toggle("flip-vertical-left");
      this.show = !this.show;
    },
    reverse() {
      const back = document.getElementById("back");
      back.classList.toggle("flip-vertical-left");
      const front = document.getElementById("front");
      front.classList.toggle("flip-vertical-right");
      this.show = !this.show;
    },
  },
};
</script>
<style>
.flip-vertical-right {
  animation: flip-vertical-right 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955);
}

.flip-vertical-left {
  animation: flip-vertical-left 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955);
}

@keyframes flip-vertical-right {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg);
  }
}

@keyframes flip-vertical-left {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(-180deg);
  }
}
</style>
