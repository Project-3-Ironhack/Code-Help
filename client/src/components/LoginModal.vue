<template>

<div class="modal-card">
  <section class="modal-card-body">

    <div class="field">
        <form @submit.prevent="login">
              
            <div class="field">
              <label class="label">Email address
                <div class="control has-icons-left">
                  <input class="input" type="email" required v-model="username">
                    <span class="icon is-small is-left">
                      <icon name="envelope"></icon>
                    </span>
                </div>
              </label>
            </div>

            <div class="field">
              <label class="label">Password
                <div class="control has-icons-left">
                  <input class="input" type="password" required v-model="password">
                    <span class="icon is-small is-left">
                      <icon name="lock"></icon>
                    </span>
                </div>
              </label>
            </div>

          <button class="button is-success" type="submit"  name="button">Log in</button>
        </form>
      <div class="error-message" v-if="error">
        {{ error }}
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
      username: this.payload || '',
      password: '',
      error: null,
    }
  },
  props: ['payload'],
  methods: {
    login() {
      this.error = null
      api.login(this.username, this.password, this.$root)
      .then(data => {
        this.$router.push('/dashboard')
      })
      .then(() => {
        document.getElementsById("html").removeAttribute("is-clipped")
      })
      .catch(err => {
        this.error = err.response.data.error
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
</style>
