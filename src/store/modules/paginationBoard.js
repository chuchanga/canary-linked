/* eslint-disable max-lines-per-function */
import db from "../../components/firebaseInit.js";
export default {
  namespaced: true,
  state: {
    currentPage: 1,
    cardsPerPages: 6,
    paginationAnchorTexts: { first: "<<", prev: "<", next: ">", last: ">>" },
    show: true,
    offers: [],
    projects: [],
    totalPagesOffers: 3,
    totalPagesProjects: 3,
    itemsFiltered: [],
    filtering: false,
    option: 0,
  },

  actions: {
    changePageOffers(context, index) {
      context.commit("CHANGE_PAGE_OFFERS", index);
    },
    changePageProjects(context, index) {
      context.commit("CHANGE_PAGE_PROJECTS", index);
    },

    fetchOffers(context) { // Faltar ordenar por fecha .orderBy()
      db.collection("offers").get().then(querySnapshot => {
        const cardOffer = [];
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().title,
            description: doc.data().description,
            category: doc.data().category,
            duration: doc.data().duration,
            place: doc.data().location,
            show: doc.data().show,
            image: doc.data().image,
          };
          cardOffer.push(data);
        });
        context.commit("SET_OFFERS", cardOffer);
      });
    },
    fetchProjects(context) { // Faltar ordenar por fecha .orderBy()
      db.collection("projects").get().then(querySnapshot => {
        const cardProject = [];
        querySnapshot.forEach(doc => {
          const data = {
            title: doc.data().title,
            description: doc.data().description,
            category: doc.data().category,
            duration: doc.data().duration,
            place: doc.data().location,
            show: doc.data().show,
            image: doc.data().image,
          };
          cardProject.push(data);
        });
        context.commit("SET_PROJECTS", cardProject);
      });
    },
    filter_card(context, array) {
      context.commit("GET_OPTION", array);
      context.commit("FILTER", array);
    },
    stop_filter(context, array) {
      context.commit("STOP_FILTER");
      if (array.mood === "projects") context.commit("CHANGE_PAGE_PROJECTS", 1);
      else context.commit("CHANGE_PAGE_OFFERS", 1);
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
      state.totalPagesOffers = Math.ceil(state.offers.length / state.cardsPerPages);
    },
    SET_PROJECTS(state, cardProject) {
      state.projects = cardProject;
      state.totalPagesProjects = Math.ceil(state.projects.length / state.cardsPerPages);
    },

    FILTER(state, array) {
      state.filtering = true;
      state.itemsFiltered.length = 0;
      if (array.mood === "projects") {
        switch (state.option) {
          case 0: // Mostrar todos (por defecto)
          default:
            state.filtering = false;
            break;
          case 1: // Filtrar solo por barra de búsqueda
            for (let i = 0; i < state.projects.length; i++) {
              if ((state.projects[i].description.toLowerCase().includes(array.search) || state.projects[i].title.toLowerCase().includes(array.search))) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 2: // Filtrar solo por ubicación
            for (let i = 0; i < state.projects.length; i++) {
              if (state.projects[i].place === array.place) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 3: // Filtrar por barra de búsqueda y por ubicación
            for (let i = 0; i < state.projects.length; i++) {
              if ((state.projects[i].description.toLowerCase().includes(array.search) ||
              state.projects[i].title.toLowerCase().includes(array.search)) &&
              state.projects[i].place === array.place) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 4: // Filtrar solo por duracion
            for (let i = 0; i < state.projects.length; i++) {
              if (state.projects[i].duration === array.duration) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 5: // Filtrar por barra de búsqueda y por duracion
            for (let i = 0; i < state.projects.length; i++) {
              if ((state.projects[i].description.toLowerCase().includes(array.search) ||
            state.projects[i].title.toLowerCase().includes(array.search)) &&
            state.projects[i].duration === array.duration) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 6: // Filtrar por ubicación y por duracion
            for (let i = 0; i < state.projects.length; i++) {
              if (state.projects[i].place === array.place &&
          state.projects[i].duration === array.duration) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 7: // Filtrar por barra de búsqueda, por ubicación y por duracion
            for (let i = 0; i < state.projects.length; i++) {
              if ((state.projects[i].description.toLowerCase().includes(array.search) ||
          state.projects[i].title.toLowerCase().includes(array.search)) &&
          state.projects[i].duration === array.duration &&
          state.projects[i].place === array.place) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 8: // Filtrar solo por categoría
            for (let i = 0; i < state.projects.length; i++) {
              if (state.projects[i].category === array.category) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 9: // Filtrar por categoría y por barra de búsqueda
            for (let i = 0; i < state.projects.length; i++) {
              if ((state.projects[i].description.toLowerCase().includes(array.search) ||
        state.projects[i].title.toLowerCase().includes(array.search)) &&
        state.projects[i].category === array.category) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 10: // Filtrar por categoría y por ubicación
            for (let i = 0; i < state.projects.length; i++) {
              if (state.projects[i].place === array.place &&
      state.projects[i].category === array.category) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 11: // Filtrar por categoría, por barra de búsqueda y por ubicación
            for (let i = 0; i < state.projects.length; i++) {
              if ((state.projects[i].description.toLowerCase().includes(array.search) ||
      state.projects[i].title.toLowerCase().includes(array.search)) &&
      state.projects[i].category === array.category &&
      state.projects[i].place === array.place) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 12: // Filtrar por categoría y por duración
            for (let i = 0; i < state.projects.length; i++) {
              if (state.projects[i].duration === array.duration &&
    state.projects[i].category === array.category) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 13: // Filtrar por categoría, por duración y por barra de búsqueda
            for (let i = 0; i < state.projects.length; i++) {
              if ((state.projects[i].description.toLowerCase().includes(array.search) ||
    state.projects[i].title.toLowerCase().includes(array.search)) &&
    state.projects[i].category === array.category &&
    state.projects[i].duration === array.duration) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 14: // Filtrar por categoría, por duración y por ubicación
            for (let i = 0; i < state.projects.length; i++) {
              if (state.projects[i].duration === array.duration &&
    state.projects[i].category === array.category &&
    state.projects[i].place === array.place) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
          case 15: // Filtrar por categoría, por duración, por ubicación y por barra de búsqueda
            for (let i = 0; i < state.projects.length; i++) {
              if ((state.projects[i].description.toLowerCase().includes(array.search) ||
  state.projects[i].title.toLowerCase().includes(array.search)) &&
  state.projects[i].category === array.category &&
  state.projects[i].duration === array.duration &&
  state.projects[i].place === array.place) {
                state.itemsFiltered.push(state.projects[i]);
              }
            }
            break;
        }
      } else if (array.mood === "offers") {
        switch (state.option) {
          case 0: // Mostrar todos (por defecto)
          default:
            state.filtering = false;
            break;
          case 1: // Filtrar solo por barra de búsqueda
            for (let i = 0; i < state.offers.length; i++) {
              if ((state.offers[i].description.toLowerCase().includes(array.search) || state.offers[i].title.toLowerCase().includes(array.search))) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 2: // Filtrar solo por ubicación
            for (let i = 0; i < state.offers.length; i++) {
              if (state.offers[i].place === array.place) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 3: // Filtrar por barra de búsqueda y por ubicación
            for (let i = 0; i < state.offers.length; i++) {
              if ((state.offers[i].description.toLowerCase().includes(array.search) ||
              state.offers[i].title.toLowerCase().includes(array.search)) &&
              state.offers[i].place === array.place) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 4: // Filtrar solo por duracion
            for (let i = 0; i < state.offers.length; i++) {
              if (state.offers[i].duration === array.duration) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 5: // Filtrar por barra de búsqueda y por duracion
            for (let i = 0; i < state.offers.length; i++) {
              if ((state.offers[i].description.toLowerCase().includes(array.search) ||
            state.offers[i].title.toLowerCase().includes(array.search)) &&
            state.offers[i].duration === array.duration) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 6: // Filtrar por ubicación y por duracion
            for (let i = 0; i < state.offers.length; i++) {
              if (state.offers[i].place === array.place &&
          state.offers[i].duration === array.duration) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 7: // Filtrar por barra de búsqueda, por ubicación y por duracion
            for (let i = 0; i < state.offers.length; i++) {
              if ((state.offers[i].description.toLowerCase().includes(array.search) ||
          state.offers[i].title.toLowerCase().includes(array.search)) &&
          state.offers[i].duration === array.duration &&
          state.offers[i].place === array.place) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 8: // Filtrar solo por categoría
            for (let i = 0; i < state.offers.length; i++) {
              if (state.offers[i].category === array.category) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 9: // Filtrar por categoría y por barra de búsqueda
            for (let i = 0; i < state.offers.length; i++) {
              if ((state.offers[i].description.toLowerCase().includes(array.search) ||
        state.offers[i].title.toLowerCase().includes(array.search)) &&
        state.offers[i].category === array.category) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 10: // Filtrar por categoría y por ubicación
            for (let i = 0; i < state.offers.length; i++) {
              if (state.offers[i].place === array.place &&
      state.offers[i].category === array.category) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 11: // Filtrar por categoría, por barra de búsqueda y por ubicación
            for (let i = 0; i < state.offers.length; i++) {
              if ((state.offers[i].description.toLowerCase().includes(array.search) ||
      state.offers[i].title.toLowerCase().includes(array.search)) &&
      state.offers[i].category === array.category &&
      state.offers[i].place === array.place) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 12: // Filtrar por categoría y por duración
            for (let i = 0; i < state.offers.length; i++) {
              if (state.offers[i].duration === array.duration &&
    state.offers[i].category === array.category) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 13: // Filtrar por categoría, por duración y por barra de búsqueda
            for (let i = 0; i < state.offers.length; i++) {
              if ((state.offers[i].description.toLowerCase().includes(array.search) ||
    state.offers[i].title.toLowerCase().includes(array.search)) &&
    state.offers[i].category === array.category &&
    state.offers[i].duration === array.duration) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 14: // Filtrar por categoría, por duración y por ubicación
            for (let i = 0; i < state.offers.length; i++) {
              if (state.offers[i].duration === array.duration &&
    state.offers[i].category === array.category &&
    state.offers[i].place === array.place) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
          case 15: // Filtrar por categoría, por duración, por ubicación y por barra de búsqueda
            for (let i = 0; i < state.offers.length; i++) {
              if ((state.offers[i].description.toLowerCase().includes(array.search) ||
  state.offers[i].title.toLowerCase().includes(array.search)) &&
  state.offers[i].category === array.category &&
  state.offers[i].duration === array.duration &&
  state.offers[i].place === array.place) {
                state.itemsFiltered.push(state.offers[i]);
              }
            }
            break;
        }
      }
    },
    STOP_FILTER(state) {
      state.filtering = false;
    },
    GET_OPTION(state, array) {
      console.log("Estoy en getOption");
      const category = array.category;
      const duration = array.duration;
      const place = array.place;
      const search = array.search;

      if (category === "Todos") {
        if (duration === "Todos") {
          if (place === "Todos") {
            if (search === "") {
              state.option = 0;
            } else state.option = 1;
          } else {
            if (search === "") {
              state.option = 2;
            } else state.option = 3;
          }
        } else {
          if (place === "Todos") {
            if (search === "") {
              state.option = 4;
            } else state.option = 5;
          } else {
            if (search === "") {
              state.option = 6;
            } else state.option = 7;
          }
        }
      } else {
        if (duration === "Todos") {
          if (place === "Todos") {
            if (search === "") {
              state.option = 8;
            } else state.option = 9;
          } else {
            if (search === "") {
              state.option = 10;
            } else state.option = 11;
          }
        } else {
          if (place === "Todos") {
            if (search === "") {
              state.option = 12;
            } else state.option = 13;
          } else {
            if (search === "") {
              state.option = 14;
            } else state.option = 15;
          }
        }
      }
      console.log("Option:" + state.option);
    },
  },
};
