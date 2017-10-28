<template>
  <div id='app'>
    <h1>Enter your payment details, below</h1>
    
    <form @submit.prevent="login">
      <label>Full name on card
        <input type="text" required v-model="username">
      </label><br/>
      
      <label>Billing address
        <input type="text" required v-model="username">
      </label><br/>

      <label>City
        <input type="text" required v-model="username">
      </label><br/>

      <label>Postal code
        <input type="text" required v-model="username">
      </label><br/>

      <label>Country
        <input type="text" required v-model="username">
      </label><br>
      <card class='stripe-card'
      :class='{ complete }'
      stripe='pk_test_XXXXXXXXXXXXXXXXXXXXXXXX'
      :options='stripeOptions'
      @change='complete = $event.complete'
    />
    <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Checkout</button>
    </form><br>
  </div>
</template>
 
<script>
// import { stripeKey, stripeOptions } from './stripeConfig.json'
import { Card, createToken } from 'vue-stripe-elements'
 
export default {
  data () {
    return {
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
    }
  }
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