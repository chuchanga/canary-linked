<template>
  <carousel :perPage="1">
    <slide v-for="images of SubheaderImages" :key="images.description">
      <div class="ContentText relative">
        <img class="mx-auto object-cover h-80 w-full" :src="images.image" />

        <p
          class="textSubheader p-8 lg:text-4xl text-xl text-white bg-yellow-500 bg-opacity-50 rounded-xl"
        >
          {{ images.description }}
        </p>
        <div class="flex justify-center">
          <router-link to="/contact">
            <ButtonCard class="btn" text="¡Contactanos!"> </ButtonCard>
          </router-link>
        </div>
      </div>
    </slide>
  </carousel>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
import search from "../assets/search.jpg";
import connection from "../assets/connection.jpg";
import offer from "../assets/offer.jpg";
import ButtonCard from "../components/ButtonCard.vue";

export default {
  components: {
    Carousel,
    Slide,
    ButtonCard,
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

.btn {
  position: absolute;
  left: 40%;
  border-radius: 1.5em;
  color: black;
  text-transform: uppercase;
  padding: 1em 1.5em;
  top: 80%;
}
</style>
