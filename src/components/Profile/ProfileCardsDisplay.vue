<template>
  <div class="card-display">
    <div class="own">
      <p class="text-lg font-semibold">{{display}} que has añadido</p>
        <div v-for="ownedOffer in ownedOffers" :key="ownedOffer.title"> <ProfileOfferCard
          :title="ownedOffer.title"
          :description="ownedOffer.description"
          :location="ownedOffer.location"
          :contactEmail="ownedOffer.contactEmail"
          :website="ownedOffer.website"
          @reRenderOffers="forceRerender()"/>
        </div>
    </div>
    <!--<div class="saved mt-4">
      <p class="text-lg font-semibold">{{display}} que has guardado</p>
      <div>
      </div>
    </div>-->
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebaseInit.js";
import ProfileOfferCard from "./ProfileOfferCard.vue";

export default {
  name: "ProfileCardsDisplay",
  components: {
    ProfileOfferCard,
  },
  props: {
    display: String,
    ownedCollection: String,
    savedCollection: String
  },
  data() {
    return {
      currentUserId: firebase.auth().currentUser.uid,
      ownedOffers: [],
      savedOffers: [],
      offerEditKey: 0
    };
  },
  methods: {
    forceRerender() {
      this.$emit("forceRender");
    }
  },
  created () {
    // Al crear el componente pide a la colección de ofertas de firestore las ofertas que el propio usuario ha añadido
    db.collection(this.ownedCollection).where("submitterId", "==", this.currentUserId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.ownedOffers.push(doc.data());
        });
      });
    // Aquí hay que añadir que coja también las ofertas que el usuario ha guardado. Para eso hay que coger el array de ofertas guardadas del usuario y recorrerlo de forma que para cada iteración coja el id de la oferta y se lo pida a la base de datos y lo vaya guardando en el array savedOffers.
  },
};
</script>

<style scoped>
</style>
