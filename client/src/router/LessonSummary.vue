<template>
  <section class="content">
    <form @submit.prevent="rating">
      <label>Rate the teacher:
        <input type="number" min="0" max="5" step="1" v-model="rating">
        <button @click="rateLesson" type="button" name="button">Rate</button>
      </label>
      </form>
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
</style>
