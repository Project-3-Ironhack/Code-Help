<template>
  <div>
    It should appear:
    {{ teachers }}
  </div>
</template>

<script>

import TeacherCard from '@/components/TeacherCard'
import apiUsers from '@/api/users'

export default {
  data() {
    return {
      teachers: [],
    }
  },
  components: {
    TeacherCard,
  },
  props: ['query'],
  created() {
    apiUsers.getAll().then(teachers => {
      this.teachers = teachers;
    })
  },
  methods: {
    searchTeachers() {
      var options = {
        keys: ['name', 'skills.name']
      }
      var fuse = new Fuse (this.teachers, options)
      console.log("OPTIONS: ", options)
      console.log("FUSE EXECUTED WITh THIS QUERY:", this.query)
      console.log(fuse.search(this.query))
      this.queryResults = fuse.search(this.query)
    },
  }
}
</script>

<style lang="css">
</style>
