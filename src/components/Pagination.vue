<template>
  <div class="flex justify-center my-8">
    <!--p class="justify-items-center">Estás en la página: {{ currentPage }}</p-->

    <div
      class="mb-8 flex flex-row lg:h-12 font-medium rounded-full bg-cyberyellow"
    >
      <div
        class="w-12 p-2 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full font-bold hover:bg-red-100"
        @click="changePage(1)"
      >
        {{ paginationAnchorTexts.first }}
      </div>
      <div
        v-if="currentPage > 1"
        @click="changePage(currentPage - 1)"
        class="w-12 p-2 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full font-bold hover:bg-red-100"
      >
        {{ paginationAnchorTexts.prev }}
      </div>

      <div
        class="w-12 p-2 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full font-bold bg-cyberyellow text-black hover:bg-minionyellow"
        v-for="index in totalPages"
        :key="index"
      >
        <div
          v-if="index == currentPage"
          class="text-white font-bold"
          @click="changePage(index)"
        >
          {{ index }}
        </div>
        <div v-else @click="changePage(index)">{{ index }}</div>
      </div>
      <div
        class="w-12 p-2 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full font-bold"
      >
        ....
      </div>
      <div
        class="w-12 p-2 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full font-bold hover:bg-red-100"
        v-if="currentPage < totalPages"
        @click="changePage(currentPage + 1)"
      >
        {{ paginationAnchorTexts.next }}
      </div>
      <div
        class="w-12 p-2 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full font-bold hover:bg-red-100"
        @click="changePage(totalPages)"
      >
        {{ paginationAnchorTexts.last }}
      </div>
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
