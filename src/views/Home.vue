<template>
  <div class="bg-cover mt-12">
    <div
      class="w-full h-screen bg-no-repeat bg-cover -mt-12"
      style="
        background-image: url('https://api.time.com/wp-content/uploads/2021/02/laptop-home-office.jpg');
      "
    >
      <div
        class="w-full h-screen bg-opacity-10 bg-richblack flex justify-center items-center relative"
      >
        <div class="mx-4 text-center text-white">
          <h1 class="font-bold text-5xl lg:text-7xl mb-4">
            Bienvenid@ a Canary Linked
          </h1>
          <h2 class="font-bold text-3xl lg:text-4xl mb-12 mt-8">
            Encuentra tu oportunidad con nosotros
          </h2>
        </div>
        <div class="absolute mt-96 lg:mt-48 overscroll-contain">
          <div class="h-8 w-8 arrow bounce hover:text-cyberyellow">
            <a class="fa fa-arrow-down fa-2x" href="#section"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <HomeCard class=""></HomeCard>
    </div>
    <p class="text-4xl lg:text-5xl mt-12 font-bold">
      Lo que dicen nuestros usuarios
    </p>
    <CarouselComment></CarouselComment>
    <p class="text-4xl lg:text-5xl mt-12 font-bold">Sobre Nosotros</p>
    <div
      class="bg-cyberyellow shadow-2xl m-12 flex flex-col justify-center p-8 lg:flex-row"
    >
      <p
        class="text-xl lg:text-4xl self-center flex flex-col lg:w-4/5 w-5/5 break-words"
      >
        CanaryLinked es la empresa líder en las islas canarias que facilita la
        incorporación de profesionales sin experiencia al mundo laboral.
        <router-link to="/about">
          <button
            class="focus:outline-none relative border-2 border-white rounded-md font-bold px-4 py-3 transition duration-300 ease-in-out hover:bg-cyberyellow hover:text-richblack shadow-2xl mt-8 text-2xl lg:text-3xl"
          >
            Conócenos
          </button></router-link
        >
      </p>
    </div>
    <div class="bg-cyberyellow mt-12">
      <Help></Help>
    </div>
  </div>
</template>

<script>
import CarouselComment from "../components/CarouselComment.vue";
import HomeCard from "../components/HomeCard.vue";
import Help from "../components/Help.vue";

export default {
  name: "Home",
  components: {
    CarouselComment,
    HomeCard,
    Help,
  },
  methods: {
    track() {
      this.$ga.page("/");
    },
  },
};
</script>

<style>
a {
  color: white;
  text-decoration: none;
}

.arrow {
  text-align: center;
  margin: 8% 0;
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-30px);
  }

  60% {
    transform: translateY(-15px);
  }
}
</style>
