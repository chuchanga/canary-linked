import db from "../../components/firebaseInit.js";
export default {
  namespaced: true,
  state: {
    currentPage: 1,
    totalPages: 3,
    cardsPerPages: 6,
    paginationAnchorTexts: { first: "<<", prev: "<", next: ">", last: ">>" },
    show: true,
    filtering: false,
    offers: [],
    projects: [],
    itemsFiltered: [],
  },

  actions: {
    changePageOffers(context, index) {
      context.commit("CHANGE_PAGE_OFFERS", index);
    },
    changePageProjects(context, index) {
      context.commit("CHANGE_PAGE_PROJECTS", index);
    },

    fetchOffers(context) {
      db.collection("offers").get().then(querySnapshot => {
        const cardOffer = [];
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().title,
            description: doc.data().description,
            category: doc.data().category,
            duration: doc.data().duration,
            place: doc.data().place,
            show: doc.data().show,
            image: doc.data().image,
          };
          cardOffer.push(data);
        });
        context.commit("SET_OFFERS", cardOffer);
      });
    },
    fetchProjects(context) {
      db.collection("projects").get().then(querySnapshot => {
        const cardProject = [];
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().title,
            description: doc.data().description,
            category: doc.data().category,
            duration: doc.data().duration,
            place: doc.data().place,
            show: doc.data().show,
            image: doc.data().image,
          };
          cardProject.push(data);
        });
        context.commit("SET_PROJECTS", cardProject);
      });
    },
  },

  mutations: {
    CHANGE_PAGE_OFFERS(state, index) {
      state.currentPage = index;
      const n = state.cardsPerPages;

      for (let i = 0; i < state.offers.length; i++) {
        if ((i >= ((index - 1) * n)) && (i < ((index - 1) * n + n))) {
          state.offers[i].show = true;
        } else state.offers[i].show = false;
      }
    },
    CHANGE_PAGE_PROJECTS(state, index) {
      state.currentPage = index;
      const n = state.cardsPerPages;

      for (let i = 0; i < state.projects.length; i++) {
        if ((i >= ((index - 1) * n)) && (i < ((index - 1) * n + n))) {
          state.projects[i].show = true;
        } else state.projects[i].show = false;
      }
    },

    SET_OFFERS(state, cardOffer) {
      state.offers = cardOffer;
    },
    SET_PROJECTS(state, cardProject) {
      state.projects = cardProject;
    },

    FILTER(state, array) {
      // State.filtering = true;

      for (let i = 0; i < state.projects.length; i++) {
        if ((state.projects[i].description.toLowerCase().includes(array.search) ||
        state.projects[i].title.toLowerCase().includes(array.search))) {
          if (array.category !== "") {
            if (state.projects[i].category === array.category) {
              console.log(array.category + " en " + i);
              console.log("Encontrado: " + array.search + " en " + i);
              state.projects[i].show = true;
              console.log(state.projects[i].show);
            }
          } else {
            console.log("Encontrado: " + array.search + " en " + i);
            state.projects[i].show = true;
            console.log(state.projects[i].show);
          }
        } else {
          console.log("No encontrado: " + array.search + " en " + i);
          state.projects[i].show = false;
          console.log(state.projects[i].show);
        }
      }
      /*
      If (array.mood === "offers") {
        if (state.offers.category === array.category) {

        }
      } else if (array.mood === "projects") {

      } */
    },
    STOP_FILTER(state) {
      state.filtering = false;
    },
  },
};
