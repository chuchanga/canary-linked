<template>
  <div class="offer-card-container w-full h-auto max-h-48 overflow-hidden bg-culturedwhite p-5 my-3 border-2 border-davysgray grid grid-cols-3 shadow-lg">
    <div class="title-and-description-container flex flex-col">
      <div class="offer-title font-bold h-2/6 text-left">{{title}}</div>
      <div class="offer-description border-green">{{brief}}</div>
    </div>
    <div class="contactinfo-container flex-col">
      <div class="location">{{location}}</div>
       <div class="duration">{{duration}}</div>
      <div class="contact-email">{{contactEmail}}</div>
      <div class="website">{{website}}</div>
    </div>
    <div class="button-container flex justify-end">
      <div v-if="userType!='person'" class="flex flex-col">
        <EditButton :onClick="showEditWindow" class="mb-2" />
        <DeleteButton :onClick="deleteOffer" class="mb-2" />
      </div>
      <div v-if="userType=='person'" class="flex flex-col ">
        <DeleteButton :onClick="removeSavedOffer" class="mb-2 mt-4" />
        <YellowButton :onClick="showViewWindow" class="mb-2 mt-4"> Ver </YellowButton>
      </div>
      <edit-offer :currentOfferTimeId="timeId" v-if="showEdit" @close="showEdit = false" @beforeCloseEdit="onEditSave()">
      </edit-offer>
      <view-offer :title="title" :description="description" :location="location" :duration="duration" v-if="showView" @close="showView = false">
      </view-offer>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebaseInit.js";
import EditButton from "../Button/EditButton.vue";
import DeleteButton from "../Button/DeleteButton.vue";
import EditOffer from "../EditOffer.vue";
import ViewOffer from "../ViewOffer.vue";
import YellowButton from "../Button/YellowButton.vue";
export default {
  props: {
    title: String,
    description: String,
    location: String,
    duration: String,
    contactEmail: String,
    website: String,
    timeId: Object,
    userType: String
  },
  data() {
    return {
      currentUserId: firebase.auth().currentUser.uid,
      currentOfferId: "",
      showEdit: false,
      showView: false,
      brief: this.description.substring(0, 100) + "..."
    };
  },
  methods: {
    deleteOffer () {
      db.collection("offers").where("creationTime", "==", this.timeId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.currentOfferId = doc.id;
          });
        }).then(() => {
          db.collection("offers").doc(this.currentOfferId).delete(); // Quizás deberíamos añadir aquí una especie de confirmación
        }).then(() => {
          this.$emit("reRenderOffers");
        });
    },
    removeSavedOffer() { // Este método tiene que quitar la oferta indicada del array de ofertas guardadas del usuario
    // Buscar el doc del usuario, traer su array de ofertas guardadas y eliminar del mismo la oferta en concreto, con su id
      let userSavedOffers;
      db.collection("users").doc(this.currentUserId).get().then(doc => {
        userSavedOffers = doc.data().savedOffers;
        console.log(userSavedOffers);
      }).then(() => {
        const indexOfOffer = userSavedOffers.indexOf(this.currentOfferId);
        console.log(this.currentOfferId);
        console.log(indexOfOffer);
        userSavedOffers.splice(indexOfOffer, 1); // Elimina del array de ofertas guardadas del usuario la oferta actual
        db.collection("users").doc(this.currentUserId).update(
          {
            savedOffers: userSavedOffers
          }
        ).then(() => {
          this.$emit("reRenderOffers");
          alert("Ha eliminado la oferta de sus ofertas guardadas");
        });
      });
    },

    showEditWindow() {
      this.showEdit = true;
    },
    showViewWindow() {
      this.showView = true;
    },
    onEditSave () {
      this.$emit("reRenderOffers");
    }
  },
  created () {

  },
  components: {
    EditButton,
    DeleteButton,
    EditOffer,
    ViewOffer,
    YellowButton
  },
};
</script>

<style>

</style>
