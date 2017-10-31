<template lang="html">
  <div>

    <h1>Welcome to your Dashboard, <span id="capitalise">{{ userName }}</span>!</h1>

    <!-- only shows the teacher info panel if the user is a teacher and they haven't filled in their data -->
    <teacher-info v-if="$root.user.role==='Teacher' && ( !user.description)"></teacher-info>

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
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Find a teacher',

    },
  data() {
    return {
      users: [],
      query: "",
      user: "",
      name: '',
      status: '',
      description: '',
      role: '',
    };
  },
  created(){
    const userId = this.$root.user._id;
    this.status = 'online';

    apiUsers.getTeacherById(userId).then(user => {
        this.user = user;
        this.name = user.name;
        this.description = user.description;
        this.role = user.role;
    }).
    then(apiUsers.updateOnlineStatus(userId, this.status))
    .then(user => {
      console.log('we made it to here', user);
      if(this.description !== '' && this.role === 'Teacher'){
      console.log('empty description, i think not!')
        this.$router.push('/teach');
      }
    })
    .catch(err => {
      this.error = error.response;
    });

     console.log('the online status is now', this.status);

    // apiUsers.updateOnlineStatus(userId, this.status).then(user => {
    //   console.log('we made it to here', user);
    // }).catch(err => {
    //     this.error = error.response;
    // });  
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
