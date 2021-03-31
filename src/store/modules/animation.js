export default {
  namespaced: true,
  state: {
    choice: "",
  },
  mutations: {
    SET_ID(state, id) {
      state.choice = id;
    },
  },
  actions: {
    set_id(context, id) {
      context.commit("SET_ID", id);
      context.commit("pagination/CHANGE_POS", id, { root: true });
    },
  },
  getters: {
    getChoice(state) {
      return state.choice;
    }
  },
};
