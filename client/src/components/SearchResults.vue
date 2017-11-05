<template>
  <div class="container is-fluid">
<br>
  <div v-show="queryResults.length === 0 && query !== ''">
    <h1>Whoops! No search result match your query!</h1>
    <figure><img class="empty-state" src="/static/searching.svg"></figure>
  </div>
  <div class="container">
  <div v-show="queryResults.length !== 0 || query=== ''">
    <h4 style="text-align: left">See who's online and click to start a call</h4>
  </div>
      <div class="columns is-multiline is-8">
        <teacher-card :result="result" v-if="query" v-for="(result, i) in queryResults" class="column is-one-quarter"/>
        <teacher-card :result="teacher" v-if="query === ''" v-for="teacher in orderedUsers" class="column is-one-quarter"/>
      </div>
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
        shouldSort: true,
        threshold: 0.5,
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

.empty-state {
  width: 15%;
}

.column {
  border: none !important;
}

</style>
