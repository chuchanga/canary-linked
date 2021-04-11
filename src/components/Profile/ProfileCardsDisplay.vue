<template>
  <div class="card-display">
    <div class="own">
      <p class="text-lg font-semibold">{{display}} que has añadido</p>
        <div v-for="ownedOffer in ownedOffers" :key="ownedOffer.title"> <ProfileOfferCard
          @reRenderOffers="forceRerender()"
          :title="ownedOffer.title"
          :description="ownedOffer.description"
          :location="ownedOffer.location"
          :contactEmail="ownedOffer.contactEmail"
          :website="ownedOffer.website" />
        </div>
    </div>
    <div class="saved mt-4">
      <p class="text-lg font-semibold">{{display}} que has guardado</p>
      <div>
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
    savedCollection: String
  },
  data() {
    return {
      currentUserId: firebase.auth().currentUser.uid,
      ownedOffers: [],
      offerEditKey: 0
    };
  },
  methods: {
    forceRerender() {
      this.$emit("forceRender");
    }
  },
  created () {
    db.collection(this.ownedCollection).where("submitterId", "==", this.currentUserId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.ownedOffers.push(doc.data());
        });
        console.log(this.ownedOffers);
      });
  },
};
</script>

<style scoped>
</style>
