import Vue from "vue";
import Vuex from "vuex";
import pagination from "./modules/pagination.js";
import animation from "./modules/animation.js";
import paginationBoard from "./modules/paginationBoard.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pagination,
    animation,
    paginationBoard,
  }
});

store.dispatch("pagination/fetchCards");
store.dispatch("paginationBoard/fetchCards");

export default store;
