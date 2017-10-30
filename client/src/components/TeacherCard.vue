<template>
  <div>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="result.image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media-right">
        <div class="media-content">
          <p class="title is-4 capitalise">{{result.name}}</p>
          <p class="subtitle is-6 capitalise">{{result.rating}}</p>
        </div>
      </div>

      <div class="content">
        <div class="tags">
          <a  class="tag is-primary is-rounded" v-show="i < 3" v-for="(skill, i) in result.skills">{{result.skills[i]}}</a>
        </div>
        <p>Student's comment</p>
        <br>
        <!-- <router-link to="/lesson" v-if="result.status === 'online'">this teacher is ONLINE, start call</router-link> -->

        <span @click="startLesson(result)">this teacher is ONLINE, start call</span>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import apiSessions from "@/api/sessions"

export default {
  data(){
    return {
      userId: '',
    };
  },

  props: ['result'],

  created(){
    const userId = this.$root.user._id;
    console.log('user id', userId);
  },
  methods: {
    startLesson(result) {
      // when clicking to start lesson, launches function that creates the session in the DB, filled with student and teacher ID. This will be used on call end, as we'll pass all the session data to the next page (LessonSummary)
      // May have to create another function (createSession, without rating) and change saveSession to updateSession
      const userId = this.$root.user._id
      apiSessions.saveSession(result._id).then(session => {
        this.session = session;
      })
      this.$router.push("/lesson/" + this.session._id);
    }
  }


}


</script>

<style lang="css">
img{
  object-fit: cover;
}

.capitalise{
  text-transform: capitalize;
}
</style>
