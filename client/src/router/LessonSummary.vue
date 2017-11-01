<template>
  <section class="content">
    <h1>HOW DID</h1>
    <div class="radios">
    <form @submit.prevent="rating">
      <ul>
        <li>
          <input id="radio1" type="radio" value="1" v-model="rating">
          <label for="radio1"><img class="rating-icon" src="/static/confused-1.svg">
          </label>
        </li>
        <li>
          <input id="radio2" type="radio" value="2" v-model="rating">
          <label for="radio2"><img class="rating-icon" src="/static/happy-2.svg">
          </label>
        </li>
        <li>
          <input id="radio3" type="radio" value="3" v-model="rating">
          <label for="radio3"><img class="rating-icon" src="/static/super-happy-3.svg">
          </label>
        </li>
      </ul>
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
      session: ""
    }
  },
  props: ['teacher'],
  methods: {
    rateLesson(){
      const id = this.$route.params[0]
      console.log("ID:", id)
      console.log("rating:", this.rating)
      const rating = this.rating
      apiSessions.updateSession(id, rating).then(session => {
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
