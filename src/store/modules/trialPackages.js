// import json
// could be loaded over api with vue SSR or Prerendering
import trialPackages from "@/json/trialPackages.json";

// initial state
const state = () => ({
  trialPackages: trialPackages,
  selectedTrialPackage: null
});

// getters
const getters = {
  /**
   * @param {*} state
   * @returns {Array} trialPackages The list of trialPackages
   */
  trialPackages(state) {
    return state.trialPackages;
  },
  /**
   * @param {*} state
   * @returns {Number} id The id of the selected trialPackage
   */
  selectedTrialPackageId(state) {
    return state.selectedTrialPackage ? state.selectedTrialPackage.id : null;
  },
  /**
   * @param {*} state
   * @returns {Object} trialPackage The selected trialPackage
   */
  selectedTrialPackage(state) {
    return state.selectedTrialPackage;
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  /**
   * sets given trialPackage as selectedTrialPackage
   * @param {*} state
   * @param {*} trialPackage The trialPackge to select
   */
  setSelectedTrialPackage(state, trialPackage) {
    state.selectedTrialPackage = trialPackage;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
