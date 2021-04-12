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
          <h1 class="font-bold text-6xl mb-4">Bienvenidos a Canary Linked</h1>
          <h2 class="font-bold text-3xl mb-12">
            Encuentra tu oportunidad con nosotros
          </h2>
        </div>
        <div class="absolute mt-48 overscroll-contain">
          <div class="h-8 w-8 arrow bounce hover:text-cyberyellow">
            <a class="fa fa-arrow-down fa-2x" href="#section"></a>
          </div>
        </div>
      </div>
    </div>
    <div>
      <HomeCard></HomeCard>
    </div>
    <p class="text-4xl lg:text-5xl mt-12 italic font-bold">
      Lo que dicen nuestros usuarios
    </p>
    <CarouselComment></CarouselComment>
    <p class="text-4xl lg:text-5xl mt-12 italic font-bold">Sobre Nosotros</p>
    <div
      class="bg-cyberyellow rounded-lg shadow-2xl m-12 flex flex-col justify-center p-8 2xl:flex-row"
    >
      <p
        class="text-2xl lg:text-5xl self-center flex flex-col w-4/5 m-12 break-words"
      >
        Con más de 10 años de experiencia CanaryLinked es la empresa líder en
        las islas canarias que facilita la incorporación de profesionales sin
        experiencia al mundo laboral.
        <router-link
          to="/about"
          class="text-2xl lg:text-4xl border-2 border-white text-richblack outline-none rounded-md px-4 py-3 transition duration-300 ease-in-out hover:bg-cyberyellow hover:text-white mr-6 shadow-2xl mt-8"
        >
          Conócenos
        </router-link>
      </p>
      <div>
        <img class="rounded-lg" src="../assets/photo_about.jpg" alt="" />
      </div>
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
