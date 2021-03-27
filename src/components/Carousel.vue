<template>
  <carousel :perPage="1">
    <slide v-for="images of SubheaderImages" :key="images.description">
      <div class="ContentText">
        <img class="mx-auto object-cover h-96 w-full" :src="images.image" />
        <h1
          class="textSubheader p-8 lg:text-3xl md:text-2xl sm:text-xl text-white bg-gray-500 bg-opacity-50 rounded-xl"
        >
          {{ images.description }}
        </h1>
      </div>
    </slide>
  </carousel>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import search from "../assets/search.jpg";
import connection from "../assets/connection.jpg";
import offer from "../assets/offer.jpg";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      SubheaderImages: [
        {
          description:
            "¿Estás cansado de buscar empleo? No esperes más y conecta con nuestros profesionales",
          image: search,
        },
        {
          description:
            "¿Buscas trabajo? O ¿desarrollar un proyecto real? Pincha en los siguientes botones",
          image: connection,
        },
        {
          description:
            "¿Quieres consejos acerca de como entrar en el mundo laboral? Entra en nuestra sección para más información",
          image: offer,
        },
      ],
    };
  },
};
</script>
<style>
.ContentText {
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: flex-start;
}

.textSubheader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
