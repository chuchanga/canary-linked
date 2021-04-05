<template>
  <form class="mt-2 flex flex-col lg:w-1/2 w-8/12 p-8">
    <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 -mt-8">
      <div class="flex -mr-px justify-center w-15 p-4">
        <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <Input type="text" id="name" placeholder="Nombre" v-model="name" />
    </div>
    <div class="flex flex-wrap  w-full relative h-15 bg-white items-center rounded mb-6">
      <div class="flex -mr-px justify-center w-15 p-4">
        <span class="flex items-center leading-normal bg-white rounded rounded-r-none text-2xl px-3 whitespace-no-wrap text-gray-600">
          <i class="fas fa-user"></i>
        </span>
      </div>
      <Input type="text" id="surname" placeholder="Apellidos" v-model="surname" />
    </div>
    <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6">
      <div class="flex -mr-px justify-center w-15 p-4">
        <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
          <i class="fas fa-at"></i>
        </span>
      </div>
      <Input type="email" id="email" placeholder="Correo Electrónico" v-model="email" />
    </div>
    <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10">
      <div class="flex -mr-px justify-center w-15 p-4">
        <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
          <i class="fas fa-lock"></i>
        </span>
      </div>
        <Input type="password" id="password" placeholder="Contraseña" v-model="password" />
    </div>
    <BlueButton :onClick="register"> REGISTRAR CUENTA </BlueButton>
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
import db from "./firebaseInit.js";
import Input from "../components/Input.vue";
import BlueButton from "./BlueButton.vue";
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
      surname: ""
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
          userData => {
            db.collection("users").doc(userData.user.uid).set(
              {
                name: this.name,
                surname: this.surname,
                description: "",
                location: "",
                displayName: "",
                userType: "",
                website: "",
                bio: "",
              }
            );
            //  Alert(`Se creó una cuenta para el correo ${this.email}`);
            this.$router.go({ path: "/profile" });
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
    BlueButton
  }
};
</script>
<style scoped></style>
