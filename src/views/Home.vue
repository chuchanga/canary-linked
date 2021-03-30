<template>
  <div class="Subheader">
    <div class="asda">
      <Header />
    </div>
    <Carousel></Carousel>
    <div class="card">
      <h1 class="mt-12 lg:text-2xl sm:tex-2xl font-bold">Últimos Contenidos</h1>
      <CardAdvert></CardAdvert>
    </div>
    <div class="Content">
      <h1 class="mt-12 lg:text-2xl sm:tex-2xl font-bold">
        Lo que dicen nuestros usuarios
      </h1>
      <CarouselComment></CarouselComment>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import CarouselComment from "../components/CarouselComment.vue";
import CardAdvert from "../components/CardAdvert.vue";
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    CarouselComment,
    CardAdvert,
    Header,
  },
};
</script>

<style></style>
