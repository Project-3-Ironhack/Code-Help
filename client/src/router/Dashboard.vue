<template lang="html">
  <div>

    <h1>Welcome to your Dashboard, {{ userName }}!</h1>

    <teacher-info v-if="$root.user.role==='Teacher'"></teacher-info>

<!-- SEARCH STARTS HERE -->

    <search-bar v-if="$root.user.role==='Student'"></search-bar>

    <div v-for='user in users'>Name: {{user.name}}</div>


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
      users: []
    }
  },
  created() {
    api.getAll().then(users => {
      this.users = users;
    })
  },
  methods: {
    searchTeachers() {
      api.getAll(this.query).then(teacher => {
        this.teachers = teacher;
      })
    }
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
