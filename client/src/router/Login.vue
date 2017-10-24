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
    }
  },
  methods: {
    login() {
      api.login(this.username, this.password, this.$root)
      .then(data => {
        this.$router.push('/')
      });
    },
  },
}
</script>

<style lang="css">
</style>
