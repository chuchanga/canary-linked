<template>
<transition name="modal">
    <div class="modal-mask overflow-hidden">
      <div class="modal-wrapper w-2/3">
        <div class="modal-container m-auto w-3/5 pb-8 bg-culturedwhite rounded-md">

          <div class="modal-header w-full h-3/5 p-4 mb-4 flex-row inline-flex bg-cyberyellow align-middle ">
              <div class="font-semibold text-lg justify-self-center mr-auto">Editar Oferta de Trabajo</div>
              <i @click="$emit('close')" class="cursor-pointer fas fa-times-circle text-richblack"></i>
          </div>

          <div class="modal-body w-full px-5 py-2">
            <div class="offer-publication h-auto p-4 flex flex-col">
              <input placeholder="Título de la Oferta" class="offer-title h-12 ml-2 text-left p-4 border rounded border-gray-200 shadow-md" v-model="offerData.title">
              <textarea placeholder="Descripción de la Oferta" class="h-64 mt-8 ml-2 text-left p-4 border rounded border-gray-200 shadow-md" v-model="offerData.description"></textarea>

              <div class="user-contact ml-8 mt-8 md:w-4/5 sm:w-full">
                <div class="contact-mail text-left text-sm">
                  <i class="text-davysgray fas fa-envelope mr-1"></i>
                  <input placeholder="E-mail de contacto" class="w-2/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.contactEmail">
                </div>
                <div class="contact-location text-left text-sm">
                  <i class="text-davysgray fas fa-map-marker-alt mr-2"></i>
                  <input placeholder="Localización" class="w-2/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.location">
                </div>
                <div class="contact-web text-left text-sm">
                  <i class=" text-davysgray fas fa-pager mr-1"></i>
                  <input placeholder="Sitio Web de la empresa" class="w-2/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.website">
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer mt-8">
             <YellowButton :onClick="saveChanges">Guardar Cambios</YellowButton>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import YellowButton from "../components/Button/YellowButton.vue";
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";
export default {
  props: {
    currentOfferDescription: String
  },
  data() {
    return {
      currentOffer: {},
      offerData: {
        submitterId: "",
        title: "",
        description: "",
        contactEmail: "",
        location: "",
        website: "",
      }
    };
  },
  components: {
    YellowButton,
  },
  created () {
    console.log(this.currentOfferDescription);
    db.collection("offers").where("description", "==", this.currentOfferDescription)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.offerData.submitterId = doc.data().submitterId;
          this.offerData.title = doc.data().title;
          this.offerData.description = doc.data().description;
          this.offerData.contactEmail = doc.data().contactEmail;
          this.offerData.location = doc.data().location;
          this.offerData.website = doc.data().website;
        });
      });
  },
  methods: {
    saveChanges() {
      let currentOfferId = "";
      db.collection("offers").where("description", "==", this.currentOfferDescription)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            currentOfferId = doc.id;
          });
        }).then(() => {
          db.collection("offers").doc(currentOfferId).update({
            title: this.offerData.title,
            description: this.offerData.description,
            contactEmail: this.offerData.contactEmail,
            location: this.offerData.location,
            website: this.offerData.website
          }
          );
        }).then(() => {
          this.$emit("close");
        });
    }

    /* Db.collection("offers").where("description", "==", this.currentOfferDescription).update(
        {
          title: this.offerData.title,
          description: this.offerData.description,
          contactEmail: this.offerData.contactEmail,
          location: this.offerData.location,
          website: this.offerData.website
        }
      ).then(() => {
        this.$emit("close");
      });
    } */
  },
};
</script>

<style>

</style>
