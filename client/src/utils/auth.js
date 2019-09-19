import Vue from 'vue';
import VueLocalStorage from "vue-localstorage";

Vue.use();
Vue.use(VueLocalStorage);

export const auth = new auth({
  getAuth(){
    return Vue.localStorage.get('AuthToken');
  }
}) 

