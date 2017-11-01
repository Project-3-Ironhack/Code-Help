<template>
  <section class="content">
    <h1>HOW DID YOUR LESSON GO?</h1>
    <div class="radios">
    <form @submit.prevent="rating">
          <input id="radio1" type="radio" value="1" v-model="rating">
          <label for="radio1">
            <img class="rating-icon" src="/static/confused-1.svg">
          </label>
          <input id="radio2" type="radio" value="2" v-model="rating">
          <label for="radio2">
            <img class="rating-icon" src="/static/happy-2.svg">
          </label>
          <input id="radio3" type="radio" value="3" v-model="rating">
          <label for="radio3">
            <img class="rating-icon" src="/static/super-happy-3.svg">
          </label>
          <br />
          <input v-model="comment" placeholder="edit me">
          <br />
        <button @click="rateLesson" type="button" name="button">Rate</button>
      </form>
    </div>
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

input {
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
