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
    <div class="antialiased font-sans">
      <div
        class="container mx-auto px-4 sm:px-8 bg-minionyellow shadow-2xl m-12"
      >
        <div class="py-8">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">Filtro</h2>
          </div>
          <div class="my-2 space-x-8 flex sm:flex-row flex-col">
            <div class="space-x-8 flex flex-row mb-1 sm:mb-0">
              <div class="relative">
                <p class="font-bold">Categorias</p>
                <select
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option>Educación</option>
                  <option>Reponedor</option>
                  <option>Vigilante</option>
                </select>
              </div>
              <div class="relative">
                <p class="font-bold">Tiempo</p>
                <select
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option>Parcial</option>
                  <option>Completo</option>
                </select>
              </div>
              <div class="relative">
                <p class="font-bold">Lugar</p>
                <select
                  class="appearance-none h-full shadow-2xl rounded-lg block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                >
                  <option>Los Cristianos</option>
                  <option>Santa Cruz</option>
                </select>
              </div>
            </div>
            <div class="block relative mt-12">
              <span
                class="h-full absolute inset-y-0 left-0 flex items-center pl-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-current text-gray-500"
                >
                  <path
                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                  ></path>
                </svg>
              </span>
              <input
                placeholder="Search"
                class="appearance-none text-lg lg:text-xl block pl-8 pr-6 py-2 w-full bg-white placeholder-gray-400 text-richblack focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
              />
            </div>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-5 flex-auto">
      <div class="tab-content tab-space">
        <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
          <BoardOffer></BoardOffer>
        </div>

        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
          <BoardProyect></BoardProyect>
        </div>
      </div>
      <PaginationBoard></PaginationBoard>
    </div>
    <Help></Help>
  </div>
</template>

<script>
import BoardOffer from "../views/BoardOffer.vue";
import BoardProyect from "./BoardProyect.vue";
import PaginationBoard from "../components/PaginationBoard.vue";
import Help from "../components/Help.vue";
import Subheader from "../components/Subheader.vue";

export default {
  name: "Board",
  components: {
    BoardProyect,
    BoardOffer,
    Help,
    PaginationBoard,
    Subheader,
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
};
</script>
