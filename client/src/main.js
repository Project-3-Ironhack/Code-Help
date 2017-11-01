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

import Meta from 'vue-meta'
Vue.use(Meta)

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash, lodash)

import VueStripeCheckout from 'vue-stripe-checkout';

const options = {
  key: 'pk_test_kZddkuEWh3ys5BWHKhM1fEtc',
  image: 'https://cdn.meme.am/images/100x100/15882140.jpg',
  locale: 'auto',
  currency: '$',
  billingAddress: true,
  panelLabel: 'Subscribe {{amount}}'
}
 
Vue.use(VueStripeCheckout, options);


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

// router.beforeEach((to, from, next) => {
//   console.log("testing the router")
//   next();
// })