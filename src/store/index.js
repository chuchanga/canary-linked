import Vue from "vue";
import Vuex from "vuex";
import pagination from "./modules/pagination.js";
import animation from "./modules/animation.js";
import paginationBoard from "./modules/paginationBoard.js";
import paginationProyect from "./modules/paginationProyect.js";
import filtercard from "./modules/filtercard";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pagination,
    animation,
    paginationBoard,
    paginationProyect,
    filtercard,
  }
});

store.dispatch("pagination/fetchCards");
store.dispatch("paginationBoard/fetchCards");
store.dispatch("paginationProyect/fetchCards");

export default store;
