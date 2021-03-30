<template>
  <div>
      <p>Current page: {{ currentPage }}</p>
      <p>TotalPages : {{ totalPages }}</p>
      <div class="bg-cyberyellow m-auto flex flex-row justify-center space-x-3">
        <button @click="cambiarPagina(1)">
          {{ paginationAnchorTexts.first }}
        </button>
        <button @click="cambiarPagina(currentPage - 1)">
          {{ paginationAnchorTexts.prev }}
        </button>
        <button
          v-for="index in totalPages"
          :key="index"
          @click="cambiarPagina(index)"
        >
          {{ index }}
        </button>
        <button @click="cambiarPagina(currentPage + 1)">
          {{ paginationAnchorTexts.next }}
        </button>
        <button @click="cambiarPagina(totalPages)">
          {{ paginationAnchorTexts.last }}
        </button>
      </div>
      </div>
</template>

<script>
export default {
  name: "vPaginationSaul",
  data() {
    return {
      currentPage: 1,
      totalPages: 5,
      paginationAnchorTexts: { first: "<<", prev: "<", next: ">", last: ">>" },
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
