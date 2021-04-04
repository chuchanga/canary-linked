<template>
  <div>
      <p class="justify-items-center">Estás en la página: {{ currentPage }}</p>
      <div class="bg-cyberyellow m-auto flex flex-row justify-center space-x-3">
        <button @click="changePage(1)"> {{ paginationAnchorTexts.first }} </button>
        <button v-if="currentPage > 1" @click="changePage(currentPage - 1)"> {{ paginationAnchorTexts.prev }} </button>
        <div v-for="index in totalPages" :key="index" @click="changePage(index)">
          <button v-if="index==currentPage" class="text-color-black"> {{ index }} </button>
          <button v-else> {{ index }}</button>
        </div>
        <button v-if="currentPage < totalPages" @click="changePage(currentPage + 1)"> {{ paginationAnchorTexts.next }}</button>
        <button @click="changePage(totalPages)"> {{ paginationAnchorTexts.last }}</button>
       </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Pagination",
  computed: {
    ...mapState("pagination", ["currentPage"]),
    ...mapState("pagination", ["totalPages"]),
    ...mapState("pagination", ["paginationAnchorTexts"]),
  },
  methods: {
    ...mapActions("pagination", ["changePage"]),
  },
};
</script>
