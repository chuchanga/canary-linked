<template>
  <div class="container m-auto">
    <Card></Card>
    <vPaginationSaul></vPaginationSaul>
  </div>
</template>
<script>
import vPaginationSaul from "../components/vPaginationSaul.vue";
import Card from "../components/Card.vue";
export default {
  name: "Training",
  components: {
    Card,
    vPaginationSaul,
  },
};
</script>
<style>
</style>
