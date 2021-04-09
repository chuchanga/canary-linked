import Vue from "vue";
import Vuex from "vuex";
import pagination from "./modules/pagination.js";
import animation from "./modules/animation.js";
import paginationBoard from "./modules/paginationBoard.js";
import paginationproyect from "./modules/paginationproyect.js";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pagination,
    animation,
    paginationBoard,
    paginationproyect,
  }
});

store.dispatch("pagination/fetchCards");
store.dispatch("paginationBoard/fetchCards");
store.dispatch("paginationproyect/fetchCards");

export default store;
