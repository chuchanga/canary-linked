<template>
  <form class="mt-2 flex flex-col lg:w-1/2 w-8/12 p-8">
    <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 -mt-8">
      <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded">
        <div class="flex -mr-px justify-center w-15 p-4">
          <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
            <i class="fas fa-at"></i>
          </span>
        </div>
        <Input type="email" id="email" placeholder="Correo Electrónico" v-model="email" />
      </div>
    </div>
    <div class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10">
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
          <i class="fas fa-lock"></i>
        </span>
      </div>
        <Input type="password" id="password" placeholder="Contraseña" v-model="password" />
    </div>
    <BlueButton :onClick="login"> INICIAR SESIÓN </BlueButton>
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
import Input from "./Input.vue";
import BlueButton from "./BlueButton.vue";
export default {
  name: "Login",
  /* Props: {
    onClick: {
      type: Function,
      required: true
    }
  }, */
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    // Este método crea un usuario en firebase auth con el email y passwd que pasemos en los inputs
    login(e) {
      console.log(this.email);
      console.log(this.password);
      console.log(firebase);
      // Para probar aquí iba console.log("register");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log(user);
            alert(`Inició sesión como ${this.email}`);
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
