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
        class="lg:text-xl 2xl:text-2xl"
        type="text"
        id="name"
        placeholder="Nombre y Apellidos o Empresa"
        v-model="name"
      />
    </div>
    <div>
        <p class="text-red-500 mb-2" v-if="errors.noName"> No ha introducido un Nombre</p>
        <p class="text-red-500 mb-2" v-if="errors.badName"> El Nombre debe tener entre 3 y 40 caracteres</p>
      </div>
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
    <div>
        <p class="text-red-500 mb-2" v-if="errors.noEmail"> No ha introducido un email</p>
        <p class="text-red-500 mb-2" v-if="errors.badEmail"> El email introducido no tiene el formato adecuado</p>
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
      <p class="text-red-500 mb-2" v-if="errors.noPassword"> No ha introducido una contraseña</p>
      <p class="text-red-500 mb-2" v-if="errors.badPassword"> La Contraseña introducida debe tener entre 6 y 20 caracteres</p>
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
    <div>
      <p class="text-red-500 mb-2" v-if="errors.noUserType"> No ha seleccionado el tipo de usuario</p>
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
      errors: {
        noName: "",
        badName: "",
        noEmail: "",
        badEmail: "",
        noPassword: "",
        noUserType: ""
      }
    };
  },
  methods: {
    // Este método crea un usuario en firebase auth con el email y passwd que pasemos en los inputs
    register(e) {
      e.preventDefault();
      if (this.validateForm()) {
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
      }
    },
    checkInputs() {
      this.errors.noName = "";
      this.errors.badName = "";
      this.errors.noEmail = "";
      this.errors.badEmail = "";
      this.errors.noPassword = "";
      this.errors.badPassword = "";
      this.errors.noUserType = "";

      if (!this.name) {
        this.errors.noName = "error";
      }
      if (this.name.length < 3 || this.name.length > 40) {
        this.errors.badName = "error";
      }
      if (!this.email) {
        this.errors.noEmail = "error";
      }
      if (this.isEmailValid() === "invalidEmail") {
        this.errors.badEmail = "error";
      }
      if (!this.password) {
        this.errors.noPassword = "error";
      }
      if (this.password.length < 6 || this.password.length > 20) {
        this.errors.badPassword = "error";
      }
      if (this.userType !== "person" || this.userType !== "entity") {
        this.errors.noUsertype = "error";
      }
    },

    isEmailValid () {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return (reg.test(this.email)) ? "validEmail" : "invalidEmail";
    },

    validateForm() {
      this.checkInputs();
      if (!this.errors.noName && !this.errors.badName && !this.errors.noEmail && !this.errors.noPassword && !this.errors.badPassword && !this.errors.badEmail && !this.errors.noUserType) {
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
