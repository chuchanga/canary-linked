<template>
  <div>
    <Subheader
      title="Bienvenidos a nuestro portal de tips y consejos de orientación laboral"
      description="Resuelve tus dudas con estos consejos"
      text="Contáctanos"
    ></Subheader>
    <div class="flex justify-center flex-col lg:grid grid-cols-3 gap-4 mt-24">
      <div v-for="card in arrayTraining" :key="card.id">
        <div :id="card.id" v-if="card.show" class="flip-vertical-right">
          {{ card.id }}
          <div v-if="card.id == getChoice">
            <div v-if="arrayTraining[getChoice].pos == true">
              {{ animate() }}
            </div>
            <div v-if="arrayTraining[getChoice].pos == false">
              {{ reverse() }}
            </div>
          </div>
          <Card
            :title="card.title"
            :description="card.show"
            :id="card.id"
            :text="card.text"
            :url="card.url"
          />
        </div>
      </div>
    </div>
    <Pagination />
    <Help></Help>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import Card from "../components/Card.vue";
import { mapState, mapGetters } from "vuex";
import Subheader from "../components/Subheader.vue";
import Help from "../components/Help.vue";

export default {
  name: "Training",
  components: {
    Pagination,
    Card,
    Subheader,
    Help,
  },
  computed: {
    ...mapState("pagination", ["arrayTraining"]),
    ...mapGetters("animation", ["getChoice"]),
  },
  methods: {
    animate() {
      if (document.getElementById(this.getChoice) != null) {
        const element = document.getElementById(this.getChoice);
        element.classList.toggle("flip-vertical-right");
        element.classList.toggle("flip-vertical-left");
        console.log(element);
      }
    },
    reverse() {
      if (document.getElementById(this.getChoice) != null) {
        const element = document.getElementById(this.getChoice);
        element.classList.toggle("flip-vertical-left");
        element.classList.toggle("flip-vertical-right");
        console.log(element);
      }
    },
  },
};
</script>

<style>
.flip-vertical-right {
  animation: flip-vertical-right 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
}

.flip-vertical-left {
  animation: flip-vertical-left 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
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
