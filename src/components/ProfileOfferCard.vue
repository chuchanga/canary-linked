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
      <div class="edit-button w-4 h-4 bg-honolulublue mr-2"></div>
      <div class="delete-button w-4 h-4 bg-cyberyellow"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";
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
    };
  },
};
</script>

<style>

</style>
