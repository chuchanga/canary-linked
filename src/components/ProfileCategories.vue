<template>
  <div class="category-container w-full h-auto">
    <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row cursor-pointer">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-black bg-cyberyellow': openTab !== 1, 'text-white bg-goldenrod': openTab === 1}">
            Mis Ofertas de Trabajo
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-black bg-cyberyellow': openTab !== 2, 'text-white bg-goldenrod': openTab === 2}">
           Mis proyectos Colaborativos
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-culturedwhite w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
              <ProfileCardsDisplay :display="'Ofertas'" :ownCollection="'offers'" :savedCollection="'ownedOffers'" />
                </div>
              </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <p>
               Aquí iría la vista de los proyectos colaborativos
              </p>
              <!-- Descomentar cuando se haya añadido la funcionalidad de los proyectos /> -->
             <!-- <ProfileCardsDisplay :display="'Proyectos'" :ownCollection="'projects'" :savedCollection="'ownedProjects'" /> -->
            </div>
            </div>
          </div>
        </div>
</template>

<script>
import ProfileCardsDisplay from "../components/ProfileCardsDisplay.vue";

export default {
  name: "ProfileCategories",
  components: {
    ProfileCardsDisplay
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  },
};
</script>

<style scoped>
</style>
