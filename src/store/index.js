import Vue from "vue";
import Vuex from "vuex";
import trialPackages from "./modules/trialPackages"; // trial package store

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    trialPackages
  }
});
