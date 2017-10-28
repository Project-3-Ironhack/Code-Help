<template lang="html">
  <div>

    <h1>Welcome to your Dashboard, <span id="capitalise">{{ userName }}</span>!</h1>

    <!-- only shows the teacher info panel if the user is a teacher and they haven't filled in their data -->
    <!-- need to update for skills -->
    <teacher-info v-if="$root.user.role==='Teacher' && ( !user.description || !user.image || !user.price)"></teacher-info>

<!-- SEARCH STARTS HERE -->
  <div class="student-search" v-show="$root.user.role === 'Student'">
    <search-bar v-model="query"></search-bar>
    <search-results :query="query"/>
  </div>
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
      name: '',
    };
  },
  created(){
    const userId = this.$root.user._id;
    apiUsers.getTeacherById(userId).then(user => {
        this.user = user;
        this.name = user.name;
    });
  },
  computed: {
    userName: function() {
      return (
        this.name.charAt(0).toUpperCase() +
        this.name.slice(1)
      );
    }
  }
};
</script>

<style lang="css">
#capitalise{
  text-transform: capitalize;
}
</style>
