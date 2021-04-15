<template>
  <div
    class="w-10 m-8 -mt-4 cursor-pointer text-cyberyellow hover:text-minionyellow rounded-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <router-link to="/home">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </router-link>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Arrow",
};
</script>
<style></style>
