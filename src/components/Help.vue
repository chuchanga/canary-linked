<template>
  <div>
    <div>
      <p class="text-4xl 2xl:text-5xl m-12 italic font-bold">
        ¿Tienes alguna pregunta?
      </p>
      <p class="text-2xl 2xl:text-3xl p-8 m-12 break-words">
        Ya sea que tenga una pregunta sobre orientación laboral, ofertas,
        proyectos o cualquier otra cosa, nuestro equipo está listo para todas
        sus preguntas.
      </p>

      <ButtonCard
        text="¡Contáctanos!"
        class="text-2xl md:text-3xl xl:text-4xl"
      ></ButtonCard>
    </div>
  </div>
</template>
<script>
import ButtonCard from "../components/ButtonCard.vue";
export default {
  name: "Help",
  components: {
    ButtonCard,
  },
};
</script>
