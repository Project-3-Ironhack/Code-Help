<template>
  <div>
    <form @submit.prevent="signup">
      <label>Username
        <input type="text" required v-model="username">
      </label><br/>
      <label>Name
        <input type="text" required v-model="name">
      </label><br/>
      <label>Password
        <input type="password" required v-model="password">
      </label><br/>
      <button type="submit" name="button">Sign up</button>
    </form>
    Already have an account? <router-link to="/login">Click here to log in.</router-link>
  </div>
</template>

<script>

import api from '@/api/auth'

export default {
  data() {
    return {
      username: '',
      password: '',
      name: '',
      error: null,
    }
  },
  methods: {
    signup() {
      this.error = null
      api.signup({
        username: this.username,
        name: this.name,
        password: this.password
      }).then(() => {
        this.$router.push('/login')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
