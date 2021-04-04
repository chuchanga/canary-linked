<template>
  <div class="user-info w-72 h-auto m-4 p-4 shadow-lg flex flex-col">
    <div class="user-image mb-8 bg-hero h-48 w-48 rounded-full self-center"></div>
    <div class="user-name ml-2 h-1/6 text-left">{{loggedUser.name}} {{loggedUser.surname}}</div>
    <div class="user-id mt-1 ml-2 h-1/6 text-left text-gray-400">@{{loggedUser.displayName}}</div>
    <div class="user-brief-description ml-2 mt-8 h-1/6 text-left text-xs">{{ loggedUser.description }}</div>
    <div class="user-contact ml-2 mt-8 h-1/6">
      <div class="contact-location h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-map-marker-alt mr-4"></i>{{ loggedUser.location }}
       </div>
      <div class="contact-mail h-1/6 text-left text-sm">
        <i class="text-davysgray fas fa-envelope mr-2"></i> {{loggedUser.email}}
       </div>
      <div class="contact-web h-1/6 text-left text-sm">
        <i class=" text-davysgray fas fa-pager mr-2"></i>
        {{ loggedUser.website }}
       </div>
    </div>
    <!--<YellowButton class="mt-8 mb-6"> Editar Perfil </YellowButton>-->
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";

// Import YellowButton from "../components/YellowButton.vue";
export default {
  name: "UserDescription",
  data () {
    return {
      loggedUser: {}
    };
  },
  created () {
    console.log(firebase.auth().currentUser.uid);
    db.collection("users").doc(firebase.auth().currentUser.uid).get().then(doc => {
      console.log(doc.data());
      const data = {
        email: firebase.auth().currentUser.email,
        name: doc.data().name,
        surname: doc.data().surname,
        displayName: doc.data().displayName,
        description: doc.data().description,
        location: doc.data().userLocation,
        website: doc.data().userWeb,
        bio: doc.data().bio,
      };
      this.loggedUser = data;
    }
    );
  },

  components: {
    // YellowButton,
  }
};
</script>
<style scoped>
  .bg-hero {
        background: url("../assets/img1.jpg") center center no-repeat;
    }
</style>
