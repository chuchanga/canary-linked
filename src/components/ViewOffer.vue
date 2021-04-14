<template>
<transition name="modal">
    <div class="modal-mask overflow-hidden">
      <div class="modal-wrapper w-2/3">
        <div class="modal-container m-auto w-3/5 pb-8 bg-culturedwhite rounded-md">
          <div class="modal-header w-full h-3/5 p-4 mb-4 flex-row inline-flex bg-cyberyellow align-middle ">
              <div class="font-semibold text-lg justify-self-center mr-auto">Editar Oferta de Trabajo</div>
              <i @click="$emit('close')" class="cursor-pointer fas fa-times-circle text-richblack"></i>
          </div>
          <div class="modal-body w-full px-5 py-2">
            <div class="offer-publication h-auto p-4 flex flex-col">
              <div class="offer-title h-12 ml-2 text-left p-4 border rounded border-gray-200 shadow-md">
                {{title}}
              </div>
              <div class="offer-title h-12 ml-2 text-left p-4 border rounded border-gray-200 shadow-md">
                {{description}}
              </div>
          </div>
          <div class="modal-footer mt-8">
             <YellowButton :onClick="saveOffer">Guardar Oferta</YellowButton>
          </div>
        </div>
      </div>
    </div>
    </div>
  </transition>
</template>

<script>
import YellowButton from "../components/Button/YellowButton.vue";
export default {
  props: ["offerId", "title", "description", "place", "image", "duration"],
  data() {
    return {
    };
  },
  components: {
    YellowButton,
  },
  created () {
  },
  methods: {
    saveOffer() {
      console.log("Guardar Oferta");
    }
  },
};
</script>

<style>

</style>
