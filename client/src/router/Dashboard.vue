<template lang="html">
  <div>

    <h1>Welcome to your Dashboard!</h1>
<!-- SEARCH STARTS HERE -->

    <search-bar></search-bar>

    <div v-for='user in users'>{{user.name}}</div>


<!-- SEARCH ENDS HERE -->


</div>
</template>

<script>

import SearchBar from "@/components/SearchBar"
import api from "@/api/auth"

export default {
  components: { SearchBar },
  data() {
    return {
      users: []
    }
  },
  created() {
    api.getAll().then(users => {
      this.users = users;
    })
  },
}
</script>

<style lang="css">
</style>
