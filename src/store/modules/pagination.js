import db from "../../components/firebaseInit.js";
export default {
  namespaced: true,
  state: {
    currentPage: 1,
    totalPages: 3,
    cardsPerPages: 6,
    paginationAnchorTexts: { first: "<<", prev: "<", next: ">", last: ">>" },
    arrayTraining: [],
    /*
    ArrayTraining: [
      { title: "1", description: "a", text: "1", id: "2", show: true},
      { title: "2", description: "b", text: "1", id: "2", show: true },
      { title: "3", description: "c", text: "1", id: "3", show: true },
      { title: "4", description: "d", text: "1", id: "4", show: false },
      { title: "5", description: "e", text: "1", id: "5", show: false },
      { title: "6", description: "f", text: "1", id: "6", show: false },
      { title: "7", description: "g", text: "1", id: "7", show: false },
      { title: "8", description: "h", text: "1", id: "8", show: false },
      { title: "9", description: "i", text: "1", id: "9", show: false },
      { title: "10", description: "j", text: "1", id: "10", show: false },
      { title: "11", description: "k", text: "1", id: "11", show: false },
      { title: "12", description: "l", text: "1", id: "12", show: false },
      { title: "13", description: "m", text: "1", id: "13", show: false },
      { title: "14", description: "n", text: "1", id: "14", show: false },
      { title: "15", description: "o", text: "1", id: "15", show: false },
    ], */
  },
  mutations: {
    CHANGE_PAGE(state, index) {
      state.currentPage = index;
      const n = state.cardsPerPages;
      console.log("Elementos" + state.arrayTraining.length);
      for (let i = 0; i < state.arrayTraining.length; i++) {
        if ((i >= ((index - 1) * n)) && (i < ((index - 1) * n + n))) {
          state.arrayTraining[i].show = true;
        } else state.arrayTraining[i].show = false;
        console.log("Elementos" + state.arrayTraining[i].show);
      }
    },
    CHANGE_POS(state, id) {
      state.arrayTraining[id].pos = !state.arrayTraining[id].pos;
    },
    SET_CARD(state, card) {
      state.arrayTraining = card;
      state.totalPages = Math.ceil(state.arrayTraining.length / state.cardsPerPages);
    }
  },
  actions: {
    changePage(context, index) {
      context.commit("CHANGE_PAGE", index);
    },
    fetchCards(context) {
      db.collection("arrayTraining").get().then(querySnapshot => {
        const card = [];
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().title,
            description: doc.data().description,
            text: doc.data().text,
            id: doc.data().id,
            show: doc.data().show,
            pos: doc.data().pos,
            url: doc.data().url,
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
