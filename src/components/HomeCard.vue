<template>
  <div>
    <div
      id="section"
      v-for="text in Content"
      :key="text.title"
      class="textcontent"
    >
      <div class="col-start-1 col-end-5 mt-8">
        <p class="text-xl lg:text-5xl italic font-bold mt-12">
          {{ text.title }}
        </p>
        <p class="text-2xl lg:text-4xl mt-16">
          {{ text.description }}
        </p>
        <div class="mt-8">
          <router-link to="/board">
            <button
              class="focus:outline-none relative border-2 border-white rounded-md font-bold px-4 py-3 transition duration-300 ease-in-out hover:bg-cyberyellow hover:text-richblack shadow-2xl text-2xl lg:text-3xl"
            >
              Contáctanos
            </button></router-link
          >
        </div>
      </div>
      <img :src="text.src" class="m-8" />
    </div>
    <div class="bg-cyberyellow textcontent lg:flex-row">
      <div class="flex-col justify-center lg:flex-row">
        <p class="text-xl lg:text-5xl italic font-bold mt-12">
          Últimos Contenidos
        </p>
        <p class="text-2xl lg:text-4xl mt-12">
          ¿Necesitas consejos para emprender tu carrera profesional? Entra en
          esta sección para más información
        </p>
        <div class="mt-12">
          <router-link to="/training">
            <button
              class="relative border-2 border-white rounded-md font-bold px-4 py-3 transition duration-300 ease-in-out hover:bg-cyberyellow hover:text-richblack shadow-2xl text-2xl lg:text-3xl"
            >
              Contáctanos
            </button></router-link
          >
        </div>
      </div>
      <img src="../assets/notices.jpg" class="m-8" />
    </div>
  </div>
</template>
<script>
import job from "../assets/job.jpg";
import connection from "../assets/connection.jpg";

export default {
  name: "HomeCard",
  components: {},
  data() {
    return {
      Content: [
        {
          title: "Últimas Ofertas",
          description:
            "Busca en nuestro tablón de empleo las ofertas que mejor se adapten a tus necesidades",
          src: job,
        },
        {
          title: "Últimos Proyectos",
          description:
            "Busca en nuestro tablón de empleo los proyectos que mejor se adapten a tus necesidades",
          src: connection,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.textcontent {
  @apply bg-cyberyellow shadow-2xl rounded-lg flex flex-col justify-center m-12 p-8 2xl:flex-row;
}

.textcontent:nth-child(2n) {
  @apply 2xl:flex-row-reverse;
}
</style>
