 <template>
  <div>
    <div
      class="bg-cover bg-center h-auto text-richblack py-24 px-10 object-fill"
      style="
        background-image: url(https://www.eluniversal.com.mx/sites/default/files/2016/02/29/tecnologia_oficina.jpg);
      "
    >
      <div class="md:w-1/2 mt-24 space-y-8">
        <p class="text-3xl font-bold">
          Bienvenido a nuestra sección de Tablón de Ofertas y proyectos
        </p>
        <p class="text-2xl mb-10 leading-none space-y-8">
          Encuentra tu oportunidad con nosotros
        </p>
        <div>
          <a
            href="/contact"
            class="bg-cyberyellow py-4 px-8 text-richblack font-bold uppercase text-xs rounded hover:bg-minionyellow"
            >Contact us</a
          >
        </div>
      </div>
    </div>
    <ul class="flex flex-col 2xl:flex-row list-none cursor-pointer">
      <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <a
          class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
          v-on:click="toggleTabs(1)"
          v-bind:class="{
            'text-black bg-cyberyellow': openTab !== 1,
            'text-white bg-goldenrod': openTab === 1,
          }"
        >
          <p class="text-xl 2xl:text-4xl p-12 italic semi-bold">Ofertas</p>
        </a>
      </li>
      <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
        <a
          class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
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
          <BoardOffer></BoardOffer>
        </div>
        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
          <BoardProyect></BoardProyect>
        </div>
      </div>
    </div>
    <Help></Help>
    <Footer></Footer>
  </div>
</template>

<script>
import BoardOffer from "../views/BoardOffer.vue";
import BoardProyect from "../views/BoardProyect.vue";
import Help from "../components/Help.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Board",
  components: {
    BoardProyect,
    BoardOffer,
    Help,
    Footer,
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
