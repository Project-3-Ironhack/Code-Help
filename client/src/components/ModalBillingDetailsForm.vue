<template>
    <div class="modal-card">
        <section class="modal-card-body">
            <h3>Before we get started...</h3>
            <p>We need you to enter your payment details</p>

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
    <p v-if="okMessage">Thank you!</p>
    <!-- <button class='pay-with-stripe' @click='pay' :disabled='!complete'>Checkout</button> -->

    </form><br>
    </div>
        </section>
    </div>
</template>

<script>
import apiUsers from "@/api/users"
import { Card, createToken } from 'vue-stripe-elements'



export default {
    components: {Card},

    data() {
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

        };
    },
    methods: {
    checkout() {
      // this.$checkout.close() is also available.
      this.$checkout.open({
        name: 'Shut up and take my money!',
        currency: 'USD',
        amount: 99999,
        token(token) {
          console.log(token)
        } 
      });
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
                setTimeout(() => this.$parent.close(), 1000);

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
    .modal-card{
        border-radius: 8px;
    }
</style>
