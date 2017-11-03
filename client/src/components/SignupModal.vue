<template>
    <div class="modal-card">
        <section class="modal-card-body">

          <div class="field">
           <form @submit.prevent="signup">
            <div class="field">

                <div>
                  <span>I'm here to...&nbsp &nbsp &nbsp</span>
                    <input type="radio" id="student" value="Student" v-model="role">
                    <label class="is-size-6" for="student">Study</label>
                    &nbsp &nbsp &nbsp &nbsp
                    <input type="radio" id="teacher" value="Teacher" v-model="role">
                    <label class="is-size-6" for="teacher">Teach</label>
                </div>
              </div>

              <div class="field">
                <label class="label">Email address
                  <div class="control has-icons-left">
                    <input class="input" type="email" required v-model="username" placeholder="How do we get hold of you?">
                      <span class="icon is-small is-left">
                        <icon name="envelope"></icon>
                      </span>
                  </div>
                </label>
              </div>

              <div class="field">
                <label class="label">Name
                  <div class="control has-icons-left">
                    <input class="input" type="text" required v-model="name" placeholder="What people call you">
                      <span class="icon is-small is-left">
                      <icon name="user"></icon>
                      </span>
                  </div>
                </label>
              </div>

              <div class="field">
                <label class="label">Password
                  <div class="control has-icons-left">
                    <input class="input" type="password" minlength="8" required v-model="password" placeholder="8 characters or more, please!">
                      <span class="icon is-small is-left">
                        <icon name="lock"></icon>
                      </span>
                  </div>
                </label>
              </div>

                <button class="button is-success" type="submit"  name="button" style="font-weight: bold">Sign up</button>
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
        let payload1 = this.username;
        let payload2 = this.password;
        let payload = {payload1, payload2};
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
