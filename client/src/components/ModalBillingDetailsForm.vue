<template>
    <div class="modal-card">
        <section class="modal-card-body">
            <h3>Before we get started...</h3>
            <p>We need you to enter your payment details</p>

        </section>
    </div>
</template>

<script>
import apiUsers from "@/api/users"


export default {
    data() {
        return {
        token: '',
        error: null,
        okMessage: false,

      // from stripe
      complete: false,

        };
    },
    methods: {
    },
  created(){
    const userId = this.$root.user._id;

  setTimeout(()=>{

    this.$checkout.open({
        name: 'Add your payment details',
        currency: 'USD',
        amount: 99999,
        token(token) {
          console.log('this is the token',token);

          // apiUsers.paymentUpdate(userId, token)
          //   .then(data => {
          //     console.log('testing token')
          //       this.okMessage = true;
          //       setTimeout(() => this.$parent.close(), 1000);
          //   }).catch(err => {
          //       this.error = error.response;
          //   })

          //   this.$checkout.close();
        } 
      });

    }, 2000);

      // this.$checkout.close() is also available.
   
  },
}
</script>

<style>
    .modal-card{
        border-radius: 8px;
    }
</style>
