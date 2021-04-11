export default {
  namespaced: true,
  state: {
    offers: {
      category: ["Educación", "Reponedor", "Vigilante", "Sociología"],
      duration: ["Tiempo completo", "Tiempo parcial", "Indefinido"],
      place: ["Tenerife", "Gran Canaria", "La Palma"],
    },
    projects: {
      category: ["Arte", "Música", "Literatura", "Diseño"],
      duration: ["Abril", "Mayo", "Junio"],
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
