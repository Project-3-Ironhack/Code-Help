<template>
  <div id="app">
    <nav>
      <a v-if="$root.user" @click.prevent="logout" href="#">Logout</a>
    </nav>
    <router-view/>
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
