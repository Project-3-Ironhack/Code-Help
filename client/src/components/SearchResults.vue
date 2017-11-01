<template>
  <div class="container">
  <div>
    <h1>Start a call with one of our awesome teachers</h1>
    <h4>Click on a profile below to get started</h4>
  </div>
  <br>
      <div class="columns is-multiline is-8">
        <teacher-card :result="result" v-if="query" v-for="(result, i) in queryResults" class="column is-one-quarter"/>
        <teacher-card :result="teacher" v-if="query === ''" v-for="teacher in orderedUsers" class="column is-one-quarter"/>
      </div>
      <div >

      </div>
  </div>
</template>

<script>
import TeacherCard from "@/components/TeacherCard";
import apiUsers from "@/api/users";
import apiSessions from "@/api/sessions";
import _ from 'lodash'

export default {
  data() {
    return {
      teachers: [],
    };
  },
  components: {
    TeacherCard
  },
  props: ["query"],
  created() {
    apiUsers.getAll().then(teachers => {
      this.teachers = teachers;
    });
  },
  computed: {
    orderedUsers: function () {
      return _.orderBy(this.teachers, ['status'], ["desc"])
    },
    fuse() {
      var options = {
        keys: ["name", "skills"]
      };
      return new Fuse(this.teachers, options);
    },
    queryResults() {
      return _.orderBy(this.fuse.search(this.query), ['status'], ['desc']);
    },
    }
};
</script>

<style lang="css">
</style>
