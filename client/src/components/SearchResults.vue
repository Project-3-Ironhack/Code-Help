<template>
  <div>
    <div v-if="query" v-for="result in queryResults">
        <teacher-card :result="result" />
    </div>
    <div v-if="query === ''">
      <ul>
        <li v-for="teacher in teachers">{{ teacher }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import TeacherCard from "@/components/TeacherCard";
import apiUsers from "@/api/users";

export default {
  data() {
    return {
      teachers: []
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
    fuse() {
      var options = {
        keys: ["name", "skills.name"]
      };
      return new Fuse(this.teachers, options);
    },
    queryResults() {
      return this.fuse.search(this.query);
    }
  }
};
</script>

<style lang="css">
</style>
