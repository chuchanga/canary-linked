<template>
  <div>
    <div
      id="section"
      v-for="text in Content"
      :key="text.title"
      class="textcontent"
    >
      <div class="col-start-1 col-end-5 mt-8">
        <p class="textcontent-title text-3xl lg:text-5xl font-bold mt-12">
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
              Ver el tablón
            </button></router-link
          >
        </div>
      </div>
      <img
        :src="text.src"
        class="m-8"
        alt="Foto de una persona mirando ofertas y otra foto mostrando un equipo de trabajo unido"
      />
    </div>
    <div class="bg-cyberyellow textcontent lg:flex-row">
      <div class="flex-col justify-center lg:flex-row">
        <p class="textcontent-title text-3xl lg:text-5xl font-bold mt-12">
          Últimos Consejos
        </p>
        <p class="text-2xl lg:text-4xl mt-12">
          ¿Necesitas consejos para emprender tu carrera profesional? Entra en
          esta sección para obtener más información
        </p>
        <div class="mt-12">
          <router-link to="/training">
            <button
              class="relative border-2 border-white rounded-md font-bold px-4 py-3 transition duration-300 ease-in-out hover:bg-cyberyellow hover:text-richblack shadow-2xl text-2xl lg:text-3xl"
            >
              Ver los Consejos
            </button></router-link
          >
        </div>
      </div>
      <img
        src="../assets/notices.jpg"
        class="m-8"
        alt="Foto de una persona mirando las noticias"
      />
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
            "Encuentra en nuestro Tablón de Ofertas la Oportunidad que buscabas para dar comienzo a tu carrera",
          // "Busca en nuestro tablón de empleo las ofertas que mejor se adapten a tus necesidades",
          src: job,
        },
        {
          title: "Últimos Proyectos",
          description:
            "Colabora con otros profesionales en proyectos que os ayudarán a conseguir experiencia y a ampliar vuestra red",
          // "Busca en nuestro tablón de empleo los proyectos que mejor se adapten a tus necesidades",
          src: connection,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap");

.textcontent {
  @apply bg-cyberyellow shadow-2xl flex flex-col justify-center my-10 mx-4 lg:m-12 p-8 xl:flex-row;
}

.textcontent-title {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 400;
}

.textcontent:nth-child(2n) {
  @apply 2xl:flex-row-reverse;
}
</style>
