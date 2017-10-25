<template>
  <div id="app">
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        Code Help
      </router-link>
      <router-link class="navbar-item" v-if="$root.user" to="/account">
        Your Account
      </router-link>
      <a class="navbar-item" v-if="$root.user" @click.prevent="logout" href="#">
        Logout
      </a>
    </div>
  </nav>
  <section class="content">
    <router-view/>
  </section>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
        <strong>Code Help</strong> by Stuart & Thibaut.
        </p>
      </div>
    </div>
  </footer>
  </div>
</template>

<script>
import api from "@/api/auth"

export default {
  name: 'app',
  methods: {
    logout() {
      api.logout(this.$root);
      this.$router.push('/');
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
