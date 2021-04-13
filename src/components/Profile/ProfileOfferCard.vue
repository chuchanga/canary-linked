<template>
  <div class="offer-card-container w-full h-auto max-h-48 overflow-hidden bg-culturedwhite p-5 my-3 border-2 border-davysgray grid grid-cols-3 shadow-lg">
    <div class="title-and-description-container flex flex-col">
      <div class="offer-title font-bold h-2/6 text-left">{{title}}</div>
      <div class="offer-description border-green">{{description}}</div>
    </div>
    <div class="contactinfo-container flex-col">
      <div class="location">{{location}}</div>
      <div class="contact-email">{{contactEmail}}</div>
      <div class="website">{{website}}</div>
    </div>
    <div class="button-container flex justify-end">
      <div v-if="userType!='person'" class="flex flex-col">
        <EditButton :onClick="showEditWindow" class="mb-2" />
        <DeleteButton :onClick="deleteOffer" class="mb-2" />
      </div>
      <div v-if="userType==='person'" class="flex flex-col ">
        <DeleteButton :onClick="removeSavedOffer" class="mb-2 mt-4" />
      </div>
      <edit-offer :currentOfferTimeId="timeId" v-if="showEdit" @close="showEdit = false" @beforeCloseEdit="onEditSave()">
      </edit-offer>
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
export default {
  props: {
    title: String,
    description: String,
    location: String,
    contactEmail: String,
    website: String,
    timeId: Object,
    userType: String
  },
  data() {
    return {
      currentUserId: firebase.auth().currentUser.uid,
      showEdit: false
    };
  },
  methods: {
    deleteOffer () {
      let currentOfferId = "";
      db.collection("offers").where("creationTime", "==", this.timeId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            currentOfferId = doc.id;
          });
        }).then(() => {
          db.collection("offers").doc(currentOfferId).delete(); // Quizás deberíamos añadir aquí una especie de confirmación
        }).then(() => {
          this.$emit("reRenderOffers");
        });
    },
    removeSavedOffer() { // Este método tiene que quitar la oferta indicada del array de ofertas guardadas del usuario
    // Buscar el doc del usuario, traer su array de ofertas guardadas y eliminar del mismo la oferta en concreto, con su id
      console.log("Eliminar oferta de la lista de ofertas del usuario");
    },

    showEditWindow() {
      this.showEdit = true;
    },
    onEditSave () {
      this.$emit("reRenderOffers");
    }
  },
  components: {
    EditButton,
    DeleteButton,
    EditOffer
  },
};
</script>

<style>

</style>
