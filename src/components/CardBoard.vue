<template>
  <div class="flex flex-col justify-center rounded-lg">
    <div class="space-y-8 bg-white rounded-b-md shadow-lg p-8">
      <img :src="image" />
      <div class="grid justify-items-stretch space-y-6">
        <p class="text-richblack font-semibold text-md text-lg lg:text-2xl">
          {{ title }}
        </p>
        <p class="text-richblack justify-self-start text-lg lg:text-xl">
          <i class="text-cyberyellow fas fa-map-marker-alt mr-2"></i>
          {{ place }}
        </p>
        <p class="text-richblack justify-self-start text-lg lg:text-xl">
          <i class="text-cyberyellow far fa-calendar-alt mr-2"></i>
          {{ duration }}
        </p>
        <p class="text-richblack justify-self-start text-lg lg:text-xl">
          <i class="text-cyberyellow fas fa-info-circle mr-2"></i>
          {{ brief }}
        </p>
      </div>
      <div>
        <YellowButton class="mx-2" :onClick="displayModal"> Ver Oferta </YellowButton>
        <YellowButton :onClick="saveOffer"> Guardar </YellowButton>
        <view-offer :offerId="offerId" :title="title" :description="description" :location="place" :duration="duration" :image="image" v-if="showView" @close="showView = false">
        </view-offer>
      </div>
  </div>
  </div>
</template>
<script>
import YellowButton from "../components/Button/YellowButton";
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";
import ViewOffer from "./ViewOffer.vue";
export default {
  props: ["offerId", "title", "description", "place", "image", "duration"], // Tendría que pasar todas las props en verdad
  components: {
    YellowButton,
    ViewOffer
  },
  data() {
    return {
      userId: firebase.auth().currentUser.uid,
      showView: false,
      brief: this.description.substring(0, 140) + "..."
    };
  },
  methods: {
    displayModal() {
      this.showView = true;
    },

    saveOffer () { // Guarda el id de la oferta seleccionada en el array de savedOffers del usuario logueado
      let userSavedOffers;
      db.collection("users").doc(this.userId).get().then(doc => {
        userSavedOffers = doc.data().savedOffers;
        console.log(userSavedOffers);
      }).then(() => {
        if (!userSavedOffers.includes(this.offerId)) {
          userSavedOffers.unshift(this.offerId);
          // Guarda la oferta al principio del array de ofertas guardadas para que salga primera
          db.collection("users").doc(this.userId).update(
            {
              savedOffers: userSavedOffers
            }
          ).then(() => {
            alert("Oferta Guardada, puedes verla en tu perfil");
          });
        } else {
          alert("Ya habías guardado esta oferta");
        }
      });
    },
  }
};
</script>
<style scoped>
</style>
