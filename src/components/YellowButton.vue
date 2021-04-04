<template>
    <button class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded focus:outline-none" @click="onClick">
    <slot> YellowButton </slot>
    </button>
</template>

<script>
export default {
  name: "YellowButton",
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style></style>
