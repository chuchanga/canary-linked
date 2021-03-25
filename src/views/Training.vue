<template>
  <div class="container m-auto">
    <Card></Card>
    <vPagination></vPagination>
  </div>
</template>
<script>
import vPagination from "../components/vPagination.vue";
import Card from "../components/Card.vue";

export default {
  name: "Training",
  components: {
    Card,
    vPagination,
  },
};
</script>
<style>
</style>
