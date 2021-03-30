<template>
  <div class="container m-auto">
    <Card></Card>
    <Pagination></Pagination>
  </div>
</template>
<script>
import Pagination from "../components/Pagination.vue";
import Card from "../components/Card.vue";
export default {
  name: "Training",
  components: {
    Card,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 5,
      paginationAnchorTexts: { first: "First", prev: "Previous", next: "Next", last: "Last" },
      show: true,
      Training: [
        { title: "1", description: "asdadad", text: "1", show: true },
        { title: "2", description: "rerter", text: "2", show: true },
        { title: "3", description: "rerter", text: "3", show: true },
        { title: "4", description: "asdadad", text: "4", show: false },
        { title: "5", description: "rerter", show: false },
        { title: "6", description: "rerter", show: false },
        { title: "7", description: "asdadad", show: false },
        { title: "8", description: "rerter", show: false },
        { title: "9", description: "rerter", show: false },
        { title: "10", description: "asdadad", show: false },
        { title: "11", description: "rerter", show: false },
        { title: "12", description: "rerter", show: false },
        { title: "13", description: "asdadad", show: false },
        { title: "14", description: "rerter", show: false },
        { title: "15", description: "rerter", show: false },
      ],
    };
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
