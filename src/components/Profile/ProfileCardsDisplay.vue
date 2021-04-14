<template>
  <div class="card-display">
    <div v-if="userType=='entity'" class="own">
      <p class="text-lg font-semibold">{{display}} que has añadido</p>
        <div v-for="ownedOffer in ownedOffers" :key="ownedOffer.creationTime.seconds"> <ProfileOfferCard
          :title="ownedOffer.title"
          :description="ownedOffer.description"
          :location="ownedOffer.location"
          :contactEmail="ownedOffer.contactEmail"
          :website="ownedOffer.website"
          :timeId="ownedOffer.creationTime"
          @reRenderOffers="forceRerender()"/>
        </div>
    </div>
    <div v-if="userType=='person'" class="saved">
      <p class="text-lg font-semibold">{{display}} que has guardado</p>
        <div v-for="savedOffer in savedOffers" :key="savedOffer.creationTime.seconds"> <ProfileOfferCard
          :title="savedOffer.title"
          :description="savedOffer.description"
          :location="savedOffer.location"
          :contactEmail="savedOffer.contactEmail"
          :website="savedOffer.website"
          :timeId="savedOffer.creationTime"
          :userType="userType"
          @reRenderOffers="forceRerender()"/>
        </div>
    </div>
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
    savedCollection: String,
    userType: String
  },
  data() {
    return {
      currentUserId: firebase.auth().currentUser.uid,
      ownedOffers: [],
      savedOffersIds: [],
      savedOffers: [],
      offerEditKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.$emit("forceRender");
    },

    loadSavedOffers() {
      db.collection("users").doc(this.currentUserId)
        .get()
        .then(doc => {
          this.savedOffersIds = doc.data().savedOffers;
          this.savedOffersIds.forEach(element => {
            db.collection(this.savedCollection)
              .doc(element)
              .get()
              .then((doc2) => {
                this.savedOffers.push(doc2.data());
              });
          });
        });
    }
  },
  created () {
    // Al crear el componente pide a la colección de ofertas de firestore las ofertas que el propio usuario entity ha añadido
    db.collection(this.ownedCollection)
      .where("submitterId", "==", this.currentUserId)
      .orderBy("creationTime", "desc")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          console.log(doc);
          this.ownedOffers.push(doc.data());
        });
      }).then(() => {
        this.loadSavedOffers(); // Llama al método que carga las ofertas que un usuario person ha guardado
      });
  },
};
</script>

<style scoped>
</style>
