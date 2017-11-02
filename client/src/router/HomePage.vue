<template>
<div class="content">
  <section class="hero is-medium is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Code Help
        </h1>
        <h3 class="subtitle">
          Hop on a call with teachers from around the world
        </h3>
        <p class="button is-success is-medium" type="button" @click="viewSignupModal">Sign Up</p>
        <div>Already have an account?</div>
        <p class="button is-light" type="button" @click="viewLoginModal">Log in</p>
      </div>
    </div>
  </section>
  <section class="hero">
  <section class="separator hero container">
  <div class="hero-body">
  <div class="columns">
    <div class="column is-one-third">
      <icon name="globe" scale="3"></icon>
      <h4>Search for teachers of any skills around the world</h4>
    </div>

    <div class="column is-one-third">
        <icon name="user-circle" scale="3"></icon>
      <h4>Hop on a direct call, share your code and fix things live</h4>
    </div>

    <div class="column is-one-third">
      <icon name="graduation-cap" scale="3"></icon>
      <h4>Learn by doing and asking questions, instead of copy-pasting random snippets online</h4>
    </div>
  </div>
  </div>
  </section>
  </section>
  <section class="hero separator is-medium is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title testimonials">
          Our users say it best!
        </h1>
        <h3 class="subtitle testimonials">
          Teachers and students love Code-Help!
        </h3>
        <div class="columns separator">
          <div class="column is-one-third">
            <div>
                <img class="img" src="/static/yacine.jpeg">
              <h4 class="separator subtitle"><icon name="graduation-cap"></icon><b> Teacher:</b> Yacine</h4>
              <p>I love that sweet extra money!</p>
            </div>
          </div>
          <div class="column is-one-third">
            <div>
                <img class="img" src="/static/posva.jpeg">
              <h4 class="separator subtitle"><icon name="graduation-cap"></icon><b> Teacher:</b> Eduardo</h4>
              <p>I love that sweet extra money!</p>
            </div>
          </div>
          <div class="column is-one-third">
            <div>
                <img class="img" src="/static/fred.png">
              <h4 class="separator subtitle"><icon name="child"></icon><b> Student:</b> Fred</h4>
              <p>Code Help is a lifesaver!</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  </section>


        <!-- SIGN UP MODAL -->
        <b-modal :active.sync="isSignupModalActive" has-modal-card>
          <signup-modal @loginModal.capture="viewLoginModal($event)"></signup-modal>
        </b-modal>

        <!-- LOG IN MODAL -->
        <b-modal :active.sync="isLoginModalActive" has-modal-card>
          <login-modal :payload="payload"></login-modal>
        </b-modal>
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
      payload: '',
    }
  },
  methods: {
    viewSignupModal() {
      this.isSignupModalActive = true;
    },
    viewLoginModal(payload) {
      this.isSignupModalActive = false;
      console.log('eeeeeeee', payload);
      this.payload = typeof payload === "object" ? '' : payload;
      console.log("did the payload transfer...?", this.payload)
      this.isLoginModalActive = true;
    },
  }
}
</script>

<style lang="css">
/*.column{
  border: 1px solid lightgrey;
  max-width: 30%;
  margin: auto;
}*/

.separator {
  margin-top: 40px;
}

.img {
  width: 200px;
  border: 0px solid;
  border-radius: 50%;
}

.testimonials {
  text-align: left !important;
}

</style>
