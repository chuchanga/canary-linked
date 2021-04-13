<template>
  <div>
    <section class="flex flex-col justify-center rounded-lg">
      <div class="space-y-8 bg-white rounded-b-md shadow-lg p-8">
        <img :src="image" />
        <div class="grid justify-items-stretch space-y-8">
          <p class="text-richblack font-semibold text-md text-lg lg:text-2xl">
            {{ title }}
          </p>
          <p class="text-richblack justify-self-start text-lg lg:text-xl">
            <i class="text-cyberyellow fas fa-map-marker-alt"></i>
            {{ place }}
          </p>
          <p class="text-richblack justify-self-start text-lg lg:text-xl">
            <i class="text-cyberyellow far fa-calendar-alt"></i>
            {{ duration }}
          </p>
          <p class="text-richblack justify-self-start text-lg lg:text-xl">
            <i class="text-cyberyellow fas fa-info-circle"></i>
            {{ description }}
          </p>
        </div>
        <YellowButton :onClick="saveOffer"> Guardar </YellowButton>
      </div>
    </section>
  </div>
</template>
<script>
import YellowButton from "../components/Button/YellowButton";
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";
export default {
  props: ["offerId", "title", "description", "place", "image", "duration"], // Tendría que pasar todas las props en verdad
  components: {
    YellowButton,
  },
  data() {
    return {
      userId: firebase.auth().currentUser.uid
    };
  },
  methods: {
    saveOffer () {
      let userSavedOffers;
      db.collection("users").doc(this.userId).get().then(doc => {
        userSavedOffers = doc.data().savedOffers;
        console.log(userSavedOffers);
      }).then(() => {
        if (!userSavedOffers.includes(this.offerId)) {
          userSavedOffers.push(this.offerId);
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
  },
};
</script>
<style>
</style>
