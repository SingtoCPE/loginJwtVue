import Vue from "vue";
import Router from "vue-router";
import mainPage from "@/components/homePage/mainPage.vue";
import loginEmployee from "@/components/loginPage/loginEmployee.vue";
import addEmployee from "@/components/homePage/addEmployee.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "login", component: loginEmployee },
    { path: "/logined", name: "logined", component: mainPage },
    { path: "/add", name: "add", component: addEmployee }
  ]
});

