import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkTheme: false,
  },
  mutations: {
    SET_DARK_THEME(state, payload) {
      state.darkTheme = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
