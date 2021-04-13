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
              <div class="grid grid-cols-2 ml-8 mt-8 md:w-4/5 sm:w-full">
                <div>
                  <p class="text-richblack text-left mb-1">Información de Contacto</p>
                  <div class="contact-mail text-left text-sm mb-2">
                    <i class="text-davysgray fas fa-envelope mr-1"></i>
                    <input placeholder="E-mail de contacto" class="w-2/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.contactEmail">
                  </div>
                  <div class="contact-web text-left text-sm">
                    <i class=" text-davysgray fas fa-pager mr-1"></i>
                    <input placeholder="Sitio Web de la empresa" class="w-2/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.website">
                  </div>
                </div>
                <div>
                  <div class="text-left text-sm">
                    <i class="text-davysgray fas fa-map-marker-alt mr-4 ml-1"></i>
                    <select id="location" v-model="offerData.location"
                      class="rounded-xl w-2/4 bg-white border-gray-400 text-gray-700 leading-normal mt-1 mb-4 shadow-md">
                      <option selected disabled class="text-gray-400">Lugar</option>
                      <option v-for="index in getOffers().place.length" :key="index">
                        {{ getOffers().place[index - 1] }}
                      </option>
                    </select>
                  </div>
                  <div class="text-left text-sm">
                    <i class=" text-davysgray fas fa-users mr-3"></i>
                    <select id="category" v-model="offerData.category"
                    class="rounded-xl w-2/4 bg-white border-gray-400 text-gray-700 leading-normal mt-1 mb-4 shadow-md">
                      <option selected disabled class="text-gray-400">Categoría</option>
                      <option v-for="index in getOffers().category.length" :key="index"> {{getOffers().category[index - 1]}}</option>
                    </select>
                  </div>
                  <div class="text-left text-sm">
                    <i class=" text-davysgray fas fa-user-clock mr-3"></i>
                    <select id="duration" v-model="offerData.duration"
                    class="rounded-xl w-2/4 bg-white border-gray-400 text-gray-700 leading-normal shadow-md">
                      <option selected disabled class="text-gray-400">Jornada</option>
                      <option v-for="index in getOffers().duration.length" :key="index"> {{getOffers().duration[index - 1]}}</option>
                    </select>
                  </div>
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
import { mapGetters } from "vuex";
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
        location: "Lugar",
        website: "",
        category: "Categoría",
        duration: "Jornada",
        show: false,
        image: ""
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
          this.offerData.category = doc.data().category;
          this.offerData.duration = doc.data().duration;
          // Faltaría poner la imagen aquí para editarla
        });
      });
  },
  methods: {
    ...mapGetters("data", ["getOffers"]),
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
            website: this.offerData.website,
            category: this.offerData.category,
            duration: this.offerData.duration
          }
          );
        }).then(() => {
          this.$emit("beforeCloseEdit");
        }).then(() => {
          this.$emit("close");
        });
    }
  },
};
</script>

<style>

</style>
