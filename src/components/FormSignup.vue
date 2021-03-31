<template>
  <form class="mt-2 flex flex-col lg:w-1/2 w-8/12 p-8">
    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 -mt-8"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <i class="fas fa-user"></i>
        </span>
      </div>
      <Input type="text" placeholder="Nombre" />
    </div>

    <div
      class="flex flex-wrap  w-full relative h-15 bg-white items-center rounded mb-6"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white rounded rounded-r-none text-2xl px-3 whitespace-no-wrap text-gray-600"
        >
          <i class="fas fa-user"></i>
        </span>
      </div>
      <Input type="text" placeholder="Apellidos" />
    </div>

    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <i class="fas fa-at"></i>
        </span>
      </div>
      <!--<Input type="Email" placeholder="Correo Electrónico" uvemodel="email" />-->
      <input type="email" id="email" v-model="email">
    </div>

    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <i class="fas fa-lock"></i>
        </span>
      </div>
      <!--<Input type="password" placeholder="Contraseña" uvemodel="password" />-->
       <input type="password" id="password" v-model="password">
    </div>
    <!--<Button inputLogin="true" text="REGISTRAR NUEVA CUENTA" />-->
    <!--<BlueButton :onClick="register"> Register </BlueButton>-->
    <button v-on:click="register" class="bg-bluejeans hover:bg-capriblue py-4 text-center w-full px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20">Registrarse</button>
    <div class="m-auto -mt-4">
      <router-link
        to="/login"
        class="m-auto text-base text-black text-right leading-normal
        hover:underline mb-2 -mt-8"
        >Ya estoy registrado, quiero iniciar sesión
      </router-link>
    </div>
  </form>
</template>
<script>
// Import Button from "../components/Button.vue";
import firebase from "firebase/app";
import "firebase/auth";
import Input from "../components/Input.vue";
// Import BlueButton from "./BlueButton.vue";
export default {
  name: "Form",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // Este método crea un usuario en firebase auth con el email y passwd que pasemos en los inputs
    register(e) {
      console.log(this.email);
      console.log(this.password);
      console.log(firebase);
      // Para probar aquí iba console.log("register");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log(user);
            alert(`Se creó una cuenta para el correo ${this.email}`);
            this.$router.push("/home");
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  },
  components: {
    // Button,
    Input,
    // BlueButton
  }
};
</script>
<style scoped></style>
