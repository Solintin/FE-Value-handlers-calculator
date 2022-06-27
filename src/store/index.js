/* eslint-disable  */
// import { createStore } from "vuex";

// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });

import { useStorage } from "@vueuse/core";
import {ref} from 'vue'
import axios from "axios";
//States..
export const GlobalState = useStorage("GlobalState", {
  savedData: [],
  usersList: undefined,
  calculationsList: undefined,
  ratesList: undefined,
  tariffsList: undefined,
  isLoggedIn: false,
  loading: false,
  currentUser: null,
});

export const loadingState = ref(GlobalState.value.loading) 

//Action and Mutators
export const useStore = () => {
  const saveUser = (user) => {
    GlobalState.value.currentUser = user;
    GlobalState.value.isLoggedIn = true;
  };

  const clearUser = () => {
    GlobalState.value = {};
  };

  const saveUserList = (items) => {
    GlobalState.value.usersList = items;
  };

  const calculationList = (items) => {
    GlobalState.value.calculationsList = items;
  };
  const rateList = (items) => {
    GlobalState.value.ratesList = items;
  };
  const tariffList = (items) => {
    GlobalState.value.tarrifsList = items;
  };

  const setLoading = (state) => {
    GlobalState.value.loading = state;
  };

  return {
    ...GlobalState.value,
    loadingState,
    saveUserList,
    calculationList,
    rateList,
    tariffList,
    saveUser,
    clearUser,
    setLoading,
  };
};
