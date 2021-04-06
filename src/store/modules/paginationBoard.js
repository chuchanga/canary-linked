import db from "../../components/firebaseInit.js";
export default {
  namespaced: true,
  state: {
    currentPage: 1,
    totalPages: 3,
    cardsPerPages: 6,
    paginationAnchorTexts: { first: "<<", prev: "<", next: ">", last: ">>" },
    show: true,
    arrayBoard: [],
  },
  mutations: {
    CHANGE_PAGE(state, index) {
      state.currentPage = index;
      const n = state.cardsPerPages;
      console.log("Elementos" + state.arrayBoard.length);
      for (let i = 0; i < state.arrayBoard.length; i++) {
        if ((i >= ((index - 1) * n)) && (i < ((index - 1) * n + n))) {
          state.arrayBoard[i].show = true;
        } else state.arrayBoard[i].show = false;
        console.log("Elementos" + state.arrayBoard[i].show);
      }
    },
    SET_CARD(state, card) {
      state.arrayBoard = card;
      // State.totalPages = card.length / 3;
    }
  },
  actions: {
    changePage(context, index) {
      context.commit("CHANGE_PAGE", index);
    },
    fetchCards(context) {
      db.collection("arrayBoard").get().then(querySnapshot => {
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
