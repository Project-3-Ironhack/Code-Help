import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/router/HomePage";
import Signup from "@/router/Signup";
import Login from "@/router/Login";
import Dashboard from "@/router/Dashboard";
import api from "@/api/auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    api.checkUser(router.app.$root);
    if (!router.app.$root.user) {
      return next({
        path: "/login",
        query: {
          redirect: encodeURIComponent(to.fullPath)
        }
      });
    }
  }
  next();
});

export default router;
