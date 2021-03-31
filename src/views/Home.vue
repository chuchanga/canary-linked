<template>
  <div class="Subheader">
    <Carousel></Carousel>
    <div>
      <ContentHome></ContentHome>
    </div>
    <p class="text-4xl lg:text-5xl mt-12 italic font-bold">
      Lo que dicen nuestros usuarios
    </p>
    <CarouselComment></CarouselComment>
    <div class="bg-cyberyellow mt-12">
      <Help></Help>
    </div>
    <Footer />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import CarouselComment from "../components/CarouselComment.vue";
import ContentHome from "../components/ContentHome.vue";
import Help from "../components/Help.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Carousel,
    CarouselComment,
    ContentHome,
    Help,
    Footer,
  },
};
</script>

<style></style>
