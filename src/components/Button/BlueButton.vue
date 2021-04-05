<template>
    <button class="bg-bluejeans hover:bg-capriblue py-4 text-center w-full px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20" @click="onClick">
    <slot> BlueButton </slot>
    </button>
</template>

<script>
export default {
  name: "BlueButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style></style>
