<template>
  <div class="offer-card-container grid grid-cols-12  w-full h-auto overflow-hidden rounded-md bg-culturedwhite py-4 px-5 my-3 border-2 border-gray-200 shadow-md">
      <img class="lg:w-10/12 w-12/12 h-auto lg:col-span-2 col-span-12 rounded-md mt-2" :src="image" />
    <div class="lg:col-span-5 col-span-12 title-and-description-container flex flex-col">
      <div class="offer-title font-bold h-2/6 text-left mb-1">{{title}}</div>
      <div class="offer-description border-green text-left">{{brief}}</div>
    </div>
    <div class="pl-3 lg:col-span-4 col-span-10 contactinfo-container flex-col">
      <div class="location text-left text-sm">
        <i class="text-davysgray fas fa-map-marker-alt mr-2 mt-1"></i>
        {{location}}
      </div>
      <div class="duration text-left text-sm">
        <i class="text-davysgray fas fa-user-clock mt-1"></i>
         {{duration}}
      </div>
      <div class="contact-email text-left text-sm flex flex-row overflow-hidden">
        <i class="text-davysgray fas fa-envelope mr-2 mt-1"></i>
        {{contactEmail}}
      </div>
      <div class="website text-left text-sm">
        <i class="text-davysgray fas fa-pager mr-1 mt-1"></i>
        {{website}}
      </div>
    </div>
    <div class="lg:col-span-1 col-span-2 button-container flex justify-end">
      <div v-if="userType!='person'" class="flex flex-col">
        <EditButton :onClick="showEditWindow" class="mb-2" />
        <DeleteButton :onClick="deleteOffer" class="mb-2" />
      </div>
      <div v-if="userType==='person'" class="flex flex-col ">
        <ViewButton :onClick="showViewWindow" class="mb-2" />
        <EditButton v-if="isOwn===true" :onClick="showEditWindow" class="" />
        <DeleteButton v-if="isOwn===false" :onClick="removeSavedOffer" class="mt-2" />
        <DeleteButton v-if="isOwn===true" :onClick="deleteOffer" class="mt-2" />
      </div>
      <edit-offer :collection="collection" :currentOfferTimeId="timeId" v-if="showEdit" @close="showEdit = false" @beforeCloseEdit="onEditSave()">
      </edit-offer>
      <view-offer :title="title" :description="description" :location="location" :duration="duration" :contactEmail="contactEmail" v-if="showView" @close="showView = false">
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
import ViewButton from "../Button/ViewButton.vue";
export default {
  props: {
    title: String,
    description: String,
    location: String,
    duration: String,
    contactEmail: String,
    website: String,
    timeId: Object,
    image: String,
    userType: String,
    collection: String,
    isOwn: Boolean
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
      db.collection(this.collection).where("creationTime", "==", this.timeId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.currentOfferId = doc.id;
          });
        }).then(() => {
          db.collection(this.collection).doc(this.currentOfferId).delete(); // Quizás deberíamos añadir aquí una especie de confirmación
        }).then(() => {
          this.$emit("reRenderOffers");
          alert("Elemento eliminado");
        });
    },
    // Método que elimina la oferta o proyecto del array de ofertas o proyectos guardados del usuario logueado.
    removeSavedOffer() {
      this.getOfferId();
      if (this.collection === "offers") {
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
      } else if (this.collection === "projects") {
        let userSavedProjects;
        db.collection("users").doc(this.currentUserId).get().then(doc => {
          userSavedProjects = doc.data().savedProjects;
          console.log(userSavedProjects);
        }).then(() => {
          const indexOfProject = userSavedProjects.indexOf(this.currentOfferId);
          console.log(this.currentOfferId);
          console.log(indexOfProject);
          userSavedProjects.splice(indexOfProject, 1); // Elimina del array de proyectos del usuario el proyecto actual
          db.collection("users").doc(this.currentUserId).update(
            {
              savedProjects: userSavedProjects
            }
          ).then(() => {
            this.$emit("reRenderOffers");
            alert("Ha eliminado el proyecto de sus proyectos guardados");
          });
        });
      }
    },
    getOfferId() {
      db.collection(this.collection).where("creationTime", "==", this.timeId)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.currentOfferId = doc.id;
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
    ViewButton
  },
};
</script>

<style>

</style>
