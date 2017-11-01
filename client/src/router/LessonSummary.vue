<template>
  <section class="content">
    <h1>HOW DID YOUR LESSON GO?</h1>
    <div class="radios">
    <form @submit.prevent="rating">
          <input id="radio1" class="radio" type="radio" value="1" v-model="rating">
          <label for="radio1">
            <img class="rating-icon" src="/static/confused-1.svg">
          </label>
          <input id="radio2" class="radio" type="radio" value="2" v-model="rating">
          <label for="radio2">
            <img class="rating-icon" src="/static/happy-2.svg">
          </label>
          <input id="radio3" class="radio" type="radio" value="3" v-model="rating">
          <label for="radio3">
            <img class="rating-icon" src="/static/super-happy-3.svg">
          </label>
          <br />
          <textarea v-model="comment" placeholder="Give feedback to your teacher"/>
          <br />
        <button @click="rateLesson" type="button" name="button">Rate</button>
      </form>
    </div>

<br>
  <social-sharing url="https://code-help.herokuapp.com"
                  title="Learn to code with experts around the world"
                  description="I'm winning with Code Help"
                  quote="I'm winning with Code Help"
                  hashtags="vuejs,javascript, coder4life"
                  twitter-user="code-help"
                  inline-template>
  <div>
    <h4>Help us educate the next generation of coders</h4>
    <p>Share your experience on social</p>

    <button>
        <network network="facebook">
          <i class="fa fa-fw fa-facebook"></i> Facebook
        </network>
    </button>

    <button>
      <network network="linkedin">
        <i class="fa fa-fw fa-linkedin"></i> LinkedIn
      </network>
    </button>

    <button>
      <network network="twitter">
        <i class="fa fa-fw fa-twitter"></i> Twitter
      </network>
    </button>

  </div>
</social-sharing>

  </section>
</template>

<script>
import apiSessions from "@/api/sessions"

export default {



  data() {
    return {
      rating: "",
      session: "",
      comment: "",
    }
  },
  props: ['teacher'],
  methods: {
    rateLesson(){
      const id = this.$route.params[0]
      const rating = this.rating
      const comment = this.comment
      apiSessions.updateSession(id, rating, comment).then(session => {
        console.log(session)
        this.session = session
      })
    }
  }

}
</script>

<style lang="css">

ul {
    list-style: none;
}

li {
    display: inline-block;
    margin-right: 15px;
}

.radio {
 visibility:hidden;
}

label {
  cursor: pointer;
  font-size: 1.8rem;
}

input:checked + img {
    height: 80px
}

.rating-icon {
    height: 60px;
}

</style>
