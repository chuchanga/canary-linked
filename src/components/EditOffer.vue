<template>
<transition name="modal">
    <div v-if="collection==='offers'" class="modal-mask overflow-hidden">
      <div class="modal-wrapper lg:w-9/12 w-11/12">
        <div class="modal-container m-auto lg:w-9/12 w-11/12 pb-8 bg-culturedwhite">

          <div class="modal-header w-full h-3/5 p-4 mb-4 flex-row inline-flex bg-cyberyellow align-middle ">
              <div class="font-semibold text-lg justify-self-center mr-auto">Editar Oferta</div>
              <i @click="$emit('close')" class="cursor-pointer fas fa-times-circle text-richblack"></i>
          </div>

          <div class="modal-body w-full px-5 py-2">
            <div class="offer-publication h-auto p-4 flex flex-col">
              <input placeholder="Título de la Oferta" class="offer-title h-12 ml-2 text-left p-4 border rounded border-gray-200 shadow-md" v-model="offerData.title">
                <p class="mt-2 text-red-500" v-if="errors.noTitle"> Introduce un Título</p>
                <p class="mt-2 text-red-500" v-if="errors.badTitle"> El título debe tener entre 40 y 100 caracteres</p>
              <textarea placeholder="Descripción de la Oferta" class="h-64 mt-8 ml-2 text-left p-4 border rounded border-gray-200 shadow-md" v-model="offerData.description"></textarea>
                <p class="mt-2 text-red-500" v-if="errors.noDescription"> Introduce una Descripción</p>
                <p class="mt-2 text-red-500" v-if="errors.badDescription"> La descripción debe tener, como mínimo, 280 caracteres</p>
              <div class="grid lg:grid-cols-3 grid-cols-1 ml-8 mt-8 md:w-5/5 sm:w-full">
                <div>
                  <p class="text-richblack text-left mb-1">Información de Contacto</p>
                  <div class="contact-mail text-left text-sm mb-2">
                    <i class="text-davysgray fas fa-envelope mr-1"></i>
                    <input placeholder="E-mail de contacto" class="w-2/4 lg:3/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.contactEmail">
                  </div>
                  <div class="contact-web text-left text-sm mb-6">
                    <i class=" text-davysgray fas fa-pager mr-1"></i>
                    <input placeholder="Sitio Web de la empresa" class="w-2/4 lg:3/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.website">
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
                <div class="image-upload flex flex-col mt-3">
                  <p class="mb-4 font-semibold">Modifica la imagen de cabecera</p>
                  <input type="file" @change="previewImage" accept="image/*" class="" ref="" >
                  <img @load="clearURL" class=" mt-4 mx-2 max-h-48 max-w-xs object-cover" :src="previewUrl" alt="Imagen elegida como cabecera">
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
    <div v-if="collection==='projects'" class="modal-mask overflow-hidden">
      <div class="modal-wrapper lg:w-9/12 w-11/12">
        <div class="modal-container m-auto lg:w-9/12 w-11/12 pb-8 bg-culturedwhite">
          <div class="modal-header w-full h-3/5 p-4 mb-4 flex-row inline-flex bg-cyberyellow align-middle ">
              <div class="font-semibold text-lg justify-self-center mr-auto">Editar Proyecto</div>
              <i @click="$emit('close')" class="cursor-pointer fas fa-times-circle text-richblack"></i>
          </div>
          <div class="modal-body w-full px-5 py-2">
            <div class="offer-publication h-auto p-4 flex flex-col">
              <input placeholder="Título del proyecto" class="offer-title h-12 ml-2 text-left p-4 border rounded border-gray-200 shadow-md" v-model="offerData.title">
                <p class="mt-2 text-red-500" v-if="errors.noTitle"> Introduce un Título</p>
                <p class="mt-2 text-red-500" v-if="errors.badTitle"> El título debe tener entre 40 y 100 caracteres</p>
              <textarea placeholder="Descripción del Proyecto" class="h-64 mt-8 ml-2 text-left p-4 border rounded border-gray-200 shadow-md" v-model="offerData.description"></textarea>
                <p class="mt-2 text-red-500" v-if="errors.noDescription"> Introduce una Descripción</p>
                <p class="mt-2 text-red-500" v-if="errors.badDescription"> La descripción debe tener, como mínimo, 280 caracteres</p>
              <div class="grid lg:grid-cols-3 grid-cols-1 ml-8 mt-8 md:w-5/5 sm:w-full">
                <div>
                  <p class="text-richblack text-left mb-1">Información de Contacto</p>
                  <div class="contact-mail text-left text-sm mb-2">
                    <i class="text-davysgray fas fa-envelope mr-1"></i>
                    <input placeholder="E-mail de contacto" class="w-2/4 lg:3/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.contactEmail">
                  </div>
                  <div class="contact-web text-left text-sm mb-6">
                    <i class=" text-davysgray fas fa-pager mr-1"></i>
                    <input placeholder="Sitio Web" class="w-2/4 lg:3/4 mt-1 ml-2 text-left p-1 border rounded border-gray-200 shadow-md text-gray-400" v-model="offerData.website">
                  </div>
                </div>
                <div>
                  <div class="text-left text-sm">
                    <i class="text-davysgray fas fa-map-marker-alt mr-4 ml-1"></i>
                    <select id="location" v-model="offerData.location"
                      class="rounded-xl w-2/4 bg-white border-gray-400 text-gray-700 leading-normal mt-1 mb-4 shadow-md">
                      <option selected disabled class="text-gray-400">Lugar</option>
                      <option v-for="index in getProjects().place.length" :key="index">
                        {{ getProjects().place[index - 1] }}
                      </option>
                    </select>
                  </div>
                  <div class="text-left text-sm">
                    <i class=" text-davysgray fas fa-users mr-3"></i>
                    <select id="category" v-model="offerData.category"
                    class="rounded-xl w-2/4 bg-white border-gray-400 text-gray-700 leading-normal mt-1 mb-4 shadow-md">
                      <option selected disabled class="text-gray-400">Categoría</option>
                      <option v-for="index in getProjects().category.length" :key="index"> {{getProjects().category[index - 1]}}</option>
                    </select>
                  </div>
                  <div class="text-left text-sm">
                    <i class=" text-davysgray fas fa-user-clock mr-3"></i>
                    <select id="duration" v-model="offerData.duration"
                    class="rounded-xl w-2/4 bg-white border-gray-400 text-gray-700 leading-normal shadow-md">
                      <option selected disabled class="text-gray-400">Mes</option>
                      <option v-for="index in getProjects().duration.length" :key="index"> {{getProjects().duration[index - 1]}}</option>
                    </select>
                  </div>
                </div>
                <div class="image-upload flex flex-col mt-3">
                  <p class="mb-4 font-semibold">Modifica la imagen de cabecera</p>
                  <input type="file" @change="previewImage" accept="image/*" class="" ref="" >
                  <img @load="clearURL" class=" mt-4 mx-2 max-h-48 max-w-xs object-cover" :src="previewUrl" alt="Imagen elegida como cabecera">
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
    currentOfferTimeId: Object,
    collection: String
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
      },
      imageData: null,
      previewUrl: "",
      projectImageUrl: null,
      currentOfferImageId: "",
      errors: {
        noTitle: "",
        noDescription: "",
        badTitle: "",
        badDescription: ""
      }
    };
  },
  components: {
    YellowButton,
  },
  created () {
    console.log(this.imageData);
    db.collection(this.collection).where("creationTime", "==", this.currentOfferTimeId)
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
          this.offerData.image = doc.data().image;
          this.previewUrl = doc.data().image;
        });
      });
  },
  methods: {
    ...mapGetters("data", ["getOffers"]),
    ...mapGetters("data", ["getProjects"]),
    saveChanges() {
      if (this.validateForm()) {
        let currentOfferId = "";
        db.collection(this.collection).where("creationTime", "==", this.currentOfferTimeId)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              currentOfferId = doc.id;
              this.currentOfferImageId = doc.id;
            });
          }).then(() => {
            db.collection(this.collection).doc(currentOfferId).update({
              title: this.offerData.title,
              description: this.offerData.description,
              contactEmail: this.offerData.contactEmail,
              location: this.offerData.location,
              website: this.offerData.website,
              category: this.offerData.category,
              duration: this.offerData.duration
            }
            ).then(() => {
            // Si no se sube imagen, deja la que ya tiene. Si se sube imagen, sustituye la anterior en firestore.
              if (this.imageData != null) {
                firebase.storage()
                  .ref(this.collection + "/" + this.currentOfferImageId + "/" + this.collection + "Pic.jpg")
                  .put(this.imageData);
              } else {
              }
            });
          }).then(() => {
            this.$emit("beforeCloseEdit");
          }).then(() => {
            this.$emit("close");
          });
      }
    },
    previewImage(event) {
      this.picture = null;
      this.imageData = event.target.files[0];
      this.previewUrl = URL.createObjectURL(event.target.files[0]);
    },
    clearURL () {
      URL.revokeObjectURL(this.previewUrl);
    },
    checkInputs() {
      this.errors.noTitle = "";
      this.errors.noDescription = "";
      this.errors.badTitle = "";
      this.errors.badDescription = "";

      if (!this.offerData.title) {
        this.errors.noTitle = "error";
      }
      if (!this.offerData.description) {
        this.errors.noDescription = "error";
      }
      if (this.offerData.title.length >= 0) {
        if (this.offerData.title.length < 40 || this.offerData.title.length > 100) {
          this.errors.badTitle = "error";
        }
      }
      if (this.offerData.description.length >= 0) {
        if (this.offerData.description.length < 280) {
          this.errors.badDescription = "error";
        }
      }
    },
    validateForm() {
      this.checkInputs();
      if (!this.errors.noTitle && !this.errors.noDescription && !this.errors.badTitle && !this.errors.badDescription) {
        return true;
      } else {
        return false;
      }
    }
  },
};
</script>

<style>
</style>
