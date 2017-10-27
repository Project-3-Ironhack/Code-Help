<template lang="html">
  <div>

    <h1>Welcome to your Dashboard, {{ userName }}!</h1>

    <!-- only shows the teacher info panel if the user is a teacher and they haven't filled in their data -->
    <!-- need to update for skills -->
    <teacher-info v-if="$root.user.role==='Teacher'"></teacher-info>
 <!--TO BE ADDED BACK ABOVE...    && ( !user.description || !user.image || !user.price) --> 
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
      query: "",
      user: "",
    };
  },
  created(){
    const userId = this.$root.user._id;
    apiUsers.getTeacherById(userId).then(user => {
        this.user = user;
    });
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
