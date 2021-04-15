<template>
  <div class="card-display pb-8">
    <div class="own">
      <p class="text-lg font-semibold" v-if="userType==='entity'">{{display}} que has creado</p>
        <div v-for="ownedOffer in ownedOffers" :key="ownedOffer.creationTime.seconds"> <ProfileOfferCard
          :title="ownedOffer.title"
          :description="ownedOffer.description"
          :location="ownedOffer.location"
          :duration="ownedOffer.duration"
          :contactEmail="ownedOffer.contactEmail"
          :website="ownedOffer.website"
          :timeId="ownedOffer.creationTime"
          :userType="userType"
          :collection="ownedCollection"
          :isOwn="true"
          @reRenderOffers="forceRerender()"/>
        </div>
    </div>
    <div class="saved mt-2">
     <div v-if="userType==='person'">
        <p class="text-lg font-semibold">{{display}} que has guardado</p>
        <p v-if="savedLength <= 0" class=" text-md mt-2">Aún no has guardado {{display}}</p>
     </div>
        <div v-for="savedOffer in savedOffers" :key="savedOffer.creationTime.seconds"> <ProfileOfferCard
          :title="savedOffer.title"
          :description="savedOffer.description"
          :location="savedOffer.location"
          :duration="savedOffer.duration"
          :contactEmail="savedOffer.contactEmail"
          :website="savedOffer.website"
          :timeId="savedOffer.creationTime"
          :userType="userType"
          :collection="ownedCollection"
          :isOwn="false"
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
      savedProjectsIds: [],
      savedOffers: [],
      savedLength: 0,
      offerEditKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.$emit("forceRender");
    },

    loadSavedOffers() {
      if (this.savedCollection === "savedOffers") {
        db.collection("users").doc(this.currentUserId)
          .get()
          .then(doc => {
            this.savedOffersIds = doc.data().savedOffers;
            this.savedOffersIds.forEach(element => {
              db.collection(this.ownedCollection)
                .doc(element)
                .get()
                .then((doc2) => {
                  this.savedOffers.push(doc2.data());
                  this.savedLength = this.savedOffers.length;
                  console.log("Aquí va el savedLength de ofertas" + this.savedLength);
                });
            });
          });
      } else if (this.savedCollection === "savedProjects") {
        db.collection("users").doc(this.currentUserId)
          .get()
          .then(doc => {
            this.savedProjectsIds = doc.data().savedProjects;
            this.savedProjectsIds.forEach(element => {
              db.collection(this.ownedCollection)
                .doc(element)
                .get()
                .then((doc2) => {
                  this.savedOffers.push(doc2.data());
                  this.savedLength = this.savedOffers.length;
                  console.log("Aquí va el savedLength de proyectos " + this.savedLength);
                  console.log(this.savedOffers);
                });
            });
          });
      }
    }
  },
  created () {
    // Al crear el componente pide a la colección concreta de firestore las ofertas o proyectos que el propio usuario ha añadido
    db.collection(this.ownedCollection)
      .where("submitterId", "==", this.currentUserId)
      .orderBy("creationTime", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
