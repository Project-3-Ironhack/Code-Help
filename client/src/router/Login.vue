<template>
  <div>
    <form @submit.prevent="login">
      <label>Username
        <input type="text" required v-model="username">
      </label><br/>
      <label>Password
        <input type="password" required v-model="password">
      </label><br/>
      <button type="submit" name="button">Log in</button>
    </form>
    <div class="error-message" v-if="error">
      {{ error }}
    </div>
    Don't have an account? <router-link to="/signup">Click here to sign up.</router-link>
  </div>
</template>

<script>
import api from '@/api/auth'


export default {
  data() {
    return {
      username: '',
      password: '',
      error: null,
    }
  },
  methods: {
    login() {
      this.error = null
      api.login(this.username, this.password, this.$root)
      .then(data => {
        this.$router.push('/dashboard')
      }).catch(err => {
        this.error = err.response.data.error
      });
    },
  },
}
</script>

<style lang="css">
  .error-message {
    color: salmon;
  }
</style>
