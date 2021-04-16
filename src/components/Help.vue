<template>
  <div>
    <div>
      <div
        class="bg-fixed p-8 text-white"
        style="
          background-image: url(https://api.time.com/wp-content/uploads/2021/02/laptop-home-office.jpg);
        "
      >
        <p class="text-2xl lg:text-4xl m-8 font-bold">
          ¿Tienes alguna pregunta?
        </p>
        <p class="text-xl lg:text-4xl p-8 m-12 font-bold lg:break-words">
          No dudes en consultarnos tus dudas.
        </p>
        <router-link to="/contact">
          <button
            class="relative border-2 border-white rounded-md font-bold px-4 py-3 transition duration-300 ease-in-out hover:bg-cyberyellow hover:text-richblack shadow-2xl text-2xl lg:text-3xl"
          >
            Contáctanos
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Help",
  components: {},
};
</script>
 <style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css");
</style>
