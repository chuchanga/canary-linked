<template>
  <div class="container m-auto" >
    <div v-for="card in arrayTraining" :key="card.id">
      <div v-if="card.show">
        <Card :title = "card.title" :description = "card.show" :id="card.id" :text="card.text"/>
      </div>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import Card from "../components/Card.vue";
import { mapState } from "vuex";

export default {
  name: "Training",
  components: {
    Pagination,
    Card
  },
  computed: {
    ...mapState("pagination", ["arrayTraining"]),
  },
};
</script>
