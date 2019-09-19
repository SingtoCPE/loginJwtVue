import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueLocalStorage from "vue-localstorage";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const endpointLogin = "http://localhost:3000/employee/login";

export const store = new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    setData(state, data) {
      state.data = data;
    }
  },
  actions: {
    async loginEmployee({ dispatch }, { user, password }) {
      const { data } = await axios({
        method: "post",
        url: endpointLogin,
        data: {
          user,
          password
        }
      });
      Vue.localStorage.set("AuthToken", data.token);
      if (data.token) {
        dispatch("logined", data.token);
      }
    },
    logined() {
      window.location.href = "http://localhost:8080/#/logined";
      alert('Login success !');
    }
  }
});
