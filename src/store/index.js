import Vue from "vue";
import Vuex from "vuex";
import pagination from "./modules/pagination.js";
import animation from "./modules/animation.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    pagination,
    animation,
  }
});

store.dispatch("pagination/fetchCards");

export default store;
