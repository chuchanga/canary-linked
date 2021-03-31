import Vue from "vue";
import Vuex from "vuex";
import pagination from "./modules/pagination.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pagination,
  }
});
