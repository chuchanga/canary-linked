<template>
    <button
      class="w-10 h-10 pt-3 bg-bluejeans hover:bg-capriblue text-culturedwhite rounded-full flex justify-center align-middle focus:outline-none"
      title="Ver"
      @click="onClick">
      <slot> <i class="far fa-eye"></i> </slot>
    </button>
</template>

<script>
export default {
  name: "ViewButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style></style>
