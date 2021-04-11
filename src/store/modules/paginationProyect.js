import db from "../../components/firebaseInit.js";
export default {
  namespaced: true,
  state: {
    currentPage: 1,
    totalPages: 3,
    cardsPerPages: 6,
    paginationAnchorTexts: { first: "<<", prev: "<", next: ">", last: ">>" },
    show: true,
    Board: [],

  },
  mutations: {
    CHANGE_PAGE(state, index) {
      state.currentPage = index;
      const n = state.cardsPerPages;
      console.log("Elementos" + state.Board.length);
      for (let i = 0; i < state.Board.length; i++) {
        if ((i >= ((index - 1) * n)) && (i < ((index - 1) * n + n))) {
          state.Board[i].show = true;
        } else state.Board[i].show = false;
        console.log("Elementos" + state.Board[i].show);
      }
    },
    SET_CARD(state, card) {
      state.Board = card;
      // State.totalPages = card.length / 3;
    }
  },
  actions: {
    changePage(context, index) {
      context.commit("CHANGE_PAGE", index);
    },
    fetchCards(context) {
      db.collection("Board").get().then(querySnapshot => {
        const card = [];
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().title,
            description: doc.data().description,
            time: doc.data().time,
            place: doc.data().place,
            show: doc.data().show,
            image: doc.data().image,
          };
          card.push(data);
        });
        context.commit("SET_CARD", card);
      });
    },
  },
  getters: {
    getCurrentPage(state) {
      return state.currentPage;
    }
  },
};
