import { createStore } from 'vuex'

export default createStore({
  state: {
    username: 'admin',
    password: 'admin',
    loginStatus: false,
    loginControlMessage: false,
  },
  mutations: {
    loginControl(state, [ username, password ]) {
      if(state.username == username && state.password == password) {
        state.loginStatus = true;
      } else {
        state.loginStatus = false;
        state.loginControlMessage = true;
      }
    },
    logout(state) {
      state.loginStatus = false;
    }
  },
  actions: {
    loginControl({ commit }, [ username, password ]) {
      commit('loginControl', [ username, password ]);
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    getUsername(state) {
      return state.username;
    },
    getPassword(state) {
      return state.password;
    },
    getLoginStatus(state) {
      return state.loginStatus
    },
    loginControlMessage(state) {
      return state.loginControlMessage
    },
  },
  modules: {
  }
})
