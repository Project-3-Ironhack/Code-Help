<template>
  <div class="container">
    <div class="field">
      <label class="label">
        <h2>Let's find you a teacher!</h2>
        <div class="control">
          <input class="input" type="text" placeholder="ask us anything: language, teacher..." v-model="query">
        </div>
      </label>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Search</button> <!-- add @click to the search button to trigger the method -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      users: [],
    }
  },
    methods: {
    // ADD WAY TO QUERY DB FOR TEACHERS
  }
}
</script>

<style lang="css">
</style>
