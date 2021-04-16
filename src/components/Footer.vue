 <template>
  <footer class="footer relative pt-1 border-b-2 border-yellow-500">
    <div class="container mx-auto px-6">
      <div class="sm:flex sm:mt-8">
        <div
          class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between"
        >
          <div class="text-lg lg:text-xl flex flex-col">
            <span class="font-bold text-cyberyellow uppercase mb-2"
              >Tablón Formativo</span
            >
            <span class="my-2"
              ><router-link
                to="/board"
                class="text-lg lg:text-xl text-culturedwhite hover:text-cyberyellow"
                >Ofertas</router-link
              ></span
            >
            <span class="my-2"
              ><router-link
                to="/board"
                class="text-culturedwhite text-lg lg:text-xl hover:text-cyberyellow"
                >Proyectos</router-link
              ></span
            >
          </div>
          <div class="flex flex-col">
            <span
              class="text-lg lg:text-xl font-bold text-cyberyellow uppercase mt-4 md:mt-0 mb-2"
              >Orientación Laboral</span
            >
            <span class="my-2"
              ><router-link
                to="/training"
                class="text-lg lg:text-xl text-culturedwhite hover:text-cyberyellow"
                >Orientación</router-link
              ></span
            >
            <span class="my-2"
              ><router-link
                to="/contact"
                class="text-culturedwhite text-lg lg:text-xl hover:text-cyberyellow"
                >Ayuda
              </router-link></span
            >
          </div>
          <div class="flex flex-col">
            <span
              class="text-lg lg:text-xl font-bold text-cyberyellow uppercase mt-4 md:mt-0 mb-2"
              >Contacto</span
            >
            <span class="my-2"
              ><router-link
                to="/contact"
                class="text-lg lg:text-xl text-culturedwhite text-md hover:text-cyberyellow"
                >Contacto</router-link
              ></span
            >
            <span class="my-2"
              ><router-link
                to="/about"
                class="text-lg lg:text-xl text-culturedwhite text-md hover:text-cyberyellow"
                >Sobre Nosotros</router-link
              ></span
            >
          </div>
          <div class="flex flex-col">
            <span
              class="text-lg lg:text-xl font-bold text-cyberyellow uppercase mt-4 md:mt-0 mb-2"
              >Síguenos</span
            >
            <div
              class="flex justify-center flex-col md:flex-row md:space-x-4 lg:space-x-8"
            >
              <span
                class="my-2 text-white hover:text-blue-500"
                style="font-size: 2rem"
                ><a href="https://twitter.com"
                  ><i class="fab fa-twitter-square"></i
                ></a>
              </span>
              <span
                class="my-2 text-white hover:text-blue-600"
                style="font-size: 2rem"
                ><a href="https://www.facebook.com/"
                  ><i class="fab fa-facebook"></i
                ></a>
              </span>
              <span
                class="my-2 text-white l hover:text-blue-500"
                style="font-size: 2rem"
                ><a href="https://es.linkedin.com/"
                  ><i class="fab fa-linkedin"></i
                ></a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
        <div class="sm:w-2/3 text-center py-6">
          <p class="text-sm text-cyberyellow font-bold mb-2">
            © 2020-2021 CanaryLinked Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>
<style>
.footer {
  background: rgba(8, 8, 8, 0.938);
}
</style>
