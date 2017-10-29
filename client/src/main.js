// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import api from "@/api/auth";
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import VueCodeMirror from 'vue-codemirror'
Vue.use(VueCodeMirror)

Vue.use(Buefy)
Vue.component('icon', Icon)

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
  data: {
    user: null
  },
  created() {
    api.checkUser(this.$root);
  }
});
