/* eslint-disable  */
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    usersList: undefined,
    calculationsList: undefined,
    ratesList: undefined,
    tariffsList: undefined,
    isLoggedIn: false,
    loading: false,
    currentUser: null,
  },

  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user);
    },
    setUserList({ commit }, items) {
      commit("SET_USER_LIST", items);
    },
    calculationList({ commit }, items) {
      commit("CALCULATION_LIST", items);
    },
    rateList({ commit }, items) {
      commit("RATE_LIST", items);
    },
    tariffList({ commit }, items) {
      commit("TARIFF_LIST", items);
    },
    setLoading({ commit }, loadingState) {
      commit("SET_LOADING", loadingState);
    },

    logout({ commit }) {
      commit("LOGOUT", null);
    },
  },

  mutations: {
    SET_USER(state, user) {
      state.currentUser = user;
      state.isLoggedIn = true;
    },
    SET_USER_LIST(state, items) {
      state.usersList = items;
    },
    CALCULATION_LIST(state, items) {
      state.calculationsList = items;
    },
    RATE_LIST(state, items) {
      state.ratesList = items;
    },
    TARIFF_LIST(state, items) {
      state.tariffsList = items;
    },
    SET_LOADING(state, loadingState) {
      state.loading = loadingState;
    },
    LOGOUT(state) {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
  getters: {
    data: (state) => state,
  },
  modules: {},
});

//Action and Mutators
