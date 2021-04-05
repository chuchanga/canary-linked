
    <template>
  <div>
    <div class="font sans lg:w-2/3 sm:h-2/3 m-auto flex flex-col justify-center">
      <form
        action=""
        class="bg-cyberyellow mt-48 flex flex-col lg:w-1/2 w-8/12 p-24 rounded-lg"
      >
      <h1 class="text-black b">¡Nos pondremos en contacto con usted!</h1>
      <br>
      <br>
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
        <p><a href="mailto:contacto@canarylinked.es">O clikc aquí para escribirnos un correo</a></p>
      </form>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56123.50112761078!2d-16.321439977459857!3d28.457891355524527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cceccc254171%3A0x43111473d277e52e!2sSanta%20Cruz%20de%20Tenerife%2C%20Espa%C3%B1a!5e0!3m2!1ses!2suk!4v1617619172015!5m2!1ses!2suk"
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
