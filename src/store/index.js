import Vue from "vue";
import Vuex from "vuex";
import product from "./product";

const vm = new Vue();
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    product: product(vm),
  },
});
