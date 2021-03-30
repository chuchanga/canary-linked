<template>
  <div>
    <div v-for="text of Content" :key="text" class="textcontent">
      <div class="col-start-1 col-end-5">
        <p class="text-2xl md:text-3xl lg:text-5xl italic font-bold mt-32">
          {{ text.title }}
        </p>
        <p class="text-xl md:text-3xl lg:text-4xl mt-12">
          {{ text.description }}
        </p>
        <ButtonCard
          class="mt-12 text-2xl md:text-3xl xl:text-4xl"
          text="Leer más"
        ></ButtonCard>
      </div>
      <img src="../assets/job.jpg" class="m-8" />
    </div>
  </div>
</template>
<script>
import ButtonCard from "../components/ButtonCard.vue";
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
        },
        {
          title: "Últimos Contenidos",
          description:
            "¿Necesitas consejos para emprender tu carrera profesional? Entra en esta sección para más información",
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.textcontent {
  @apply bg-cyberyellow flex justify-center m-32 mt-12 p-24 md:flex-col 2xl:flex-row;
}

.textcontent:nth-child(2n) {
  @apply 2xl:flex-row-reverse;
}
</style>
