<template>
  <div class="flex flex-col justify-center rounded-lg shadow-lg border-2 border-gray-200 overflow-hidden w-12/12 lg:w-11/12 center m-auto mb-2">
    <img class="w-full h-56 object-cover" :src="image" />
    <div class="space-y-8 bg-white rounded-b-md shadow-lg p-8">
      <div class="grid justify-items-stretch space-y-3">
        <p class="text-richblack text-left font-semibold text-md text-lg lg:text-2xl">
          {{ briefTitle }}
        </p>
        <p class="text-richblack justify-self-start text-lg lg:text-base">
          <i class="text-cyberyellow fas fa-map-marker-alt mr-2"></i>
          {{ place }}
        </p>
        <p class="text-richblack justify-self-start text-lg lg:text-base">
          <i class="text-cyberyellow far fa-calendar-alt mr-2"></i>
          {{ duration }}
        </p>
        <p class="text-richblack justify-self-start text-lg lg:text-base text-justify">
          <i class="text-cyberyellow fas fa-info-circle lg:mr-2 "></i>
          {{ briefDescription }}
        </p>
      </div>
      <div class="lg:flex lg:justify-center">
        <YellowButton class=" lg:mr-2 my-1" :onClick="displayModal"> Leer Más </YellowButton>
        <div v-if="mymood === 'offers'">
          <YellowButton v-if="currentUserType==='person'" class="my-1" :onClick="saveOffer"> Guardar oferta </YellowButton>
        </div>
        <div v-else-if="mymood === 'projects'">
          <YellowButton v-if="currentUserType==='person'" class="my-1" :onClick="saveProject"> Guardar proyecto </YellowButton>
        </div>
        <view-offer :id="id" :title="title" :description="description" :location="place" :duration="duration" :image="image" :contactEmail="contactEmail" :currentUserType="currentUserType" :cardType="mymood" v-if="showView" @close="showView = false">
        </view-offer>
      </div>
  </div>
  </div>
</template>
<script>
import YellowButton from "../components/Button/YellowButton";
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";
import ViewOffer from "./ViewOffer.vue";
export default {
  props: ["id", "title", "description", "place", "image", "duration", "contactEmail", "currentUserType", "mymood"], // Tendría que pasar todas las props en verdad
  components: {
    YellowButton,
    ViewOffer
  },
  data() {
    return {
      userId: "",
      showView: false,
      briefDescription: "",
      briefTitle: "",
    };
  },
  methods: {
    displayModal() {
      this.showView = true;
    },
    createBriefs() {
      if (this.title.length > 60) {
        this.briefTitle = this.title.substring(0, 50) + "...";
      } else {
        this.briefTitle = this.title;
      }
      if (this.description.length > 60) {
        this.briefDescription = this.description.substring(0, 60) + "...";
      } else {
        this.briefDescription = this.description;
      }
    },

    saveOffer () { // Guarda el id de la oferta seleccionada en el array de savedOffers del usuario logueado
      let userSavedOffers;
      db.collection("users").doc(this.userId).get().then(doc => {
        userSavedOffers = doc.data().savedOffers;
        console.log(userSavedOffers);
      }).then(() => {
        if (!userSavedOffers.includes(this.id)) { // Si el usuario no tiene esa oferta guardada
          userSavedOffers.unshift(this.id);
          // Guarda la oferta al principio del array de ofertas guardadas para que salga primera
          db.collection("users").doc(this.userId).update(
            {
              savedOffers: userSavedOffers
            }
          ).then(() => {
            alert("Oferta guardada, puedes verla en tu perfil");
          });
        } else {
          alert("Ya habías guardado esta oferta");
        }
      });
    },
    saveProject () { // Guarda el id del proyecto seleccionado en el array de savedProjects del usuario logueado
      let userSavedProjects;
      db.collection("users").doc(this.userId).get().then(doc => {
        userSavedProjects = doc.data().savedProjects;
      }).then(() => {
        if (!userSavedProjects.includes(this.id)) { // Si el usuario no tiene ese proyecto guardado
          userSavedProjects.unshift(this.id);
          // Guarda el proyecto al principio del array de ofertas guardadas para que salga primera
          db.collection("users").doc(this.userId).update(
            {
              savedProjects: userSavedProjects
            }
          ).then(() => {
            alert("Proyecto guardado, puedes verla en tu perfil");
          });
        } else {
          alert("Ya habías guardado este proyecto");
        }
      });
    },
  },
  created () {
    this.createBriefs();
    if (firebase.auth().currentUser.uid) {
      this.userId = firebase.auth().currentUser.uid;
    }
  },
};
</script>
<style scoped>
</style>
