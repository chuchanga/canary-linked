<template>
    <button
      class="w-10 h-10 pt-3 bg-cyberyellow hover:bg-minionyellow text-richblack rounded-full flex justify-center align-middle focus:outline-none"
      title="Editar Oferta"
      @click="onClick">
      <slot> <i class="fas fa-edit"></i> </slot>
    </button>
</template>

<script>
export default {
  name: "EditButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style></style>
