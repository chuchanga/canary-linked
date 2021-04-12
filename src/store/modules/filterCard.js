export default {
  namespaced: true,
  state: {
    category: "",
    duration: "",
    location: "",
    search: "",
    mood: "",
  },
  mutations: {
    FILTER(state, array) {
      state.category = array.category;
      state.location = array.location;
      state.duration = array.duration;
      state.search = array.search;
      state.mood = array.mood;
      console.log(state.category);
      console.log(state.duration);
      console.log(state.location);
      console.log(state.search);
      console.log(state.mood);
    },
    SET_CARD(state, card) {
      state.Board = card;
    },
  },
  actions: {
    filtercard(context, array) {
      context.commit("FILTER", array);
      context.commit("paginationBoard/FILTER", array, { root: true });
      context.commit("paginationBoard/GET_OPTION", array, { root: true });
    },
    stopFilter(context, array) {
      context.commit("paginationBoard/STOP_FILTER", array, { root: true });
    },
  },
};
