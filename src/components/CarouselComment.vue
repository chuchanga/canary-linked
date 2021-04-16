
<template>
  <carousel
    :perPage="1"
    :autoplay="true"
    :autoplayTimeout="2000"
    class="bg-cyberyellow m-12 shadow-2xl mt-8 text-xl lg:text-3xl p-8"
  >
    <slide v-for="(testimonial, index) of Testimonials" :key="index">
      <img
        class="m-auto object-cover rounded-full h-48 w-48 flex items-center justify-center"
        :src="testimonial.image"
        alt="Imagen de una persona comentando lo que le parece la web CanaryLinked"
      />
      <p class="mt-8">{{ testimonial.description }}</p>
      <div class="star mt-4">
        <i
          v-for="index in testimonial.rate"
          :key="`star-${index}`"
          class="fas fa-star text-white"
        ></i>
        <i
          v-for="index in 5 - testimonial.rate"
          :key="`star-${testimonial.rate + index}`"
          class="fas fa-star"
        ></i>
      </div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      Testimonials: [
        {
          description:
            "Encontrar esta página fue lo mejor que he hecho, gracias a todos por haberme ayudado a encontrar el trabajo que me gusta.",
          image: img1,
          rate: 4,
        },
        {
          description:
            "CanaryLinked es oportunidad, gracias a ella he encontrado el trabajo de mis sueños.",
          image: img2,
          rate: 2,
        },
        {
          description:
            "Estoy muy satisfecho con la ayuda recibida por parte del equipo, gracias a ellos, he encontrado mi vocación en el mundo del marketing.",
          image: img3,
          rate: 3,
        },
      ],
    };
  },
};
</script>
