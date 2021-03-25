<template>
  <div>
    <p>Current page: {{ currentPage }}</p>
    <p>TotalPages : {{ totalPages }}</p>
    <v-pagination
      class="bg-cyberyellow m-auto flex flex-row justify-center space-x-3"
      v-model="currentPage"
      :page-count="totalPages"
      :labels="paginationAnchorTexts"
    ></v-pagination>
  </div>
</template>

<script>
import vPagination from "vue-plain-pagination";

export default {
  components: { vPagination },
  data() {
    return {
      currentPage: 1,
      totalPages: 20,
      paginationAnchorTexts: {
        first: "First",
        prev: "Previous",
        next: "Next",
        last: "Last",
      },
    };
  },
};
</script>
