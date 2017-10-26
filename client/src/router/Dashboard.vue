<template lang="html">
  <div>

    <h1>Welcome to your Dashboard, {{ userName }}!</h1>

    <teacher-info v-if="$root.user.role === 'Teacher'"></teacher-info>

<!-- SEARCH STARTS HERE -->

    <search-bar v-if="$root.user.role === 'Student'" v-model="query"></search-bar>

    <search-results :query="query"/>


<!-- SEARCH ENDS HERE -->


</div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import TeacherInfo from "@/components/TeacherInfo";
import api from "@/api/auth";
import apiUsers from "@/api/users";

export default {
  components: {
    SearchBar,
    TeacherInfo,
    SearchResults
  },
  data() {
    return {
      users: [],
      query: ""
    };
  },
  computed: {
    userName: function() {
      return (
        this.$root.user.name.charAt(0).toUpperCase() +
        this.$root.user.name.slice(1)
      );
    }
  }
};
</script>

<style lang="css">
</style>
