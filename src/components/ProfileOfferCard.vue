<template>
  <div class="offer-card-container w-full h-auto max-h-60 overflow-hidden bg-culturedwhite p-5 my-2 border-2 border-davysgray grid grid-cols-3">
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
      <div class="flex flex-col">
        <EditButton :onClick="showEditWindow" class="mb-2" />
        <DeleteButton :onClick="deleteOffer" class="mb-2" />
         <button class="hidden" @click="onUpload()" ref="uploadProps"></button>
        </div>
        <edit-offer :currentOfferDescription="description" v-if="showModal" @close="showModal = false">
          </edit-offer>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";
import EditButton from "../components/Button/EditButton.vue";
import DeleteButton from "../components/Button/DeleteButton.vue";
import EditOffer from "../components/EditOffer.vue";
export default {
  props: {
    title: String,
    description: String,
    location: String,
    contactEmail: String,
    website: String
  },
  data() {
    return {
      currentUserId: firebase.auth().currentUser.uid,
      showModal: false
    };
  },
  methods: {
    deleteOffer () {
      let currentOfferId = "";
      db.collection("offers").where("description", "==", this.description)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            currentOfferId = doc.id;
          });
        }).then(() => {
          db.collection("offers").doc(currentOfferId).delete();
        });
    },
    showEditWindow() {
      this.showModal = true;
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
