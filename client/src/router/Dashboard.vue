<template lang="html">
  <div>

    <h1>Welcome to your Dashboard, {{ userName }}!</h1>
 
    <!-- only shows the teacher info panel if the user is a teacher and they haven't filled in their data -->
    <!-- need to update for skills -->
    <teacher-info v-if="$root.user.role==='Teacher' && (!user.name || !user.description || !user.image || !user.price)"></teacher-info>
 
<!-- SEARCH STARTS HERE -->

    <search-bar v-if="$root.user.role==='Student'"></search-bar>

    <!-- <div v-for='user in users'>{{user}}</div> -->


<!-- SEARCH ENDS HERE -->


</div>
</template>

<script>

import SearchBar from "@/components/SearchBar"
import api from "@/api/auth"
import TeacherInfo from "@/components/TeacherInfo"

export default {
  components: { 
    SearchBar,
    TeacherInfo,
    },
  data() {
    return {
      users: [],
      user: '',
    }
  },
  created() {
    api.getAll().then(users => {
      this.users = users;
    })
  },
  created(){
    const userId = this.$root.user._id;
    api.getTeacherById(userId).then(user => {
        this.user = user;
    });
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
