<template>
  <div class="user-info w-72 h-auto m-4 p-4 shadow-lg flex flex-col">
    <EditProfileImage/>
    <input placeholder="Nombre y Apellidos" class="user-name ml-2 h-1/6 text-left p-1 border rounded border-gray-200 shadow-md" v-model="loggedUserData.name">
    <input placeholder="@Nombre de Usuario" class="user-displayname mt-1 ml-2 h-1/6 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="loggedUserData.displayName">
    <textarea placeholder="Breve Descripción (420 caracteres)" class="user-brief-description mt-8 ml-2 h-1/6 text-left p-1 border rounded border-gray-200 shadow-md" v-model="loggedUserData.description"></textarea>
    <div class="user-contact ml-2 mt-8 h-1/6">
      <div class="contact-mail h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-envelope mr-2"></i> {{loggedUserData.email}}
      </div>
      <div class="contact-location h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-map-marker-alt mr-2"></i>
        <input placeholder="Localización" class="user-location mt-1 ml-2 h-1/6 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="loggedUserData.location">
      </div>
      <div class="contact-web h-1/6 text-left text-sm">
        <i class=" text-davysgray fas fa-pager mr-1"></i>
        <input placeholder="Sitio Web" class="user-website mt-1 ml-2 h-1/6 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="loggedUserData.website">
      </div>
    </div>
    <YellowButton :onClick="saveChanges" class="mt-8 mb-6"> GUARDAR CAMBIOS </YellowButton>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";
import EditProfileImage from "./EditProfileImage.vue";
import YellowButton from "../components/Button/YellowButton.vue";
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
    saveChanges() {
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
  components: {
    EditProfileImage,
    YellowButton

  }
};
</script>
<style scoped>
</style>
