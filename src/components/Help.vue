<template>
  <div>
    <div>
      <div
        class="bg-cover bg-center p-12"
        style="
          background-image: url(https://cdn.shopify.com/s/files/1/0275/5752/7616/files/Contactanos_480x480.jpg?v=1590771329);
        "
      >
        <p class="text-2xl lg:text-4xl m-12 italic font-bold">
          ¿Tienes alguna pregunta?
        </p>
        <p class="text-xl lg:text-2xl p-8 m-12 font-bold break-words">
          Ya sea que tenga una pregunta sobre orientación laboral, ofertas,
          proyectos o cualquier otra cosa, nuestro equipo está listo para todas
          sus preguntas.
        </p>
        <router-link to="/contact">
          <ButtonCard
            text="¡Contáctanos!"
            class="text-xl lg:text-3xl"
          ></ButtonCard
        ></router-link>
      </div>
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
