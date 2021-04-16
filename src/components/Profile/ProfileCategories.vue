<template>
  <div class="category-container w-full h-auto">
    <ul class="mb-0 list-none grid grid-cols-2 pt-3 pb-4 cursor-pointer">
        <li class="-mb-px flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-black bg-cyberyellow hover:bg-minionyellow': openTab !== 1, 'text-white bg-goldenrod': openTab === 1}">
            Mis Ofertas de Trabajo
          </a>
        </li>
        <li v-if="userType==='person'" class="-mb-px flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-black bg-cyberyellow hover:bg-minionyellow': openTab !== 2, 'text-white bg-goldenrod': openTab === 2}">
           Mis proyectos Colaborativos
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-culturedwhite w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-2 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <div v-if="userType=='entity'" class="add-offer">
                <p class=""> Crear Nueva Oferta </p>
                <AddButton class="mt-2 mb-4" :onClick="showModalWindowOffer" />
                <add-offer v-if="showModalOffer" @close="showModalOffer = false" @forceRender="updateDisplay()">
                </add-offer>
              </div>
              <ProfileCardsDisplay :userType="userType" :display="'Ofertas'" :ownedCollection="'offers'" :savedCollection="'savedOffers'" :key="renderKey" @forceRender="updateDisplay()" />
            </div>
          </div>
          <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
            <div v-if="userType=='person'" class="add-project">
              <div class="flex flex-col items-center justify-center">
              <div class="mr-2 font-semibold mb-3">Crea un Nuevo Proyecto</div>
                <AddButton class="ml-2 mb-4" :onClick="showModalWindowProject" />
                </div>
                  <add-project v-if="showModalProject" @close="showModalProject = false" @forceRender="updateDisplay()">
                  </add-project>
            </div>
            <ProfileCardsDisplay :userType="userType" :display="'Proyectos'" :ownedCollection="'projects'" :savedCollection="'savedProjects'" :key="renderKey" @forceRender="updateDisplay()" />
          </div>

            </div>
          </div>
        </div>
</template>

<script>
import ProfileCardsDisplay from "./ProfileCardsDisplay.vue";
import AddButton from "../Button/AddButton.vue";
import AddOffer from "../AddOffer.vue";
import AddProject from "../AddProject.vue";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebaseInit.js";
export default {
  name: "ProfileCategories",
  components: {
    ProfileCardsDisplay,
    AddButton,
    AddOffer,
    AddProject
  },
  data() {
    return {
      openTab: 1,
      renderKey: 0,
      userType: "",
      showModalOffer: false,
      showModalProject: false
    };
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    },
    updateDisplay () {
      this.renderKey += 1;
    },
    showModalWindowOffer() {
      this.showModalOffer = true;
    },
    showModalWindowProject() {
      this.showModalProject = true;
    }
  },
  created () {
    const userId = firebase.auth().currentUser.uid;
    db.collection("users").doc(userId).get().then(doc => {
      this.userType = doc.data().userType;
    });
  },
};
</script>

<style scoped>
</style>
