 <template>
  <div class="bg-gray-50">
    <Subheader
      class="textcontent-title"
      title="Bienvenidos a nuestro tablón de ofertas y proyectos"
      description="Encuentra lo que buscas"
      text="Contáctanos"
    ></Subheader>
    <!-- component -->
    <ul
      class="flex flex-col lg:flex-row list-none cursor-pointer textcontent-title"
    >
      <li class="flex-auto text-center">
        <a
          class="text-xs font-bold uppercase shadow-lg rounded block leading-normal"
          v-on:click="toggleTabs(1)"
          v-bind:class="{
            'text-black bg-cyberyellow': openTab !== 1,
            'text-white bg-goldenrod': openTab === 1,
          }"
        >
          <p class="text-xl lg:text-4xl p-12 semi-bold">Ofertas</p>
        </a>
      </li>
      <li class="flex-auto text-center">
        <a
          class="text-xs font-bold uppercase shadow-lg rounded block leading-normal"
          v-on:click="toggleTabs(2)"
          v-bind:class="{
            'text-black bg-cyberyellow': openTab !== 2,
            'text-white bg-goldenrod': openTab === 2,
          }"
        >
          <p class="text-xl lg:text-4xl p-12 semi-bold">Proyectos</p>
        </a>
      </li>
    </ul>
    <div class="flex flex-col md:flex-col m-12">
      <div class="tab-content tab-space">
        <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
          <div class="antialiased font-sans">
            <div
              class="container mx-auto px-4 sm:px-8 bg-minionyellow shadow-2xl m-12"
            >
              <FilterCard mymood="offers" :mybutton="seeMoreOffersButton" />
            </div>
          </div>
          <div v-if="filtering">
            <div v-if="noresults">No hay resultados</div>
            <div v-else>
              <div
                class="flex justify-center flex-col lg:grid grid-cols-3 gap-4"
              >
                <div v-for="card in itemsFiltered" :key="card.title">
                  <div v-if="card.show">
                    <CardBoard
                      :id="card.offerId"
                      :title="card.title"
                      :image="card.image"
                      :place="card.place"
                      :duration="card.duration"
                      :description="card.description"
                      mymood="offers"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="flex justify-center flex-col lg:grid grid-cols-3 gap-4">
              <div v-for="card in offers" :key="card.title">
                <div v-if="card.show">
                  <CardBoard
                    :id="card.offerId"
                    :title="card.title"
                    :image="card.image"
                    :place="card.place"
                    :duration="card.duration"
                    :description="card.description"
                    mymood="offers"
                  />
                </div>
              </div>
            </div>
            <div v-if="seeMoreOffersButton">
              <button
                @click="seeMoreOffers()"
                class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded focus:outline-none mt-4"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
          <div class="antialiased font-sans">
            <div
              class="container mx-auto px-4 sm:px-8 bg-minionyellow shadow-2xl m-12"
            >
              <FilterCard mymood="projects" :button="seeMoreProjectsButton" />
            </div>
          </div>
          <div v-if="filtering">
            <div v-if="noresults">No hay resultados</div>
            <div v-else>
              <div
                class="flex flex-col justify-center lg:grid grid-cols-3 gap-4"
              >
                <div v-for="card in itemsFiltered" :key="card.title">
                  <div v-if="card.show">
                    <CardBoard
                      :id="card.projectId"
                      :title="card.title"
                      :image="card.image"
                      :place="card.place"
                      :duration="card.duration"
                      :description="card.description"
                      mymood="projects"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="flex flex-col justify-center lg:grid grid-cols-3 gap-4">
              <div v-for="card in projects" :key="card.title">
                <div v-if="card.show">
                  <CardBoard
                    :id="card.projectId"
                    :title="card.title"
                    :image="card.image"
                    :place="card.place"
                    :duration="card.duration"
                    :description="card.description"
                    mymood="projects"
                  />
                </div>
              </div>
            </div>
            <div v-if="seeMoreProjectsButton">
              <button
                @click="seeMoreProjects()"
                class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded focus:outline-none mt-4"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Help></Help>
  </div>
</template>

<script>
import Subheader from "../components/Subheader.vue";
import FilterCard from "../components/FilterCard.vue";
import CardBoard from "../components/CardBoard.vue";
import Help from "../components/Help.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "Board",
  components: {
    Subheader,
    FilterCard,
    CardBoard,
    Help,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
    ...mapActions("paginationBoard", ["seeMoreOffers"]),
    ...mapActions("paginationBoard", ["seeMoreProjects"]),
  },
  computed: {
    ...mapState("paginationBoard", ["offers"]),
    ...mapState("paginationBoard", ["projects"]),
    ...mapState("paginationBoard", ["filtering"]),
    ...mapState("paginationBoard", ["noresults"]),
    ...mapState("paginationBoard", ["itemsFiltered"]),
    ...mapState("paginationBoard", ["seeMoreOffersButton"]),
    ...mapState("paginationBoard", ["seeMoreProjectsButton"]),
  },
};
</script>

<style scoped>
.textcontent-title {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 400;
}
</style>
