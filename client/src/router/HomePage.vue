<template>
<div>

  <div>
    <h1>Welcome to Code Help</h1>
    <h2>Learn to code with experts from around the world</h2>
  </div>

    <!-- <div>
    TESTING // Ready to get started? Click here to <button @click="!isShow = isShow">Sign Up</button><br>
    <signup v-show="isShow"></signup>
    </div> -->

  <div>
    Ready to get started? Click here to <span @click="viewSignupModal">Sign Up</span><br>
    <!-- Ready to get started? Click here to <router-link to="/signup">Sign Up</router-link><br> -->
    Already have an account? Click here to <span @click="viewLoginModal">Log In</span>
    <!-- Already have an account? Click here to <router-link to="/login">Log In</router-link> -->

  </div>
<br>
  <div class="columns">
    <div class="column is-one-third">
      <icon name="code" scale="3"></icon>
      <h4>Learn to code with experts from all over the world</h4>
    </div>

    <div class="column is-one-third">
      <icon width="100">
        <icon name="bug" scale="2"></icon>
        <icon name="ban" scale="3.5"></icon>

      </icon>
      <h4>Learn to code with experts from all over the world</h4>
    </div>

    <div class="column is-one-third">
      <icon name="graduation-cap" scale="3"></icon>
      <h4>Learn to code with experts from all over the world</h4>
    </div>
  </div>

        <!-- SIGN UP MODAL -->
        <b-modal :active.sync="isSignupModalActive" has-modal-card>
          <signup-modal @loginModal.capture="viewLoginModal"></signup-modal>
        </b-modal>

        <!-- LOG IN MODAL -->
        <b-modal :active.sync="isLoginModalActive" has-modal-card>
          <login-modal></login-modal>
        </b-modal>
<pre>{{test}}</pre>
</div>

</template>

<script>
import Signup from '@/router/Signup'
import SignupModal from "@/components/SignupModal";
import LoginModal from "@/components/LoginModal";


export default {
  components: {Signup, SignupModal, LoginModal},
  data(){
    return {
      test:'',
      isSignupModalActive: false,
      isLoginModalActive: false,
    }
  },
  methods: {
    viewSignupModal() {
      this.isSignupModalActive = true;
    },
    viewLoginModal() {
      this.isSignupModalActive = false;
      console.log('eeeeeeee');
      this.isLoginModalActive = true;
    },
  }
}
</script>

<style lang="css">
.column{
  border: 1px solid lightgrey;
  max-width: 30%;
  margin: auto;
}

</style>
