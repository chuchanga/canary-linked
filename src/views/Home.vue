<template>
  <div class="Subheader">
    <div class="asda">
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
    <Footer />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import CarouselComment from "../components/CarouselComment.vue";
import CardAdvert from "../components/CardAdvert.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    CarouselComment,
    CardAdvert,
    Footer,
  },
};
</script>

<style></style>
