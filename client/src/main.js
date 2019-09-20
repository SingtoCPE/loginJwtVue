import Vue from "vue";
import App from "./App.vue";
import router from './route/index';
import auth from './utils/auth';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.getToken()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() 
  }
})
export default router

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");