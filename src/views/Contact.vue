
    <template>
  <div>
    <div class="font sans lg:w-2/3 sm:h-2/3 m-auto flex justify-center">
      <form
        action=""
        class="bg-cyberyellow mt-48 flex flex-col lg:w-1/2 w-8/12 p-24 rounded-lg"
      >
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
          class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6"
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
          class="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-6"
        >
          <div class="flex -mr-px justify-center w-15 p-4">
            <span
              class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
            >
              <i class="fas fa-mobile-alt"></i>
            </span>
          </div>
          <Input type="text" placeholder="Número de contacto" />
        </div>

        <textarea
          class="resize border rounded-md"
          placeholder="Escribe tu texto aquí..."
        >
        </textarea>

        <Button inputLogin="true" text="Enviar" />
      </form>
    </div>
    <CargarMapa
      :configMapa="configMapa"
      apiKey="AIzaSyBG4fvaO5HOCYxVc8Xxcx_oje6pclos-Qk"
    >
      <template slot-scope="{ google, map }">
        <Marcadores
          v-for="marker in markers"
          :key="marker.id"
          :marker="marker"
          :google="google"
          :map="map"
        />
      </template>
    </CargarMapa>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";

export default {
  components: {
    Input,
    Button,
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
</style>
