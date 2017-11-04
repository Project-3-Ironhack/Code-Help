<template>
<div class="content">

  <section class="hero is-info main-section">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Code Help
        </h1>
        <h3 class="subtitle" style="margin-top: 15px">
          Code with experts from around the world
        </h3>
        <p class="button is-success is-medium" type="button" @click="viewSignupModal">Sign Up</p>
        <!-- <p style="margin-top: 10px" class="is-light" @click="viewLoginModal"> Already have an account? Click to log in</p> -->
      </div>
      <br><br><br>
      <div>
        <i class=" dev-icon devicon-android-plain"></i>  &nbsp &nbsp
        <i class=" dev-icon devicon-angularjs-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-cplusplus-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-css3-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-docker-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-go-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-html5-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-javascript-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-nodejs-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-php-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-react-original"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-ruby-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-swift-plain"></i> &nbsp &nbsp
        <i class=" dev-icon devicon-vuejs-plain"></i> &nbsp &nbsp
      </div>

    </div>
  </section>

  <section class="hero">
  <section class="separator hero container">
  <div class="hero-body three-icons">
  <div class="columns">
    <div class="column is-one-third">
      <icon name="code" scale="3"></icon>
      <h4 class="three-icon-text">Sayonara Stack Overflow! <br>
      Code Help gets you the answers you need, when you need them</h4>
    </div>

    <div class="column is-one-third">
        <icon name="play" scale="2" style="margin-bottom: 13px"></icon>
      <h4 class="three-icon-text">Hop on a video chat, share your screen with an expert, and pair program in real-time</h4>
    </div>

    <div class="column is-one-third">
      <icon name="graduation-cap" scale="3" style="margin-bottom: 9px;"></icon>
      <h4 class="three-icon-text">With Code Help you're never alone<br>Spend more time coding, and less time moaning</h4>
    </div>
  </div>
  </div>
  </section>
  </section>
  
  <section class="hero separator is-primary">
    <div class="hero-body testimonials-section">
      <div class="container">
        <h1 class="title testimonials">
          Our users say it best!
        </h1>
        <h3 class="subtitle testimonials">
          Teachers and students love Code Help!
        </h3>
        <div class="columns separator">
          <div class="column is-one-third">
            <div>
                <img class="img" src="/static/alexandra.jpeg">
              <h4 class="separator subtitle"><icon name="graduation-cap"></icon><b> Teacher:</b> Alexandra</h4>
              <p>I love to teach, and Code Help connects me with students all over the world. Plus it's a nice way to make some extra pocket money!</p>
            </div>
          </div>
          <div class="column is-one-third">
            <div>
                <img class="img" src="/static/posva.jpeg">
              <h4 class="separator subtitle"><icon name="graduation-cap"></icon><b> Teacher:</b> Eduardo</h4>
              <p>I remember how difficult it was to code when I was learning. I wish Code Help had existed then. It's a brilliant idea!</p>
            </div>
          </div>
          <div class="column is-one-third"> 
            <div>
                <img class="img" src="/static/fred.png">
              <h4 class="separator subtitle"><icon name="child"></icon><b> Student:</b> Fred</h4>
              <p>Code Help has saved me hundreds of hours - it's a real lifesaver! And as most teachers donate free teaching hours, it's accessible to everyone! </p>
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
      // this.payload = typeof payload === "object" ? '' : payload;
      this.payload = payload;
      console.log("did the payload transfer...?", this.payload)
      this.isLoginModalActive = true;
    },
  }
}
</script>

<style lang="css">

.three-icon-text{
  line-height: 120% !important;
}

.main-section {
  height: 400px; 
  padding-top: 2.3rem;
}
/*.column{
  border: 1px solid lightgrey;
  max-width: 30%;
  margin: auto;
}*/

.separator {
  margin-top: 20px;
}

.img {
  width: 200px;
  border: 0px solid;
  border-radius: 50%;
}

.testimonials {
  text-align: left !important;
  margin-left: 7%;
}

.testimonials-section {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.three-icons{
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.dev-icon{
  font-size: 2rem;
}
</style>
