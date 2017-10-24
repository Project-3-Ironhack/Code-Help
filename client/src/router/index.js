import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/router/HomePage";
import Signup from "@/router/Signup";
import Login from "@/router/Login";

Vue.use(Router);

export default new Router({
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
    }
  ]
});
