<template>
    <button
      class="w-10 h-10 bg-goldenrod hover:bg-cyberyellow text-richblack rounded-full justify-center align-middle focus:outline-none"
      title="Eliminar"
      @click="onClick">
      <slot> <i class="fas fa-trash-alt"></i> </slot>
    </button>
</template>

<script>
export default {
  name: "DeleteButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style></style>
