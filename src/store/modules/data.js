export default {
  namespaced: true,
  state: {
    offers: {
      category: ["Sector Agrario", "Sector Digital", "Sector Comercial", "Sector Servicios"],
      duration: ["Tiempo completo", "Tiempo parcial", "Indefinido"],
      place: ["Tenerife", "Gran Canaria", "La Palma"],
    },
    projects: {
      category: ["Arte", "Música", "Literatura", "Diseño", "Naturaleza"],
      duration: ["Abril 2021", "Mayo 2021", "Junio 2021"],
      place: ["Tenerife", "Gran Canaria", "La Palma"],
    }
  },
  getters: {
    getOffers(state) {
      return state.offers;
    },
    getProjects(state) {
      return state.projects;
    }
  },
};
