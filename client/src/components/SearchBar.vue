<template>
  <div class="container search-bar">
    <div class="field has-addons">
        <div class="control is-expanded has-icons-left">
          <span class="icon is-small is-left" style="padding-left: 20px"><icon name="search"></icon></span> 
          <input style="padding-left: 50px" class="input is-info" type="text" placeholder="Try searching by the programing language you need help with, or by teacher name" :value="value" @input="$emit('input', $event.target.value)">
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

<style scoped>

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    lightgrey;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    lightgrey;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    lightgrey;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    lightgrey;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    lightgrey;
}

</style>

