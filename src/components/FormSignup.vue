<template>
  <form action="" class="mt-2 flex flex-col lg:w-1/2 w-8/12 p-8">
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
      <Input type="Email" placeholder="Correo Electrónico" />
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
      <Input type="password" placeholder="Contraseña" />
    </div>
    <Button inputLogin="true" text="REGISTRAR NUEVA CUENTA" />

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
import Button from "../components/Button.vue";
import Input from "../components/Input.vue";

export default {
  name: "Form",
  components: {
    Button,
    Input
  }
};
</script>
<style scoped></style>
