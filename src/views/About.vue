<template>
  <div class="pt-24">
    <Subheader
      class="textcontent-title"
      title="Conoce nuestra empresa, objetivos, metas y descubre quienes la componen"
    ></Subheader>
    <div
      class="bg-cyberyellow rounded-ls m-12 rounded-lg shadow-2xl flex flex-col justify-center p-8 2xl:flex-row"
    >
      <p
        class="text-xl md:text-4xl lg:text-5xl self-center flex flex-col w-4/5 m-12 break-words"
      >
        CanaryLinked es una plataforma que facilita la incorporación de profesionales
         sin experiencia en el Sector Creativo al mundo laboral en Canarias.
        <router-link
          to="/contact"
          class="mt-12 rounded-lg m-auto text-2xl lg:text-4xl focus:outline-none shadow-2xl text-decoration:none"
          text="Contáctanos"
        ></router-link>
      </p>
      <div>
        <img
          class="rounded-lg"
          src="../assets/photo_about.jpg"
          alt="Foto de grupo hablando entre ellos"
        />
      </div>
    </div>
    <div
      class="bg-cyberyellow m-12 p-12 rounded-lg shadow-2xl flex flex-col justify-center break-words lg:flex-row"
    >
      <div>
        <p class="font-bold text-3xl lg:text-5xl">Misión</p>
        <svg
          class="m-auto mt-24"
          width="92"
          height="95"
          viewBox="0 0 82 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              opacity="0.62"
              d="M50.1097 62.0663C58.3699 53.9131 57.6306 39.9836 48.4748 30.9332C39.3139 21.8852 25.2201 21.1575 16.9573 29.3144C8.70225 37.4612 -4.22044 64.8911 4.93922 73.9404C14.104 82.9908 41.8636 70.2194 50.1161 62.0713"
              fill="#FBED21"
            />
            <path
              opacity="0.62"
              d="M52.5159 53.7384C59.3757 46.9673 58.7633 35.397 51.1578 27.8792C43.5471 20.3639 31.8365 19.7602 24.9793 26.5351C18.1271 33.3011 7.38897 56.0862 14.997 63.5926C22.6089 71.1117 45.6714 60.5032 52.512 53.7346"
              fill="#FBED21"
            />
            <path
              d="M35.6431 45.6131C43.4472 53.3221 49.7625 61.455 54.2802 69.174C54.9105 65.2847 57.5538 59.1616 65.5308 46.3168C81.3748 20.8018 83.0071 2.56669 81.2748 0.863161C81.2225 0.808118 81.1682 0.754928 81.1121 0.703692C81.0589 0.648212 81.0038 0.594601 80.9468 0.542958C79.2248 -1.1745 60.7722 0.449302 34.932 16.0962C21.9286 23.976 15.7235 26.5819 11.7926 27.2071C19.6044 31.6634 27.8428 37.908 35.6444 45.6169"
              fill="#D1D2D3"
            />
            <path
              d="M76.1063 0.10379C68.766 0.717618 53.8484 4.63979 34.9269 16.0975C21.9235 23.9773 15.7184 26.5832 11.7875 27.2084C19.5993 31.6647 27.8377 37.9105 35.6393 45.6182C35.9673 45.9422 36.2696 46.2713 36.6002 46.594C34.1979 24.9391 58.3379 10.5756 76.105 0.10379"
              fill="#86A7AC"
            />
            <path
              d="M43.0205 66.6073C47.0078 70.5485 50.2404 74.7022 52.5479 78.651C52.8669 76.6614 54.2174 73.5303 58.293 66.9642C66.3905 53.9219 67.2323 44.6044 66.3406 43.7337C66.3149 43.7071 66.2816 43.6805 66.2573 43.6539C66.2329 43.6273 66.2035 43.5957 66.174 43.5717C65.2938 42.6958 55.8599 43.5248 42.6579 51.521C36.0121 55.5483 32.8397 56.881 30.8243 57.1986C34.8231 59.473 39.0333 62.6687 43.0205 66.6073Z"
              fill="#DE374B"
            />
            <path
              d="M53.4268 55.8014C50.0277 59.9501 47.437 65.2366 46.7541 70.6459C49.0437 73.3227 51.0155 76.0312 52.5466 78.6485C52.8657 76.6589 54.2161 73.5278 58.2917 66.9617C64.8851 56.3431 66.6634 48.195 66.6199 45.0638C62.2444 48.6734 57.0784 51.335 53.4268 55.8014Z"
              fill="#C5344D"
            />
            <path
              d="M12.1975 36.0197C16.1848 39.9608 19.4161 44.1159 21.7236 48.0634C22.0426 46.0738 23.3918 42.9427 27.4726 36.3766C35.5675 23.3343 36.4042 14.0168 35.5175 13.1448C35.4919 13.1169 35.4612 13.0916 35.433 13.065C35.4022 13.0372 35.3792 13.0068 35.3497 12.9828C34.4707 12.1057 25.0356 12.936 11.8336 20.9322C5.18906 24.9594 2.01669 26.2921 0 26.6098C3.99878 28.8866 8.21025 32.0823 12.1975 36.0197Z"
              fill="#DE374B"
            />
            <path
              d="M16.4564 27.1249C23.625 23.7343 31.1152 19.9032 35.5701 13.2372C35.5496 13.2093 35.5368 13.165 35.5368 13.165C35.4919 13.1182 35.4612 13.0929 35.433 13.065C35.4022 13.0372 35.3792 13.0068 35.3497 12.9828C34.4707 12.1057 25.0356 12.936 11.8336 20.9322C5.18906 24.9594 2.01669 26.2921 0 26.6098C2.69575 28.145 5.48247 30.1257 8.23459 32.4405C10.7223 30.3135 13.4875 28.5257 16.4564 27.1249Z"
              fill="#C5344D"
            />
            <path
              d="M67.9447 13.9978C70.1536 15.8785 71.9652 17.8985 73.299 19.8425C73.39 18.811 73.9653 17.1479 75.8167 13.6206C79.4926 6.61667 79.5682 1.79085 79.0788 1.37825C79.0674 1.36196 79.0519 1.34888 79.0339 1.34028C79.0202 1.32508 79.0052 1.31111 78.9891 1.29852C78.5022 0.880861 73.6847 1.65289 67.1887 6.24964C63.9267 8.56827 62.3456 9.36688 61.3232 9.60735C63.459 10.6312 65.7486 12.1196 67.9447 13.9978Z"
              fill="#243438"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="82" height="81" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="mt-8 m-8 text-xl lg:text-2xl">
         La misión de CanaryLinked es proporcionar oportunidades y
          conocimientos para que profesionales sin experiencia en el Sector Creativo lancen su carrera.
        </p>
      </div>
      <div>
        <p class="font-bold text-3xl lg:text-5xl">Valores</p>
        <svg
          class="m-auto mt-24"
          width="92"
          height="95"
          viewBox="0 0 92 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M71.212 5.9375H47.4375L62.5654 26.767L71.212 5.9375Z"
            fill="#FBED21"
          />
          <path
            d="M20.788 5.9375L29.4346 26.767L44.5625 5.9375H20.788Z"
            fill="#FBED21"
          />
          <path d="M46 13.8548L34.5 29.6875H57.5L46 13.8548Z" fill="#DE374B" />
          <path
            d="M75.9989 9.47403L67.6093 29.6875H87.6875L75.9989 9.47403Z"
            fill="#FBED21"
          />
          <path
            d="M16.0012 9.47403L4.13281 29.6875H24.3908L16.0012 9.47403Z"
            fill="#FBED21"
          />
          <path
            d="M26.3566 35.625H4.3125L44.3469 89.0625H44.4421L26.3566 35.625Z"
            fill="#C5344D"
          />
          <path
            d="M65.6435 35.625L47.5579 89.0625H47.6532L87.6875 35.625H65.6435Z"
            fill="#C5344D"
          />
          <path
            d="M59.1873 35.625H32.8127L46 74.2188L59.1873 35.625Z"
            fill="#DE374B"
          />
        </svg>
        <p class="m-8 text-xl lg:text-2xl">
          Creemos que obtenemos un mayor valor cuando trabajamos juntos.
          Creemos en el aprendizaje continuo y en el intercambio de nuestras
          percepciones e ideas.
        </p>
      </div>
    </div>
    <div class="text-2xl md:text-2xl lg:text-5xl">
      <div>
        <p class="font-bold mt-24 text-3xl lg:text-5xl">
          Conoce a nuestro equipo
        </p>
        <template>
          <div
            class="flex flex-col justify-center bg-cyberyellow rounded-lg mt-12 m-8 shadow-2xl lg:flex-row"
          >
            <figure
              v-for="photo of About"
              :key="photo"
              class="rounded-xl p-4 m-4"
            >
              <div class="text-center space-y-2">
                <blockquote>
                  <p class="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    {{ photo.description }}
                  </p>
                </blockquote>
              </div>
              <img
                class="mx-auto rounded-full mt-4"
                :src="photo.image"
                alt="Foto de integrante del equipo"
                width="400"
                height="400"
              />
              <div class="text-center mt-4">
                <blockquote>
                  <p class="text-2xl md:text-3xl lg:text-3xl">
                    {{ photo.name }}
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
          <Help></Help>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import saul from "../assets/saul.jpeg";
import lucia from "../assets/lucia.jpg";
import aythami from "../assets/aythami.jpg";
import Help from "../components/Help.vue";
import Subheader from "../components/Subheader.vue";
export default {
  name: "About",
  components: {
    Help,
    Subheader,
  },
  data() {
    return {
      About: [
        {
          description: "Orientadora",
          name: "Lucía Muñoz",
          image: lucia,
        },
        {
          description: "Desarrollador",
          name: "Saul Abreu",
          image: saul,
        },
        {
          description: "Redactor",
          name: "Aythami De Armas",
          image: aythami,
        },
      ],
    };
  },
};
</script>

<style scoped>
.textcontent-title {
  font-family: "Merriweather Sans", sans-serif;
  font-weight: 500;
}
</style>
