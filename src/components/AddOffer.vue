<template>
<transition name="modal">
    <div class="modal-mask overflow-hidden">
      <div class="modal-wrapper w-9/12">
        <div class="modal-container m-auto w-9/12 pb-8 bg-culturedwhite rounded-md">

          <div class="modal-header w-full h-3/5 p-4 mb-4 flex-row inline-flex bg-cyberyellow align-middle ">
              <div class="font-semibold text-lg justify-self-center mr-auto">Añadir Nueva Oferta de Trabajo</div>
              <i @click="$emit('close')" class="cursor-pointer fas fa-times-circle text-richblack"></i>
          </div>

          <div class="modal-body w-full px-5 py-2">
            <div class="offer-publication h-auto p-4 flex flex-col">
              <input placeholder="Título de la Oferta" class="offer-title h-12 ml-2 text-left p-4 border rounded border-gray-200 shadow-md" v-model="offerData.title">
              <textarea placeholder="Descripción de la Oferta" class="h-64 mt-8 ml-2 text-left p-4 border rounded border-gray-200 shadow-md" v-model="offerData.description"></textarea>
              <div class="grid grid-cols-3 ml-8 mt-8 md:w-5/5 sm:w-full">
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
                    <select id="categoria" v-model="offerData.category"
                    class="rounded-xl w-2/4 bg-white border-gray-400 text-gray-700 leading-normal mt-1 mb-4 shadow-md">
                      <option selected disabled class="text-gray-400">Categoría</option>
                      <option v-for="index in getOffers().category.length" :key="index"> {{getOffers().category[index - 1]}}</option>
                    </select>
                  </div>
                  <div class="text-left text-sm">
                    <i class=" text-davysgray fas fa-user-clock mr-3"></i>
                    <select id="categoria" v-model="offerData.duration"
                    class="rounded-xl w-2/4 bg-white border-gray-400 text-gray-700 leading-normal shadow-md">
                      <option selected disabled class="text-gray-400">Jornada</option>
                      <option v-for="index in getOffers().duration.length" :key="index"> {{getOffers().duration[index - 1]}}</option>
                    </select>
                  </div>
                </div>
                <div class="image-upload flex flex-col">
                  <p class="mb-4 font-semibold">Selecciona una imagen de cabecera</p>
                  <input type="file" @change="previewImage" accept="image/*" class="" ref="" >
                  <img @load="clearURL" class=" mt-4 mx-2 max-h-48 max-w-xs object-cover" :src="previewUrl" alt="Imagen elegida como cabecera">
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer mt-8">
             <YellowButton :onClick="addOffer">Añadir Oferta</YellowButton>
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
  data() {
    return {
      offerData: {
        submitterId: "",
        title: "",
        description: "",
        contactEmail: "",
        location: "Lugar",
        website: "",
        category: "Categoría",
        duration: "Jornada",
        show: true,
        image: "https://firebasestorage.googleapis.com/v0/b/canarylinked.appspot.com/o/Boardphotos%2FCanary%20Linked.png?alt=media&token=7e99d61b-4421-4792-b6a9-6f1cb3cf47aa",
        creationTime: ""
      },
      imageData: null,
      previewUrl: "",
      offerImageUrl: null
    };
  },
  components: {
    YellowButton,
  },
  methods: {
    ...mapGetters("data", ["getOffers"]),
    addOffer() {
      this.offerData.creationTime = firebase.firestore.Timestamp.now();
      db.collection("offers").doc().set(
        {
          submitterId: firebase.auth().currentUser.uid,
          title: this.offerData.title,
          description: this.offerData.description,
          contactEmail: this.offerData.contactEmail,
          location: this.offerData.location,
          website: this.offerData.website,
          category: this.offerData.category,
          duration: this.offerData.duration,
          show: this.offerData.show,
          image: this.offerData.image,
          creationTime: this.offerData.creationTime
        }
      ).then(() => {
        this.storeImage();
      }).then(() => {
        this.$emit("forceRender");
        this.$emit("close");
        this.changeVisibility();
      });
    },
    changeVisibility() {
      const listOfId = [];
      db.collection("offers").orderBy("creationTime", "desc").get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
          };
          listOfId.push(data);
        });
      }).then(() => {
        db.collection("offers").doc(listOfId[9].id).update(
          {
            show: false
          }
        );
      });
    },
    previewImage(event) {
      this.picture = null;
      this.imageData = event.target.files[0];
      this.previewUrl = URL.createObjectURL(event.target.files[0]);
    },
    clearURL () {
      URL.revokeObjectURL(this.previewUrl);
    },
    storeImage() {
      // Si no se sube imagen, deja la que está por defecto. Si se sube imagen, la sube a firestore, coge la url y sustituye
      if (this.imageData != null) {
        let currentOfferId = "";
        db.collection("offers").where("creationTime", "==", this.offerData.creationTime)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              currentOfferId = doc.id;
            });
          }).then(() => {
            firebase.storage()
              .ref("offers/" + currentOfferId + "/offersPic.jpg")
              .put(this.imageData)
              .then(() => {
                firebase.storage()
                  .ref("offers/" + currentOfferId + "/offersPic.jpg").getDownloadURL().then(imgUrl => {
                    this.offerImageUrl = imgUrl;
                  }).then(() => {
                    db.collection("offers").doc(currentOfferId).update({
                      image: this.offerImageUrl
                    }
                    );
                  }).then(() => {
                    this.$emit("beforeCloseEdit");
                  }).then(() => {
                    this.$emit("close");
                  });
              });
          });
      }
    }
  },
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  overflow-y: auto;
  max-height: 640px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
