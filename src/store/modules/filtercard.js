import db from "../../components/firebaseInit.js";
export default {
  namespaced: true,
  state: {
    category: "",
    duration: "",
    location: "",
    search: "",
  },
  mutations: {
    FILTER(state, array) {
      state.category = array[0].category;
      state.location = array[0].location;
      state.duration = array[0].duration;
      state.search = array[0].search;
      console.log(state.category);
      console.log(state.duration);
      console.log(state.location);
      console.log(state.search);
    },
    SET_CARD(state, card) {
      state.Board = card;
    },
  },
  actions: {
    filtercard(context, array) {
      context.commit("FILTER", array);
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
};
