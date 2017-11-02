<template>
  <section class="container">
    <h1>How was your lesson?</h1>
    <div class="radios">
    <form @submit.prevent="rating" class="form-container">
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
          <br>
          <textarea class="textarea is-info is-medium" v-model="comment" placeholder="Help your fellow coders by leaving some feedback :)"/>
          <br />
        <button @click="() => { rateLesson(); success(); }" v-if="rating && comment" type="button" class="button is-success" name="button">Submit feedback</button>
        <button @click="danger" v-else type="button" class="button is-warning" name="button">Submit feedback</button>
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
    <p>Share your experience with the world:</p>

    <button class="button is-info social-button">
        <network network="facebook">
          <icon class="social-icon" name="facebook"></icon>
        </network>
    </button>

    <button class="button is-info social-button">
      <network network="linkedin">
        <icon class="social-icon" name="linkedin"></icon>
      </network>
    </button>

    <button class="button is-info social-button">
      <network network="twitter">
        <icon class="social-icon" name="twitter"></icon>
      </network>
    </button>

  </div>
</social-sharing>

  </section>
</template>

<script>
import apiSessions from "@/api/sessions";

export default {
  data() {
    return {
      rating: "",
      session: "",
      comment: "",
      isActive: false
    };
  },
  props: ["teacher"],
  methods: {
    rateLesson() {
      const id = this.$route.params[0];
      const rating = this.rating;
      const comment = this.comment;
      apiSessions.updateSession(id, rating, comment).then(session => {
        console.log(session);
        this.session = session;
      });
    },
    success() {
      this.$toast.open({
        duration: 5000,
        message: "Thanks for your feedback!",
        position: "is-top",
        type: "is-success",
        container: "section"
      });
    },
    danger() {
      this.$toast.open({
        duration: 4000,
        message: `Please leave a rating and comment before submitting`,
        position: "is-top",
        type: "is-danger"
      });
    }
  }
};
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

.form-container {
  max-width:500px;
  margin: auto;
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
    filter: grayscale(100%);
}

.rating-icon:hover {
  filter: grayscale(0%);
}

input[type="radio"]:checked + label >
  .rating-icon {
  filter: grayscale(0%);
}
.social-icon {
  margin:3px;
}

.social-button {
  padding: 10px;
}



</style>
