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
        <button class="button is-primary">Search</button>
        <!-- Search button currently useless. Try to add feedback on clicking it. Maybe return only exact matches of the search -->
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
