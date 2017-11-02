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
          <textarea required class="textarea is-info is-medium" v-model="comment" placeholder="Help your fellow coders by leaving some feedback :)"/>
          <br />
        <button @click="() => { rateLesson(); success(); }" v-if="rating && comment" type="button" class="button is-success" name="button">Submit feedback</button>
        <button @click="danger" v-else type="button" class="button is-warning" name="button">Submit feedback</button>
      </form>
    </div>

<br>
  <b-modal :active.sync="isSocialSharingModalActive" @close="close" has-modal-card>
    <social-sharing/>
  </b-modal>

  </section>
</template>

<script>
import apiSessions from "@/api/sessions";
import SocialSharing from "@/components/SocialSharing";

export default {
  data() {
    return {
      rating: "",
      session: "",
      comment: "",
      isActive: false,
      isSocialSharingModalActive: false,
    };
  },
  components: {
    SocialSharing,
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
      })
      setTimeout(() => {
        (this.isSocialSharingModalActive = !this.isSocialSharingModalActive)
      },
        1000)
    },
    danger() {
      this.$toast.open({
        duration: 4000,
        message: `Please leave a rating and comment before submitting`,
        position: "is-top",
        type: "is-danger"
      });
    },
    close() {
      console.log("closing from parent")
      this.$router.push('/')
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


</style>
