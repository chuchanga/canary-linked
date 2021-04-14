<template>
<transition name="modal">
    <div class="modal-mask overflow-hidden">
      <div class="modal-wrapper w-2/3">
        <div class="modal-container m-auto w-3/5 pb-8 bg-culturedwhite rounded-md">
          <div class="modal-header w-full h-3/5 p-4 mb-4 flex-row inline-flex bg-cyberyellow align-middle ">
              <div class="font-semibold text-lg justify-self-center mr-auto">{{title}}</div>
              <i @click="$emit('close')" class="cursor-pointer fas fa-times-circle text-richblack"></i>
          </div>
          <div class="modal-body w-full px-5 py-2 grid grid-cols-5">
              <div class="offer-description col-span-3 h-auto ml-2 text-left p-4 border rounded border-gray-200 shadow-md">
                {{description}}
              </div>
              <div class="offer-data col-span-2 flex flex-col justify-start">
                <p class="text-richblack justify-self-start text-lg lg:text-xl">
                  <i class="text-cyberyellow fas fa-map-marker-alt mr-2"></i>
                  {{ location }}
                </p>
                <p class="text-richblack justify-self-start text-lg lg:text-xl">
                  <i class="text-cyberyellow far fa-calendar-alt mr-2"></i>
                  {{ duration }}
                </p>
              </div>
          </div>
        <div class="modal-footer mt-8">
             <YellowButton :onClick="saveOffer">Guardar Oferta</YellowButton>
          </div>
      </div>
    </div>
    </div>
  </transition>
</template>

<script>
import YellowButton from "../components/Button/YellowButton.vue";
export default {
  props: ["offerId", "title", "description", "location", "image", "duration"],
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

<style scoped>

</style>
