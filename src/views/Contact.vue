
<template>
  <div
    class="bg-cover pt-28"
    style="
      background-image: url(https://api.time.com/wp-content/uploads/2021/02/laptop-home-office.jpg);
    "
  >
    <div class="flex flex-col lg:flex-row justify-evenly m-auto">
      <form
        action=""
        class="bg-minionyellow shadow-2xl p-12 mt-12 mb-12 lg:w-2/6 rounded-lg"
        @submit="sendMail"
      >
        <p class="text-richblack text-xl lg:text-4xl font-bold">
          ¡Contáctanos!
        </p>
        <div class="flex relative bg-white items-center rounded mb-6 mt-8">
          <div class="flex justify-center p-4">
            <span
              class="flex items-center leading-normal bg-white rounded text-xl text-gray-900"
            >
              <i class="fas fa-user"></i>
            </span>
          </div>
          <Input
            class="form-control text-base lg:text-xl 2xl:text-2xl"
            type="text"
            placeholder="Nombre"
            v-model="messagesRef.name"
          />
        </div>
        <div>
            <p class="text-sm text-red-500 mb-2" v-if="errors.noName"> No ha introducido un Nombre</p>
            <p class="text-sm text-red-500 mb-2" v-if="errors.badName"> El Nombre debe tener entre 3 y 40 caracteres</p>
          </div>
        <div class="flex relative bg-white items-center rounded mb-6">
          <div class="flex justify-center p-4">
            <span
              class="flex items-center leading-normal bg-white rounded text-xl text-gray-900"
            >
              <i class="fas fa-at"></i>
            </span>
          </div>
          <Input
            class="form-control text-base lg:text-xl 2xl:text-2xl"
            type="Email"
            placeholder="Correo Electrónico"
            v-model="messagesRef.email"
          />
        </div>
        <div>
          <p class="text-sm text-red-500 mb-2" v-if="errors.noEmail"> No ha introducido un email</p>
          <p class="text-sm text-red-500 mb-2" v-if="errors.badEmail"> El email introducido no tiene el formato adecuado</p>
        </div>
        <div>
          <textarea
            class="resize border rounded-md form-control w-full h-80 text-base lg:text-xl 2xl:text-2xl"
            placeholder="Escribe tu texto aquí..."
            v-model="messagesRef.message"
          >
          </textarea>
        </div>
        <div>
          <p class="mt-1 text-sm text-red-500" v-if="errors.badMsg"> La descripción debe tener entre 70 y 1000 caracteres</p>
        </div>
        <div>
          <p class="alert alert-success font-bold" v-if="success && !error">
            Mensaje enviado correctamente.
          </p>
        </div>
        <div>
          <p class="alert alert-error font-bold" v-if="!success && error">
            Mensaje fallido.
          </p>
        </div>
        <div>
          <Button inputLogin="true" type="submit" text="Enviar" />
        </div>
        <p class="text-richblack font-bold mb-6">
          <a href="mailto:contacto@canarylinked.es"
            >O clikc aquí para escribirnos un correo</a
          >
        </p>
      </form>
      <div
        class="bg-minionyellow lg:w-2/6 p-12 mt-12 mb-12 rounded-lg shadow-2xl"
      >
        <p class="text-xl lg:4xl font-bold">
          Encuentranos en la siguiente dirección
        </p>
        <p class="text-base lg:3xl mt-4">Lunes - Viernes</p>
        <p class="text-base lg:3xl">9:00 - 13:00 y 16:00 - 20:00</p>
        <i class="mt-4 fas fa-map-marker-alt relative"></i>
        <p class="text-base lg:4xl mt-4">Santa Cruz de Tenerife 38002</p>
        <p class="text-base lg:4xl">Calle del Castillo, 13</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56123.50112761078!2d-16.321439977459857!3d28.457891355524527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cceccc254171%3A0x43111473d277e52e!2sSanta%20Cruz%20de%20Tenerife%2C%20Espa%C3%B1a!5e0!3m2!1ses!2suk!4v1617619172015!5m2!1ses!2suk"
          class="h-96 w-full shadow-2xl rounded mt-12"
          style="border: 0"
          width="300"
          height="500"
          allowfullscreen=";"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import db from "../components/firebaseInit.js";

export default {
  name: "Contact",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      messagesRef: {
        name: "",
        email: "",
        message: "",
      },
      success: false,
      error: false,
      errors: {
        noName: "",
        badName: "",
        noEmail: "",
        badEamil: "",
        noMsg: "",
        badMsg: ""
      }
    };
  },
  methods: {
    sendMail: function (e) {
      e.preventDefault();
      if (this.validateForm()) {
        db.collection("messages")
          .doc(this.messagesRef.name)
          .set({
            name: this.messagesRef.name,
            email: this.messagesRef.email,
            message: this.messagesRef.message,
            time: new Date(),
          })
          .then(() => {
            this.success = true;
          })
          .catch(() => {
            this.error = true;
          });
      }
    },
    checkInputs() {
      this.errors.noName = "";
      this.errors.badName = "";
      this.errors.noEmail = "";
      this.errors.badEmail = "";
      this.errors.noText = "";
      this.errors.badText = "";

      if (!this.messagesRef.name) {
        this.errors.noName = "error";
      }
      if (this.messagesRef.name.length < 3 || this.messagesRef.name.length > 40) {
        this.errors.badName = "error";
      }
      if (!this.messagesRef.email) {
        this.errors.noEmail = "error";
      }
      if (this.isEmailValid() === "invalidEmail") {
        this.errors.badEmail = "error";
      }
      if (!this.messagesRef.message) {
        this.errors.noMsg = "error";
      }
      if (this.messagesRef.message.length < 70 || this.messagesRef.message.length > 1000) {
        this.errors.badMsg = "error";
      }
    },

    isEmailValid () {
      const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return (reg.test(this.messagesRef.email)) ? "validEmail" : "invalidEmail";
    },

    validateForm() {
      this.checkInputs();
      if (!this.errors.noName && !this.errors.badName && !this.errors.noEmail && !this.errors.badEmail && !this.errors.noMsg && !this.errors.badMsg) {
        return true;
      } else {
        return false;
      }
    }
  },
};
</script>

<style>
input:focus,
input.form-control:focus {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

.bg-cover {
  background-size: cover;
}

.mapa {
  width: 100%;
  min-height: 100%;
}

input[type="text"].form-control {
  margin: 8px 0;
  display: inline-block;
}
</style>
