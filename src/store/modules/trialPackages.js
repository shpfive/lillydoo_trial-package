import trialPackages from "@/json/trialPackages.json";

// initial state
const state = () => ({
  trialPackages: trialPackages,
  selectedTrialPackage: null
});

// getters
const getters = {
  trialPackages(state) {
    return state.trialPackages;
  },
  selectedTrialPackageId(state) {
    return state.selectedTrialPackage ? state.selectedTrialPackage.id : null;
  },
  selectedTrialPackage(state) {
    return state.selectedTrialPackage;
  }
};

// actions
const actions = {};

// mutations
const mutations = {
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
