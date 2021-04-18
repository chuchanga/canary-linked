<template>
  <form class="flex flex-col p-4 w-4/6 md:w-4/6 lg:w-4/6">
    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white rounded text-2xl text-gray-900"
        >
          <i class="fas fa-at"></i>
        </span>
      </div>
      <Input
        class="focus:outline-none text-base lg:text-xl 2xl:text-2xl"
        type="email"
        id="email"
        placeholder="Correo Electrónico"
        v-model="email"
      />
    </div>
     <div>
        <p class="text-red-500 mb-2" v-if="errors.noEmail"> No ha introducido un email</p>
        <p class="text-red-500 mb-2" v-if="errors.badEmail"> El email introducido no tiene el formato adecuado</p>
      </div>
    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10"
    >
      <div class="flex justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white rounded text-2xl text-gray-900"
        >
          <i class="fas fa-lock"></i>
        </span>
      </div>
      <Input
        class="focus:outline-none text-base lg:text-xl 2xl:text-2xl"
        type="password"
        id="password"
        placeholder="Contraseña"
        v-model="password"
      />
    </div>
    <div>
      <p class="text-red-500" v-if="errors.noPassword"> No ha introducido una contraseña</p>
    </div>
    <BlueButton :onClick="login"> INICIAR SESIÓN </BlueButton>
    <div class="m-auto -mt-4">
      <router-link
        to="/signup"
        class="m-auto text-base text-black text-right leading-normal hover:underline mb-2"
        >No estoy registrado,¡quiero registrarme!
      </router-link>
    </div>
  </form>
</template>
<script>
// Import Button from "../components/Button.vue";
import firebase from "firebase/app";
import "firebase/auth";
import Input from "../Input.vue";
import BlueButton from "../Button/BlueButton.vue";
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
      password: "",
      errors: {
        noEmail: "",
        noPassword: "",
        badEmail: ""
      }
    };
  },
  methods: {
    // Este método crea un usuario en firebase auth con el email y passwd que pasemos en los inputs
    login(e) {
      e.preventDefault();
      if (this.validateForm()) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(
            (user) => {
              console.log(user);
              alert(`Inició sesión como ${this.email}`);
              this.$router.go({ path: "/profile" });
            },
            (err) => {
              alert(err.message);
            }
          );
      }
    },
    checkInputs() {
      this.errors.noEmail = "";
      this.errors.noPassword = "";
      this.errors.badEmail = "";

      if (!this.email) {
        this.errors.noEmail = "error";
      }
      if (!this.password) {
        this.errors.noPassword = "error";
      }
      if (this.isEmailValid() === "invalidEmail") {
        this.errors.badEmail = "error";
      }
    },

    isEmailValid () {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return (reg.test(this.email)) ? "validEmail" : "invalidEmail";
    },

    validateForm() {
      this.checkInputs();
      if (!this.errors.noEmail && !this.errors.noPassword && !this.errors.badEmail) {
        return true;
      } else {
        return false;
      }
    }
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
