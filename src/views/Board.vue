
  <template>
  <div>
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
  </div>
</template>

<script>
import BoardOffer from "../views/BoardOffer.vue";
import BoardProyect from "../views/BoardProyect.vue";

export default {
  name: "Board",
  components: {
    BoardProyect,
    BoardOffer,
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
