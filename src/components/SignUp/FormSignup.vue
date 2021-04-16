<template>
  <form class="flex flex-col p-8 w-4/6 md:w-4/6 lg:w-4/6">
    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white text-2xl text-gray-900"
        >
          <i class="fas fa-user"></i>
        </span>
      </div>
      <Input
        class="text-base lg:text-xl 2xl:text-2xl"
        type="text"
        id="name"
        placeholder="Nombre y Apellidos o Empresa"
        v-model="name"
      />
    </div>
    <!--<div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white rounded rounded-r-none text-2xl px-3 whitespace-no-wrap text-gray-600"
        >
          <i class="fas fa-user"></i>
        </span>
      </div>
      <Input
        type="text"
        id="surname"
        placeholder="Apellidos"
        v-model="surname"
      />
    </div>-->
    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white text-2xl text-gray-900"
        >
          <i class="fas fa-at"></i>
        </span>
      </div>
      <Input
        class="text-base lg:text-xl 2xl:text-2xl"
        type="email"
        id="email"
        placeholder="Correo Electrónico"
        v-model="email"
      />
    </div>
    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white text-2xl text-gray-900"
        >
          <i class="fas fa-lock"></i>
        </span>
      </div>
      <Input
        class="text-base lg:text-xl 2xl:text-2xl"
        type="password"
        id="password"
        placeholder="Contraseña"
        v-model="password"
      />
    </div>
    <div>
      <input
        type="radio"
        id="person"
        value="person"
        v-model="userType"
        class="mx-2 text-bluejeans text-base lg:text-xl 2xl:text-2xl"
      />
      <label class="text-richblack font-semibold mr-2" for="person"
        >Persona</label
      >
      <input
        type="radio"
        id="entity"
        value="entity"
        v-model="userType"
        class="mx-2 text-bluejeans text-base lg:text-xl 2xl:text-2xl"
      />
      <label class="text-richblack font-semibold" for="entity">Empresa</label>
    </div>
    <BlueButton :onClick="register"> REGISTRAR CUENTA </BlueButton>
    <div class="m-auto -mt-4">
      <router-link
        to="/login"
        class="m-auto text-base text-black text-right leading-normal hover:underline mb-2 -mt-8"
        >Ya estoy registrado, quiero iniciar sesión
      </router-link>
    </div>
  </form>
</template>
<script>
// Import Button from "../components/Button.vue";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebaseInit.js";
import Input from "../Input.vue";
import BlueButton from "../Button/BlueButton.vue";
export default {
  name: "LoginForm",
  /* Props: {
    onClick: {
      type: Function,
      required: true
    }
  }, */
  data() {
    return {
      email: "",
      password: "",
      name: "",
      userType: "",
    };
  },
  methods: {
    // Este método crea un usuario en firebase auth con el email y passwd que pasemos en los inputs
    register(e) {
      console.log(this.email);
      console.log(this.password);
      console.log(firebase);

      e.preventDefault();
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (userData) => {
            db.collection("users")
              .doc(userData.user.uid)
              .set({
                name: this.name,
                description: "",
                location: "",
                displayName: "",
                userType: this.userType,
                website: "",
                savedOffers: [],
                savedProjects: [],
              })
              .then(() => {
                this.$router.go({ path: "/profile" });
              });
          },
          (err) => {
            alert(err.message);
          }
        );
    },
  },
  components: {
    // Button,
    Input,
    BlueButton,
  },
};
</script>
<style scoped>
input:focus,
input.form-control:focus {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
