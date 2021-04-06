<template>
  <div>
    <div>
      <div
        class="bg-cover bg-center p-8"
        style="
          background-image: url(https://cdn.shopify.com/s/files/1/0275/5752/7616/files/Contactanos_480x480.jpg?v=1590771329);
        "
      >
        <p class="text-2xl lg:text-4xl m-8 italic font-bold">
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
        <div
          class="w-full bg-white border-t border-b border-gray-200 px-5 mt-24 py-16 md:py-24 text-richblack font-light"
        >
          <div class="w-full max-w-6xl mx-auto pb-5">
            <div class="-mx-3 md:flex items-center">
              <div class="px-3 md:w-2/3 mb-10 md:mb-0">
                <h1 class="text-6xl md:text-8xl font-bold mb-5 leading-tight">
                  Canary <br class="hidden md:block" />Linked
                </h1>
                <h3 class="text-richblack mb-7 leading-tight">
                  Suscríbete para más ofertas
                </h3>
                <div>
                  <span
                    class="inline-block w-40 h-1 rounded-full bg-cyberyellow"
                  ></span>
                  <span
                    class="inline-block w-3 h-1 rounded-full bg-cyberyellow ml-1"
                  ></span>
                  <span
                    class="inline-block w-1 h-1 rounded-full bg-cyberyellow ml-1"
                  ></span>
                </div>
              </div>
              <div class="px-3 md:w-1/3">
                <form>
                  <div class="flex mb-3">
                    <div
                      class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
                    >
                      <i
                        class="mdi mdi-email-outline text-gray-400 text-lg"
                      ></i>
                    </div>
                    <input
                      type="email"
                      class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-cyberyellow"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <button
                      class="block w-full bg-cyberyellow hover:bg-minionyellow focus:bg-indigo-700 transition-colors text-richblack rounded-lg px-3 py-2 font-semibold"
                    >
                      Suscribete ahora para más ofertas
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
 <style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
</style>
