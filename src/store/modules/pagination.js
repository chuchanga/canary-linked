export default {
  namespaced: true,
  state: {
    currentPage: 2,
    totalPages: 5,
    paginationAnchorTexts: { first: "First", prev: "Previous", next: "Next", last: "Last" },
    show: true,
  },
  mutations: {
    CHANGE_PAGE(state, index) {
      state.currentPage = index;
    },
  },
  actions: {
    changePage(context, index) {
      context.commit("CHANGE_PAGE", index);
    },
  },
  getters: {
    getCurrentPage(state) {
      return state.currentPage;
    }
  },
};
