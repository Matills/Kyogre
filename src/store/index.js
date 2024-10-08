import { createStore } from 'vuex'

const store = createStore({
  state: {
    userId: '',
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
  },
  actions: {
    login({ commit }, userId) {
      commit('setUserId', userId);
    },
  },
  getters: {
    getUserId(state) {
      return state.userId;
    },
  },
});

export default store;
