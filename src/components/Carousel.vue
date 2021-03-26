
<template>
  <carousel :perPage="1">
    <slide>
      <img
        class="m-auto w-full h-96 object-cover"
        src="../assets/search-job.jpg"
      />
    </slide>
    <slide>
      <img
        class="m-auto w-full h-96 object-cover"
        src="../assets/job-connection.jpg"
    /></slide>
    <slide>
      <img
        class="m-auto w-full h-96 object-cover object-position:center"
        src="../assets/oferta.jpg"
      />
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
};
</script>
