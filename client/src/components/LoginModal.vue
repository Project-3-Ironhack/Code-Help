<template>

<div class="modal-card">
  <section class="modal-card-body">

    <div class="field" style="color: black"> Log in to get started...</div>

    <div class="field">
        <form @submit.prevent="login">
              
            <div class="field">
              <label class="label">Email address
                <div class="control has-icons-left">
                  <input class="input" type="email" required v-model="username" placeholder="The address you signed up with">
                    <span class="icon is-small is-left">
                      <icon name="envelope"></icon>
                    </span>
                </div>
              </label>
            </div>

            <div class="field">
              <label class="label">Password
                <div class="control has-icons-left">
                  <input class="input" type="password" required v-model="password" placeholder="8 characters, please!">
                    <span class="icon is-small is-left">
                      <icon name="lock"></icon>
                    </span>
                </div>
              </label>
            </div>

          <button class="button is-success" type="submit"  name="button">Log in</button>
        </form>
      <div class="error-message" v-if="error">
        {{error}}
      </div>
     </div>

  </section>
</div>

</template>

<script>

import api from '@/api/auth'


export default {
  data() {
    return {
      username: this.payload ? this.payload.payload1 : '',
      password: this.payload ? this.payload.payload2 : '',
      error: null,
    }
  },
  props: {
    payload: {type: Object,
          default: null}
  },
  created(){

    // this.error = null
    //   api.login(this.username, this.password, this.$root)
    //   .then(data => {
    //     console.log('this', this, 'this.parent', this.$parent)
    //     this.$parent.close();
    //     this.$router.push('/dashboard')
    //   })
    //   .then(() => {
    //     document.getElementsById("html").removeAttribute("is-clipped")
    //   })
    //   .catch(err => {
    //     this.error = err.response.data.error
    //   });

  },
  methods: {
    login() {
      api.login(this.username, this.password, this.$root)
      .then(data => {
        this.$parent.close();
        this.$router.push('/dashboard')
      })
      .then(() => {
        document.getElementsById("html").removeAttribute("is-clipped")
      })
      .catch(err => {
        this.error = err.response.data.error;
        console.log('the login error is...', this.error)
      });
    },
  },
}

</script>

<style>
    .modal-card{
        border-radius: 8px;
        width: 500px;
    }

    .error-message {
     color: salmon;
    }
</style>

<style scoped>
  .field {
    text-align: left;
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    lightgrey;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    lightgrey;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    lightgrey;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    lightgrey;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    lightgrey;
}
</style>
