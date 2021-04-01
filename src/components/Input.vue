<template>
  <input
    :type="type"
    class="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative text-xl outline-none"
    :placeholder="placeholder"
    :v-model="uvemodel"
  />
</template>

<script>
export default {
  name: "Input",
  props: ["placeholder", "type", "uvemodel"]
};
</script>

<style></style>
