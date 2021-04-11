<template>
  <div class="card-display">
    <div class="own">
      <p class="text-lg font-semibold">{{display}} que has añadido</p>
        <div v-for="ownOffer in ownOffers" :key="ownOffer.title"> <ProfileOfferCard
          :title="ownOffer.title"
          :description="ownOffer.description"
          :location="ownOffer.location"
          :contactEmail="ownOffer.contactEmail"
          :website="ownOffer.website" />
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
import db from "./firebaseInit.js";
import ProfileOfferCard from "../components/ProfileOfferCard.vue";

export default {
  name: "ProfileCardsDisplay",
  components: {
    ProfileOfferCard,
  },
  props: {
    display: String,
    ownCollection: String,
    savedCollection: String
  },
  data() {
    return {
      currentUserId: firebase.auth().currentUser.uid,
      openTab: 1,
      ownOffers: []
    };
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  },
  created () {
    db.collection(this.ownCollection).where("submitterId", "==", this.currentUserId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.ownOffers.push(doc.data());
        });
        console.log(this.ownOffers);
      });
  },
};
</script>

<style scoped>
</style>
