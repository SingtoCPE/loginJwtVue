import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueLocalStorage from "vue-localstorage";
import auth from "@/utils/auth";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const endpointLogin = "http://localhost:3000/employee/login";
const endpointGet = "http://localhost:3001/employee";
const endpointDel = "http://localhost:3001/employee/del";
const endpointAdd = "http://localhost:3001/employee/add";

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
      auth.setToken(data.token);
      if (data.token) {
        window.location.href = "http://localhost:8080/#/mainpage";
        alert(data.resTextSuccess+' Welcome ' +data.userFormDB.name);
      } else if (data.resTextPassFailed) {
        alert(data.resTextPassFailed);
      } else {
        alert(data.resTextUserFailed);
      }
    },
    async getEmployee({ commit }) {
      const { data } = await axios({
        method: "get",
        url: endpointGet
      });
      commit("setData", data.map(data => data));
    },
    async delEmployee({ dispatch }, id) {
      await axios({
        method: "post",
        url: endpointDel,
        data: {
          id
        }
      });
      dispatch("getEmployee");
    },
    async addEmployee(
      { commit },
      { first_name, age, position, salary, phone }
    ) {
      await axios({
        method: "post",
        url: endpointAdd,
        data: {
          first_name,
          age,
          position,
          salary,
          phone
        }
      });
    },
    clearToken() {
      window.location.href = "http://localhost:8080/#/";
      Vue.localStorage.remove("AuthToken");
    }
  }
});
