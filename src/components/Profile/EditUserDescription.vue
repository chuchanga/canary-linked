<template>
  <div class="user-info w-72 h-auto m-4 p-4 shadow-lg flex flex-col">
    <EditProfileImage/>
    <input placeholder="Nombre y Apellidos" class="user-name ml-2 h-1/6 text-left p-1 border rounded border-gray-200 shadow-md" v-model="loggedUserData.name">
     <p class="text-red-500 mb-2" v-if="errors.noName"> No ha introducido un Nombre</p>
     <p class="text-red-500 mb-2" v-if="errors.badName"> El Nombre debe tener entre 3 y 40 caracteres</p>
    <input placeholder="@Nombre de Usuario" class="user-displayname mt-1 ml-2 h-1/6 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="loggedUserData.displayName">
    <p class="text-red-500 mb-2" v-if="errors.badUsername"> El @ no puede tener más de 15 caracteres</p>
    <textarea placeholder="Breve Descripción (Max. 420 caracteres)" class="user-brief-description mt-6 ml-2 h-28 text-left p-1 border rounded border-gray-200 shadow-md" v-model="loggedUserData.description"></textarea>
    <p class="mt-1 text-sm text-red-500" v-if="errors.badDescription"> La descripción debe tener, como máximo, 420 caracteres</p>
    <div class="user-contact ml-2 mt-8 h-1/6">
      <div class="contact-mail h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-envelope mr-2"></i> {{loggedUserData.email}}
      </div>
      <div class="contact-web h-1/6 text-left text-sm">
        <i class=" text-davysgray fas fa-pager mr-1"></i>
        <input placeholder="Sitio Web" class="user-website mt-1 ml-2 h-1/6 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="loggedUserData.website">
      </div>
      <div class="text-left text-sm mt-2">
        <i class="text-davysgray fas fa-map-marker-alt mr-3 ml-1"></i>
        <select id="location" v-model="loggedUserData.location"
          class="rounded-lg w-3/4 bg-white border-gray-400 text-gray-700 leading-normal mt-1 mb-4 shadow-md">
          <option selected disabled class="text-gray-400">Lugar</option>
          <option v-for="index in getOffers().place.length" :key="index">
            {{ getOffers().place[index - 1] }}
          </option>
        </select>
      </div>
    </div>
    <YellowButton :onClick="saveChanges" class="mt-8 mb-6"> GUARDAR CAMBIOS </YellowButton>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebaseInit.js";
import { mapGetters } from "vuex";
import EditProfileImage from "./EditProfileImage.vue";
import YellowButton from "../Button/YellowButton.vue";
export default {
  name: "EditUserDescription",
  data () {
    return {
      loggedUserId: firebase.auth().currentUser.uid,
      loggedUserData: {
        email: "",
        name: "",
        displayName: "",
        description: "",
        location: "",
        website: ""
      },
      imgFile: {},
      errors: {
        noName: "",
        badName: "",
        badUsername: "",
        badDescription: ""
      }
    };
  },
  created () {
    db.collection("users").doc(this.loggedUserId).get().then(doc => {
      this.loggedUserData.email = firebase.auth().currentUser.email;
      this.loggedUserData.name = doc.data().name;
      this.loggedUserData.displayName = doc.data().displayName;
      this.loggedUserData.description = doc.data().description;
      this.loggedUserData.location = doc.data().location;
      this.loggedUserData.website = doc.data().website;
    });
  },
  methods: {
    ...mapGetters("data", ["getOffers"]),
    saveChanges() {
      if (this.validateForm()) {
        db.collection("users").doc(this.loggedUserId).update(
          {
            name: this.loggedUserData.name,
            displayName: this.loggedUserData.displayName,
            description: this.loggedUserData.description,
            location: this.loggedUserData.location,
            website: this.loggedUserData.website
          }
        ).then(() => {
          this.$parent.editing = false;
        });
      }
    },
    checkInputs() {
      this.errors.noName = "";
      this.errors.badName = "";
      this.errors.badUsername = "";
      this.errors.badDescription = "";

      if (!this.loggedUserData.name) {
        this.errors.noName = "error";
      }
      if (this.loggedUserData.name.length < 3 || this.loggedUserData.name.length > 40) {
        this.errors.badName = "error";
      }
      if (this.loggedUserData.displayName.length > 15) {
        this.errors.badUsername = "error";
      }
      if (this.loggedUserData.description.length > 420) {
        this.errors.badDescription = "error";
      }
    },
    validateForm() {
      this.checkInputs();
      if (!this.errors.noName && !this.errors.badName && !this.errors.badUsername && !this.errors.badDescription) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    EditProfileImage,
    YellowButton

  }
};
</script>
<style scoped>
</style>
