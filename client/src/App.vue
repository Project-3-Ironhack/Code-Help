<template>
  <div id="app">
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <router-link v-if="page !== '/lesson/'" class="navbar-item" to="/">
        Code Help
      </router-link>

      <p v-if="page == '/lesson/'" class="navbar-item" to="">
        Code Help
      </p>

      <router-link v-if="page !== '/lesson/'" class="navbar-item account" v-show="$root.user" to="/account">
        {{userName}}'s Account
      </router-link>

      <router-link v-show="role==='Teacher'" class="navbar-item" to="/teach">
        Teach
      </router-link>

      <a v-if="page !== '/lesson/'" class="navbar-item" v-show="$root.user" @click.prevent="logout" href="#">
        Logout
      </a>

    </div>
  </nav>

<!-- how does router-view work? -->
  <section class="content main-inner">
    <router-view/>
  </section>

  <footer class="footer">
    <div class="container footer-container">
      <div class="content has-text-centered">
        <p>
        <strong>Code Help</strong> by Stuart & Thibaut // Get in touch if you're hiring
        </p>
        <icon name="heart"></icon>
        <p><a href="mailto:stuartogardner@gmail.com">stuartogardner@gmail.com</a> // <a href="mailto:thibaut.davoult@gmail.com">thibaut.davoult@gmail.com</a></p>
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
      role: '',
      id: '',
      page: '',
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
      if (this.$root.user) {
      const userId = this.$root.user._id
      this.id = userId
      apiUsers.getTeacherById(userId)
      .then(user => {
        this.name = user.name;
        this.role = user.role;
      });
      return this.name.charAt(0).toUpperCase()+this.name.slice(1);
      }
    },
  },
  beforeUpdate: function() {
    console.log("App.vue beforeUpdate")
    this.page = this.$route.path.split('',8).join('');
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
  position: fixed !important; top: 0; left: 0; right: 0; z-index: 10;
}

.account{
  text-transform: capitalize;
}

.main-inner {
  padding-top: 3%;
  box-sizing: border-box;
  min-height: 800px;
}

.footer {
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-container {
  padding-top: 5%;
}

</style>
