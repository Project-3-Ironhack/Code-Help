<template>
  <div id="app">
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <router-link class="navbar-item" to="/">
        Code Help
      </router-link>

      <router-link class="navbar-item account" v-if="$root.user" to="/account">
        {{userName}}'s Account
      </router-link>

      <!-- <router-link class="navbar-item" to="/lesson">
        Lesson
      </router-link> -->

      <a class="navbar-item" v-if="$root.user" @click.prevent="logout" href="#">
        Logout
      </a>

    </div>
  </nav>

<!-- how does router-view work? -->
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
import apiUsers from "@/api/users"

export default {
  data(){
    return {
      name: '',
    };
  },
  name: 'app',
  methods: {
    logout() {
      api.logout(this.$root);
      this.$router.push('/');
    },
  },
  computed: {
    userName: function () {
      const userId = this.$root.user._id;
      apiUsers.getTeacherById(userId)
      .then(user => {
        this.name = user.name;
      });
      return this.name.charAt(0).toUpperCase()+this.name.slice(1);
    }
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

.navbar {
  margin-bottom: 2%;
}

.account{
  text-transform: capitalize;
}
</style>
