<template>
  <form action="" class="mt-2 flex flex-col lg:w-1/2 w-8/12">
    <div
      class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6 pr-10"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
        >
          <i class="fas fa-at"></i>
        </span>
      </div>
      <Input type="email" placeholder="Email" />
    </div>
    <div
      class="flex flex-wrap  w-full relative h-15 bg-white items-center rounded mb-2"
    >
      <div class="flex -mr-px justify-center w-15 p-4">
        <span
          class="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
        >
          <i class="fas fa-lock"></i>
        </span>
      </div>
      <Input type="password" placeholder="Contraseña" />
      <div class="flex -mr-px">
        <span
          class="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
        >
        </span>
      </div>
    </div>

    <Button inputLogin="true" text="INICIAR SESIÓN" />

    <div class="flex justify-center flex-col -mt-8">
      <Button inputLogin="true" text="CONTINUAR CON GOOGLE" />
    </div>

    <div class="flex justify-center flex-col -mt-16">
      <Button inputLogin="true" text="CONTINUAR CON FACEBOOK" />
    </div>
    <a
      href="#"
      class="m-auto text-base text-black text-right leading-normal hover:underline mb-2 -mt-8"
      >¿No puedes iniciar sesión?</a
    >
    <Button text="REGISTRA NUEVA CUENTA" />
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
