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

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
