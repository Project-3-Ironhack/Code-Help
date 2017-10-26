<template>
  <div class="container">
    <div class="field">
      <label class="label">
        <h2>Let's find you a teacher!</h2>
        <div class="control">
          <input class="input" type="text" placeholder="ask us anything: language, teacher..." :value="value" @input="$emit('input', $event.target.value)">
        </div>
      </label>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Search</button> <!-- add @click to the search button to trigger the method -->
        <div v-for="query in queryResults">
        Teacher: {{ query.name }}
        Skills: {{ query.skills[0].name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import apiUsers from '@/api/users'

export default {

  data() {
    return {
      teachers: [],
      queryResults: [],
    }
  },
  props: ['value'],
}
</script>

<style lang="css">
</style>
