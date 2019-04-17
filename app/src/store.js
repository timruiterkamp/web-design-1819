import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    time: 0,
    currentTime: 0
  },
  mutations: {
    setTime(state, payload) {
      state.time = payload;
    },
    setCurrentTime(state, payload) {
      state.currentTime = payload;
    }
  },
  actions: {}
});
