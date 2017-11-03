<template>
  <div class="container search-bar">
    <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input is-info" type="text" placeholder="ask us anything: what language do you need help with, which teacher are you looking for..." :value="value" @input="$emit('input', $event.target.value)">
        </div>
        <div class="control">
        <a class="button is-info">Search</a>
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

.search-bar {
  margin-bottom: 40px;
}

</style>
