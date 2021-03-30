<template>
  <div class="flex justify-center bg-cyberyellow mt-12 md:flex-col lg:flex-row">
    <figure v-for="photo of About" :key="photo" class="rounded-xl p-8 m-8">
      <div class="pt-6 text-center space-y-4 mt-8">
        <blockquote>
          <p class="text-base md:text-2xl xl:text-4xl -mt-20">
            {{ photo.name }}
          </p>
        </blockquote>
      </div>
      <img
        class="mx-auto rounded-lg"
        :src="photo.image"
        alt=""
        width="500"
        height="500"
      />
      <div class="pt-6 text-center space-y-4 mt-8">
        <blockquote>
          <p class="text-base md:text-3xl xl:text-4xl font-semibold">
            {{ photo.description }}
          </p>
        </blockquote>
      </div>
    </figure>
  </div>
</template>

<script>
import saul from "../assets/saul.jpeg";
import lucia from "../assets/lucia.jpg";
import aythami from "../assets/aythami.jpg";
export default {
  name: "cardAbout",
  data() {
    return {
      About: [
        {
          name: "Lucía Muñoz González",
          description: "Desarrolladora Frontend",
          image: lucia,
        },
        {
          name: "Saul De Abreu",
          description: "Periodista y Coaching",
          image: saul,
        },
        {
          name: "Aythami",
          description: "Diseñador",
          image: aythami,
        },
      ],
    };
  },
};
</script>
