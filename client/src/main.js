import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import loginedHome from './components/homePage/loginedHome.vue';
import loginEmployee from './components/loginPage/loginEmployee.vue';

Vue.use(VueRouter);

const routes = [
  {path:'/logined',component:loginedHome},
  {path:'/',component:loginEmployee},
];
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
