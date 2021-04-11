
<template>
  <div
    class="flex flex-col lg:flex-row jutify-center bg-cover"
    style="
      background-image: url(https://api.time.com/wp-content/uploads/2021/02/laptop-home-office.jpg);
    "
  >
    <div
      class="font sans justify-center p-12 m-auto md:w-3/6 lg:w-2/6 2xl:w-2/6 mt-8"
    >
      <form
        action=""
        class="bg-minionyellow shadow-2xl p-8 rounded-lg"
        @submit="sendMail"
      >
        <p class="text-black text-xl lg:text-3xl font-bold">¡Contáctanos!</p>
        <div
          class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-4 mt-4"
        >
          <div class="flex -mr-px justify-center w-15 p-4">
            <span
              class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
            >
              <i class="fas fa-user"></i>
            </span>
          </div>
          <Input
            class="form-control"
            type="text"
            placeholder="Nombre"
            v-model="messagesRef.name"
          />
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

          <Input
            class="form-control"
            type="Email"
            placeholder="Correo Electrónico"
            v-model="messagesRef.email"
          />
        </div>

        <div class="">
          <textarea
            class="resize border rounded-md form-control w-full h-80"
            placeholder="Escribe tu texto aquí..."
            v-model="messagesRef.message"
          >
          </textarea>
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
          <Button inputLogin="true" type="submit " text="Enviar" />
        </div>

        <p>
          <a href="mailto:contacto@canarylinked.es"
            >O clikc aquí para escribirnos un correo</a
          >
        </p>
      </form>
    </div>

    <div class="flex flex-col justify-center m-auto">
      <div class="p-12 bg-minionyellow m-8 shadow-2xl">
        <p class="text-xl lg:4xl font-bold">
          Encuentranos en la siguiente dirección
        </p>
        <p class="text-base lg:3xl">Lunes - Viernes</p>
        <p class="text-base lg:3xl">9:00 - 13:00 y 16:00 - 20:00</p>
        <i class="mt-4 fas fa-map-marker-alt"></i>
        <p class="text-base lg:4xl mt-4">Santa Cruz de Tenerife 38002</p>
        <p class="text-base lg:4xl">Calle del Castillo, 13</p>
        <i class="fas fa-phone mt-8 text-base lg:4xl">922 27 04 65</i>
        <i class="fas fa-at mt-8 text-base lg:3xl">CanaryLinked@gmail.com</i>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56123.50112761078!2d-16.321439977459857!3d28.457891355524527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cceccc254171%3A0x43111473d277e52e!2sSanta%20Cruz%20de%20Tenerife%2C%20Espa%C3%B1a!5e0!3m2!1ses!2suk!4v1617619172015!5m2!1ses!2suk"
        class="shadow-2xl rounded"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=";"
        loading="lazy"
      ></iframe>
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
    };
  },
  methods: {
    sendMail: function (e) {
      e.preventDefault();
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
    },
    resetForm: function () {
      this.messagesRef = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style>
.bg-cover {
  background-size: cover;
}

.mapa {
  width: 100%;
  min-height: 100%;
}

.alert {
  padding: 0 10px;
}

.alert-success {
  color: #3be249;
}

.alert-error {
  color: #ff2121;
}

input[type="text"].form-control {
  margin: 8px 0;
  display: inline-block;
}
</style>
