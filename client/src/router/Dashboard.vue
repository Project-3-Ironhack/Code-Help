<template lang="html">
  <div>

    <h1>Welcome to your Dashboard, {{ userName }}!</h1>
    <!-- PUT IN COMPUTED? -->
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
  computed: {
    userName: function () {
      return this.$root.user.name.charAt(0).toUpperCase()+this.$root.user.name.slice(1);
    }
  },
}
</script>

<style lang="css">
</style>
