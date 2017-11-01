<template>
  <div class="container">
  <div>
    <h1>Start a call with one of our teachers</h1>
    <h4>Click on a profile below to get started</h4>

      {{ teacherSessions }}
  </div>
  <br>
      <div class="columns is-multiline is-8">
        <teacher-card :result="result" :sessions="teacherSessions" v-if="query" v-for="(result, i) in queryResults" class="column is-one-quarter"/>
        <teacher-card :result="teacher" v-if="query === ''" v-for="teacher in teachers" class="column is-one-quarter"/>
      </div>
      <div >

      </div>
  </div>
</template>

<script>
import TeacherCard from "@/components/TeacherCard";
import apiUsers from "@/api/users";
import apiSessions from "@/api/sessions";

export default {
  data() {
    return {
      teachers: [],
      sessions: []
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
    apiSessions.getAll().then(sessions => {
      this.sessions = sessions.data.sessions;
    });
  },
  computed: {
    fuse() {
      var options = {
        keys: ["name", "skills"]
      };
      return new Fuse(this.teachers, options);
    },
    queryResults() {
      return this.fuse.search(this.query);
    },
    teacherSessions() {
        return this.queryResults.forEach(teacher => {
          console.log("teacher in loop:", teacher.name, teacher._id)
          return this.sessions.filter(session => {
            console.log("teacher and session in filter:", teacher._id, session.teacher)
            return session.teacher = teacher._id
          })
        })
      }
    }
};
</script>

<style lang="css">
</style>
