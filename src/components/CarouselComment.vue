
<template>
  <carousel :perPage="1" class="bg-goldenrod mt-8 text-xl lg:text-3xl">
    <slide v-for="(testimonial, index) of Testimonials" :key="index">
      <img
        class="m-auto object-cover rounded-full h-48 w-48 flex items-center justify-center"
        :src="testimonial.image"
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
            "Increíble página, gracias a ella he encontrado el trabajo de mis sueños",
          image: img1,
          rate: 4,
        },
        {
          description:
            "Increíble página, gracias a ella he encontrado el trabajo de mis sueños",
          image: img2,
          rate: 2,
        },
        {
          description:
            "Increíble página, gracias a ella he encontrado el trabajo de mis sueños",
          image: img3,
          rate: 3,
        },
      ],
    };
  },
};
</script>
