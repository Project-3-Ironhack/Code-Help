import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/router/HomePage";
import Signup from "@/router/Signup";
import Login from "@/router/Login";
import Dashboard from "@/router/Dashboard";
import Lesson from "@/router/Lesson";
import Account from "@/router/Account";
import TeacherAdmin from '@/router/TeacherAdmin'
// import Payment from '@/router/Payment'
import LessonSummary from '@/router/LessonSummary'

import api from "@/api/auth";


Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
      beforeEnter: (to, from, next) => {
        if (localStorage.token) next("/dashboard");
        else next();
      },
    },
    {
      path: "/signup",
      component: Signup,
      beforeEnter: (to, from, next) => {
      if (localStorage.token) next("/dashboard");
      else next();
      },
    },
    {
      path: "/login",
      component: Login,
      beforeEnter: (to, from, next) => {
      if (localStorage.token) next("/dashboard");
      else next();
      },
    },
    {
      path: "/dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/lesson',
      name: "Lesson",
      component: Lesson,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/account',
      component: Account,
      meta: {
        requiresAuth: true
      }
    },
    {
      path:'/admin',
      component: TeacherAdmin,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path:'/checkout',
    //   component: Payment,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path:'/lesson-summary',
      component: LessonSummary,
      meta: {
        requiresAuth: true
      }
    },
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
