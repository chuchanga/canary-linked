 <template>
  <div class="bg-gray-50">
    <Subheader
      title="Bienvenidos a nuestro tablón de ofertas y proyectos"
      description="Encuentra lo que buscas"
      text="Contáctanos"
    ></Subheader>
    <!-- component -->

    <ul class="flex flex-col 2xl:flex-row list-none cursor-pointer">
      <li class="flex-auto text-center">
        <a
          class="text-xs font-bold uppercase shadow-lg rounded block leading-normal"
          v-on:click="toggleTabs(1)"
          v-bind:class="{
            'text-black bg-cyberyellow': openTab !== 1,
            'text-white bg-goldenrod': openTab === 1,
          }"
        >
          <p class="text-xl 2xl:text-4xl p-12 italic semi-bold">Ofertas</p>
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
          <p class="text-xl 2xl:text-4xl p-12 italic semi-bold">Proyectos</p>
        </a>
      </li>
    </ul>
    <div class="px-4 py-5 flex-auto">
      <div class="tab-content tab-space">
        <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
          <div class="antialiased font-sans">
      <div
        class="container mx-auto px-4 sm:px-8 bg-minionyellow shadow-2xl m-12"
      >
        <FilterCard mymood = "offers"/>
      </div>
    </div>
          <div v-if="filtering">
            <div class="flex px-16 justify-center flex-col lg:grid grid-cols-3 gap-4 mt-24">
          <div
        v-for="card in itemsFiltered"
        :key="card.title"
      >
        <div v-if="card.show">
          <CardBoard
            :title="card.title"
            :image="card.image"
            :place="card.place"
            :duration="card.duration"
            :description="card.description"
            />
        </div>
          </div>
          </div>
          </div>
        <div v-else>
          <div class="flex px-16 justify-center flex-col lg:grid grid-cols-3 gap-4 mt-24">
          <div
        v-for="card in offers"
        :key="card.title"
      >
        <div v-if="card.show">
          <CardBoard
            :title="card.title"
            :image="card.image"
            :place="card.place"
            :duration="card.duration"
            :description="card.description"
            />
        </div>
        </div>
          </div>
        </div>
        </div>
        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
        <div class="antialiased font-sans">
      <div
        class="container mx-auto px-4 sm:px-8 bg-minionyellow shadow-2xl m-12"
      >
        <FilterCard mymood="projects"/>
      </div>
    </div>
          <div v-if="filtering">
            <div class="flex px-16 justify-center flex-col lg:grid grid-cols-3 gap-4 mt-24">
          <div
        v-for="card in itemsFiltered"
        :key="card.title"
      >
        <div v-if="card.show">
          <CardBoard
            :title="card.title"
            :image="card.image"
            :place="card.place"
            :duration="card.duration"
            :description="card.description"
            />
        </div>
          </div>
          </div>
          </div>
        <div v-else>
          <div class="flex px-16 justify-center flex-col lg:grid grid-cols-3 gap-4 mt-24">
          <div
        v-for="card in projects"
        :key="card.title"
      >
        <div v-if="card.show">
          <CardBoard
            :title="card.title"
            :image="card.image"
            :place="card.place"
            :duration="card.duration"
            :description="card.description"
            />
        </div>
        </div>
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

import { mapState } from "vuex";

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
  },
  computed: {
    ...mapState("paginationBoard", ["offers"]),
    ...mapState("paginationBoard", ["projects"]),
    ...mapState("paginationBoard", ["filtering"]),
    ...mapState("paginationBoard", ["itemsFiltered"]),
  },
};
</script>
