<template>
    <div class="modal-card">
        <section class="modal-card-body">

<div>
    <form @submit.prevent="signup">
    <input type="radio" id="student" value="Student" v-model="role">
    <label for="one">Student</label>
    <br>
    <input type="radio" id="teacher" value="Teacher" v-model="role">
    <label for="two">Teacher</label>
    <br>

      </label><br/>
      <label>Email address
        <input type="email" required v-model="username">
      </label><br/>
      <label>Name
        <input type="text" required v-model="name">
      </label><br/>
      <label>Password
        <input type="password" required v-model="password">
      </label><br/>
      <button type="submit"  name="button">Sign up</button>
      <!-- @click="$parent.close()" -->
    </form>
    <div class="error-message" v-if="error">
      {{ error }}
    </div>
    <!-- Already have an account? <router-link to="/login">Click here to log in.</router-link> -->
  </div>

        </section>
    </div>
</template>

<script>

import api from '@/api/auth'

export default {
  data() {
    return {
      role: '',
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
        role: this.role,
        username: this.username,
        name: this.name,
        password: this.password
      })
      .then(r => {
        let payload = this.username;
        this.$emit('loginModal', payload);
        console.log('emiting the username...', payload);
      })
      .catch(err => {
        this.error = err.response.data.error.message
      })
    }
  }
}

</script>

<style>
    .modal-card{
        border-radius: 8px;
    }

    .error-message {
     color: salmon;
    }
</style>
