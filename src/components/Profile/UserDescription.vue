<template>
  <div class="user-info w-72 h-auto m-4 p-4 shadow-lg flex flex-col">
    <!--<div class="user-image mb-8 h-48 w-48 rounded-full self-center bg-hero"></div>-->
    <ProfileImage/>
    <div class="user-name font-semibold ml-2 h-1/6 text-left">{{loggedUserData.name}} {{loggedUserData.surname}}</div>
    <div class="user-diplayname mt-1 ml-2 h-1/6 text-left text-gray-400">@{{loggedUserData.displayName}}</div>
    <div class="user-brief-description ml-2 mt-8 h-1/6 text-left text-sm">{{loggedUserData.description}}</div>
    <div class="user-contact ml-2 mt-8 h-1/6">
      <div class="contact-mail h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-envelope mr-2"></i> {{loggedUserData.email}}
       </div>
      <div class="contact-location h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-map-marker-alt mr-4"></i>{{ loggedUserData.location }}
       </div>
      <div class="contact-web h-1/6 text-left text-sm">
        <i class=" text-davysgray fas fa-pager mr-2"></i>
        {{ loggedUserData.website }}
       </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebaseInit.js";
import ProfileImage from "./ProfileImage.vue";
// Import YellowButton from "../components/Button/YellowButton.vue";
export default {
  name: "UserDescription",
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
      textReadOnly: true,
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
  },
  components: {
    ProfileImage,
    // YellowButton

  }
};
</script>
<style scoped>
</style>
