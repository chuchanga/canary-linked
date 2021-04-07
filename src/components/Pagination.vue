<template>
  <div class="flex flex-col items-center my-12">
<<<<<<< HEAD
    <!--p class="justify-items-center">Estás en la página: {{ currentPage }}</p-->
=======
>>>>>>> new-feature
    <div class="flex text-black">
      <div class="flex h-12 font-medium rounded-full bg-cyberyellow">
        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
          @click="changePage(1)"
        >
          {{ paginationAnchorTexts.first }}
        </div>
        <div
          v-if="currentPage > 1"
          @click="changePage(currentPage - 1)"
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
        >
          {{ paginationAnchorTexts.prev }}
        </div>

        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-cyberyellow text-white active"
          v-for="index in totalPages"
          :key="index"
        >
          <div
            v-if="index == currentPage"
            class="text-black font-bold"
            @click="changePage(index)"
          >
            {{ index }}
          </div>
          <div v-else @click="changePage(index)">{{ index }}</div>
        </div>
        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
        >
          ....
        </div>
        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
          v-if="currentPage < totalPages"
          @click="changePage(currentPage + 1)"
        >
          {{ paginationAnchorTexts.next }}
        </div>
        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
          @click="changePage(totalPages)"
        >
          {{ paginationAnchorTexts.last }}
        </div>
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
