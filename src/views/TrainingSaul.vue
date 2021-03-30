<template>
  <div class="container m-auto">
      <Pagination />
      <Pagination> </Pagination>
      <BarMenu />
      <p>Estás en la página: {{ currentPage }}</p>
      <p>Estás en la página: {{ getCurrentPage }}</p>
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import BarMenu from "../components/BarMenu.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "TrainingSaul",
  components: {
    Pagination,
    BarMenu,
  },
  computed: {
    ...mapState("pagination", ["currentPage"]),
    ...mapGetters("pagination", ["getCurrentPage"]),
  },

  methods: {
    cambiarPagina: function (index) {
      this.currentPage = index;
      for (let i = 0; i < this.Training.length; i++) {
        if (i >= (index - 1) * 3 && i < (index - 1) * 3 + 3) {
          this.Training[i].show = true;
        } else this.Training[i].show = false;
        console.log(
          "El indice es: " +
            this.Training[i].title +
            " y su valor es " +
            this.Training[i].show
        );
      }
    },
  },
};
</script>
