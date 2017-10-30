<template>
  <section class="content">
    <form @submit.prevent="rating">
      <label>Rate the teacher:
        <input type="number" min="0" max="5" step="1" v-model="rating">
        <button @submit="saveSession" type="button" name="button">Rate</button>
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
    }
  },
  props: ['teacher'],
  methods: {
    // CHANGE TO UPDATESESSION
    saveSession() {
      const userId = this.$root.user._id
      apiSessions.saveSession(teacherId, rating)
    }
  }

}
</script>

<style lang="css">
</style>
