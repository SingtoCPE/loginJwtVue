import Vue from "vue";
import App from "./App.vue";
import router from './route/index';
import auth from './utils/auth';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  console.log(auth.getAuth());
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('fucntion working');
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.getAuth()) {
      console.log('fucntion working');
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})
export default router

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
