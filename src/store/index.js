import Vue from "vue";
import Vuex from "vuex";

import animation from "./modules/animation.js";
import data from "./modules/data.js";
import filterCard from "./modules/filterCard";
import pagination from "./modules/pagination.js";
import paginationBoard from "./modules/paginationBoard.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    animation,
    data,
    filterCard,
    pagination,
    paginationBoard,
  }
});

store.dispatch("pagination/fetchCards");
store.dispatch("paginationBoard/fetchOffers");
store.dispatch("paginationBoard/fetchProjects");

export default store;
