<template>
  <div class="user-info w-72 h-auto m-4 p-4 shadow-lg flex flex-col">
    <div class="user-image mb-8 bg-hero h-48 w-48 rounded-full self-center"></div>
    <div class="user-name ml-2 h-1/6 text-left">Aythami de Armas Castellano</div>
    <div class="user-id mt-1 ml-2 h-1/6 text-left text-gray-400">@aydearcas</div>
    <div class="user-brief-description ml-2 mt-8 h-1/6 text-left text-xs">Antropólogo Social y Web Developer. Nacido en Cardones. Estudié Antropología Social y Cultural y Ahora estoy en el paro, por eso me dedico a pintarrajear páginas webs jeje xd</div>
    <div class="user-contact ml-2 mt-8 h-1/6">
      <div class="contact-location h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-map-marker-alt mr-4"></i>Location
       </div>
      <div class="contact-mail h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-envelope mr-2"></i> mail
       </div>
      <div class="contact-web h-1/6 text-left text-sm">
        <i class=" text-davysgray fas fa-pager mr-2"></i> Webpage
       </div>
    </div>
    <Button class="mt-8 mb-6" text="Editar Perfil" />
  </div>
</template>

<script>
import Button from "../components/ButtonCard.vue";

export default {
  name: "UserDescription",
  components: {
    Button,
  }
};
</script>
<style scoped>
  .bg-hero {
        background: url("../assets/img1.jpg") center center no-repeat;
    }
</style>
