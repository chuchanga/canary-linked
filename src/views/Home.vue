<template>
  <div class="Subheader bg-cover">
    <Carousel></Carousel>
    <div>
      <ContentHome></ContentHome>
    </div>
    <p class="text-4xl lg:text-5xl mt-12 italic font-bold">
      Lo que dicen nuestros usuarios
    </p>
    <CarouselComment></CarouselComment>
    <p class="text-4xl lg:text-5xl mt-12 italic font-bold">Sobre Nosotros</p>
    <div
      class="bg-minionyellow rounded-lg shadow-2xl m-12 flex flex-col justify-center p-8 2xl:flex-row"
    >
      <p
        class="text-2xl md:text-5xl lg:text-5xl self-center italic font-bold flex flex-col w-4/5 m-12 break-words"
      >
        Con más de 10 años de experiencia CanaryLinked es la empresa líder en
        las islas canarias que facilita la incorporación de profesionales sin
        experiencia al mundo laboral.
        <ButtonCard
          class="mt-12 rounded-lg m-auto text-2xl lg:text-5xl focus:outline-none p-12"
          text="Contáctanos"
        ></ButtonCard>
      </p>
      <div>
        <img class="rounded-lg" src="../assets/photo_about.jpg" alt="" />
      </div>
    </div>
    <div class="bg-cyberyellow mt-12">
      <Help></Help>
    </div>
  </div>
</template>

<script>
import CarouselComment from "../components/CarouselComment.vue";
import ContentHome from "../components/ContentHome.vue";
import Help from "../components/Help.vue";
import Carousel from "../components/Carousel.vue";
import ButtonCard from "../components/ButtonCard.vue";

export default {
  name: "Home",
  components: {
    CarouselComment,
    ContentHome,
    Help,
    Carousel,
    ButtonCard,
  },
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>

<style></style>
