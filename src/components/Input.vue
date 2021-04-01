<template>
  <input
    :type="type"
    class="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative text-xl outline-none"
    :id="id"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "Input",
  props: ["type", "id", "placeholder", "value"],
};
</script>

<style></style>
