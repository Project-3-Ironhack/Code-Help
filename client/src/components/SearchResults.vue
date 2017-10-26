<template>
  <div>
    <div v-if="query" v-for="result in queryResults">
        <teacher-card :result="result" />
    </div>
    <div v-else>
      <ul>
        <li v-for="teacher in teachers">{{ teacher.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import TeacherCard from '@/components/TeacherCard'
import apiUsers from '@/api/users'

export default {
  data() {
    return {
      teachers: [],
      queryResults: [],
    }
  },
  components: {
    TeacherCard,
  },
  props: ['query'],
  created() {
    apiUsers.getAll().then(teachers => {
      console.log("TEACHERS:", teachers)
      this.teachers = teachers;
    }).then(window.addEventListener('keyup', this.searchTeachers))
  },
  methods: {
    searchTeachers() {
      var options = {
        keys: ['name', 'skills.name']
      }
      var fuse = new Fuse (this.teachers, options)
      console.log("OPTIONS: ", options)
      console.log("FUSE EXECUTED WITh THIS QUERY:", this.query)
      console.log("EXECUTING FUSE SEARCH: ", fuse.search(this.query))
      console.log(fuse)
      this.queryResults = fuse.search(this.query)
    },
    computed: {
      search: function(query) {
        console.log("hello")
        return this.searchTeachers();
      }
    },
  }
}
</script>

<style lang="css">
</style>
