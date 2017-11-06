<template>
  <div id="app">
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <router-link v-if="page !== '/lesson'" class="navbar-item" to="/">
        Code Help
      </router-link>

      <p v-if="page == '/lesson'" class="navbar-item" to="">
        Code Help
      </p>

      <router-link v-if="page !== '/lesson'" class="navbar-item" v-show="$root.user" to="/account">
        <span id="account">{{userName}}</span>'s Account
      </router-link>

      <router-link v-if="role==='Teacher'" class="navbar-item" to="/teach" v-show="$root.user">
        Teach
      </router-link>
  </div>
  
  <div class="navbar-menu">
    <div class="navbar-end">
      <p style="cursor: pointer;" class="navbar-item" v-if="page !== '/lesson'" v-show="$root.user" @click.prevent="logout" href="#">
        Logout
      </p>
      <p style="cursor: pointer;" class="navbar-item" v-if="page === '/'" @click.prevent="viewLoginModal">
        Login
      </p>
    </div>
  </div>
        <!-- LOG IN MODAL -->
        <b-modal :active.sync="isLoginModalActive" has-modal-card>
          <login-modal></login-modal>
        </b-modal>


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
import LoginModal from "@/components/LoginModal";


export default {
  components: {LoginModal},
  data(){
    return {
      name: '',
      role: '',
      id: '',
      page: '',
      isLoginModalActive: false,
    };
  },
  name: 'app',
  methods: {
    logout() {
      api.logout(this.$root);
      this.$router.push('/');
      var elem = document.querySelectorAll('[id=tagove-update-api-auth]');
      var elem2 = document.querySelectorAll('[class=activity_list_widget]');
      elem[0].remove();
      elem[1].remove();
      elem2[0].remove();
    },
    viewLoginModal() {
      this.isLoginModalActive = true;
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
    this.page = this.$route.path.split('',7).join('');
  },
  created(){
    this.page = this.$route.path.split('',7).join('');

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

#account{
  text-transform: capitalize;
}

.main-inner {
  padding-top: 3%;
  box-sizing: border-box;
  min-height: 800px;
}

.footer {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-container {
  padding-top: 5%;
}

</style>


