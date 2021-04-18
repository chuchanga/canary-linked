<template>
<transition name="modal">
    <div class="modal-mask overflow-hidden">
      <div class="modal-wrapper lg:w-9/12 w-11/12">
        <div class="modal-container m-auto lg:w-9/12 w-11/12 pb-8 bg-culturedwhite">
          <div class="modal-header w-full h-3/5 p-4 mb-4 flex-row inline-flex bg-cyberyellow align-middle ">
              <div class="font-semibold text-lg justify-self-center mr-auto">{{title}}</div>
              <i @click="$emit('close')" class="cursor-pointer fas fa-times-circle text-richblack"></i>
          </div>
          <div class="modal-body w-full pl-5 pr-6 py-2 grid grid-cols-12">
              <div class="offer-description lg:col-span-9 col-span-12 h-auto ml-2 text-left p-4 border rounded border-gray-200 shadow-md">
                {{description}}
              </div>
              <div class="offer-data lg:col-span-3 lg:px-8 col-span-12 flex flex-col justify-start mt-6">
                <p class="text-richblack text-left justify-self-start text-lg lg:text-lg">
                  <i class="text-cyberyellow fas fa-map-marker-alt mr-2"></i>
                  {{ location }}
                </p>
                <p class="text-richblack text-left justify-self-start text-lg lg:text-lg">
                  <i class="text-cyberyellow far fa-calendar-alt mr-2"></i>
                  {{ duration }}
                </p>
                <p class="text-richblack text-left justify-self-start text-lg lg:text-lg">
                  <i class="text-cyberyellow fas fa-envelope mr-2"></i>
                  {{ contactEmail }}
                </p>
                <div v-if="cardType === 'offers'">
                  <YellowButton class="mt-8 w-4/5 self-center" :onClick="saveOffer"> Guardar oferta </YellowButton>
                </div>
                <div v-else-if="cardType === 'projects'">
                  <YellowButton class="mt-8 w-4/5 self-center" :onClick="saveProject"> Guardar proyecto </YellowButton>
                </div>
              </div>
          </div>
        <div class="modal-footer mt-8">
          </div>
      </div>
    </div>
    </div>
  </transition>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "./firebaseInit.js";
import YellowButton from "../components/Button/YellowButton.vue";
export default {
  props: ["id", "title", "description", "location", "duration", "image", "contactEmail", "cardType"],
  data() {
    return {
      userId: firebase.auth().currentUser.uid,
    };
  },
  components: {
    YellowButton,
  },
  created () {
  },
  methods: {
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
        console.log(userSavedProjects);
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
