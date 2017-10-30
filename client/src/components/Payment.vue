<template>
<!-- where does the id 'app' come from? -->
  <div id='app'> 

    <h1>Update your payment details, below</h1>

    <div>
    <form @submit.prevent="paymentUpdate">
      <label>Full name on card
        <input type="text" required v-model="nameOnCard">
      </label><br/>
      
      <label>Billing address
        <input type="text" required v-model="billingAddress">
      </label><br/>

      <label>City
        <input type="text" required v-model="city">
      </label><br/>

      <label>Postal code
        <input type="text" required v-model="postalCode">
      </label><br/>

      <label>Country
        <input type="text" required v-model="country">
      </label><br>
      <card class='stripe-card'
      :class='{ complete }'
      stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
      :options='stripeOptions'
      @change='complete = $event.complete'
    />
    <button class='pay-with-stripe'>Add payment details</button>
    <p v-if="okMessage">Update successful</p>
    <!-- <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Checkout</button> -->

    </form><br>
    </div>
  </div>
</template>
 
<script>
// import { stripeKey, stripeOptions } from './stripeConfig.json'
import { Card, createToken } from 'vue-stripe-elements'
import apiUsers from "@/api/users"
 
export default {
  data () {
    return {
        nameOnCard: '',
        billingAddress: '',
        city: '',
        postalCode: '',
        country: '',
        error: null,
        okMessage: false,

      // from stripe
      complete: false,

    //   stripeOptions: {
    //     // see https://stripe.com/docs/stripe.js#element-options for details
    //   }
    }
  },
 
  components: { Card },
 
  methods: {
    pay () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token))
    },
    paymentUpdate(){
    this.error = null
    const userId = this.$root.user._id;
    const nameOnCard = this.nameOnCard;
    const billingAddress = this.billingAddress;
    const city = this.city;
    const postalCode = this.postalCode;
    const country = this.country;

    const billingDetails = { nameOnCard, billingAddress, city, postalCode, country };
    apiUsers.paymentUpdate(userId, billingDetails)
    .then(data => {
        this.okMessage = true;
        setTimeout(() => this.okMessage = false, 5000);
    }).catch(err => {
        this.error = error.response;
    })
    },
  },

  created(){
    const userId = this.$root.user._id;

    apiUsers.getStudentById(userId).then(user => {
      this.nameOnCard = user.nameOnCard;
      this.billingAddress = user.billingAddress;
      this.city = user.city;
      this.postalCode = user.postalCode;
      this.country = user.country;
    });
  },
      
}
</script> 
 
<style>
.stripe-card {
  width: 300px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
</style> 