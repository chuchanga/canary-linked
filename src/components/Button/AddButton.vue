<template>
    <button
      class="w-10 h-10 bg-bluejeans hover:bg-capriblue text-white rounded-full inline-flex items-center focus:outline-none"
      title="Añadir Nueva Oferta"
      @click="onClick">
      <slot> <i class="m-auto inline-block fas fa-plus fa-2x"></i> </slot>
    </button>
</template>

<script>
export default {
  name: "AddButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style></style>
