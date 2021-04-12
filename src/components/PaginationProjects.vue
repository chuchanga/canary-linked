<template>
  <div class="flex flex-col items-center my-12">
    <!--p class="justify-items-center">Estás en la página: {{ currentPage }}</p-->
    <div class="flex text-black">
      <div class="flex h-12 font-medium rounded-full bg-cyberyellow">
        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
          @click="changePageProjects(1)"
        >
          {{ paginationAnchorTexts.first }}
        </div>
        <div
          v-if="currentPage > 1"
          @click="changePageProjects(currentPage - 1)"
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
        >
          {{ paginationAnchorTexts.prev }}
        </div>

        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-cyberyellow text-gray-500 active"
          v-for="index in totalPagesProjects"
          :key="index"
        >
          <div
            v-if="index == currentPage"
            class="text-black"
            @click="changePageProjects(index)"
          >
            {{ index }}
          </div>
          <div v-else @click="changePageProjects(index)">{{ index }}</div>
        </div>
        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
        >
          ....
        </div>
        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
          v-if="currentPage < totalPagesProjects"
          @click="changePageProjects(currentPage + 1)"
        >
          {{ paginationAnchorTexts.next }}
        </div>
        <div
          class="w-12 md:flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
          @click="changePageProjects(totalPagesProjects)"
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
    ...mapState("paginationBoard", ["currentPage"]),
    ...mapState("paginationBoard", ["totalPagesProjects"]),
    ...mapState("paginationBoard", ["paginationAnchorTexts"]),
  },
  methods: {
    ...mapActions("paginationBoard", ["changePageProjects"]),
  },
};
</script>
