<template>
  <div class="Subheader">
    <Carousel></Carousel>
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
export default {
  name: "Home",
  components: {
    Carousel,
    CarouselComment,
  },
};
</script>

<style></style>
