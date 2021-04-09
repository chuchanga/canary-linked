<template>
  <div>
    <div v-for="text in Content" :key="text.title" class="textcontent">
      <div class="col-start-1 col-end-5">
        <p class="text-xl lg:text-5xl italic font-bold mt-12">
          {{ text.title }}
        </p>
        <p class="text-2xl lg:text-4xl mt-12">
          {{ text.description }}
        </p>
        <router-link to="/board">
          <ButtonCard
            class="mt-12 text-2xl lg:text-3xl"
            text="Leer más"
          ></ButtonCard
        ></router-link>
      </div>
      <img :src="text.src" class="m-8" />
    </div>
  </div>
</template>
<script>
import ButtonCard from "../components/ButtonCard.vue";
import job from "../assets/job.jpg";
import connection from "../assets/connection.jpg";
import notices from "../assets/notices.jpg";
export default {
  name: "ContentHome",
  components: {
    ButtonCard,
  },
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
        {
          title: "Últimos Contenidos",
          description:
            "¿Necesitas consejos para emprender tu carrera profesional? Entra en esta sección para más información",
          src: notices,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.textcontent {
  @apply bg-minionyellow shadow-2xl rounded-lg flex flex-col justify-center m-12 p-8 2xl:flex-row;
}

.textcontent:nth-child(2n) {
  @apply 2xl:flex-row-reverse;
}
</style>
