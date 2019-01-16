import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentJWT: "",
    user: null,
  },

  getters: {
    jwt: state => state.currentJWT,
    jwtData: (state, getters) =>
      state.currentJWT ? JSON.parse(atob(getters.jwt.split(".")[1])) : null,
    jwtSubject: (state, getters) =>
      getters.jwtData ? getters.jwtData.sub : null,
    jwtIssuer: (state, getters) =>
      getters.jwtData ? getters.jwtData.iss : null,
    user: state => state.user
  },

  mutations: {
    setJWT(state, jwt) {
      // When this updates, the getters and anything bound to them updates as well.
      state.currentJWT = jwt;
    }
  },

  actions: {}
});
