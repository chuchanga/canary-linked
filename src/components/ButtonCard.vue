<template>
  <button
    class="bg-cyberyellow hover:bg-minionyellow text-black font-semibold py-2 px-4 border hover:border-transparent rounded focus:outline-none"
    :text="text"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ButtonCard",
  props: ["text"],
};
</script>
<style></style>
