<template>
  <div>
    <h1>Your lesson with </span>
      <span class="capitalise" v-if="this.teacher">{{firstName}}</span>
      <span class="capitalise" v-else>your teacher</span>

      <button type="button" class="button is-danger" @click="endLesson">End lesson</button></h1>

    <!-- <h3>Select a language below to use our code editor</h3>

    <select v-model="lang">
      <option disabled value="">Please select one</option>
      <option>JavaScript</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
    <span>Selected: {{ lang }}</span>
    <br>
    <br>

    <AceEditor :lang="lang.toLowerCase()"></AceEditor>
      <br> -->
<br>
<br>
    <textarea class="own-text-editor" rows="20" cols="60"></textarea>
  </div>
</template>

<script>

import AceEditor from '@/components/Editor'
import apiSessions from '@/api/sessions'
import apiUsers from '@/api/users'

export default {
  data () {
    return {
        lang: '',
        session: '',
        liveSession: '',
        teacher: '',
    }
  },
  components: {
    AceEditor,
  },

  methods: {
    endLesson() {
      const id = this.$route.params[0]
      apiSessions.endSession(id).then(session => {
        console.log("session from view:", session.data.response)
        this.session = session.data.response;
        console.log("this.session:", this.session._id)
        tagoveApp.remove();
      }).then(() => {
        this.$router.push('/lesson-summary/' + this.session._id)
      })
    }
  },
  created(){
    const id = this.$route.params[0]
    tagoveApp.startChat();
    apiSessions.getSession(id).then(session => {
      return this.liveSession = session;
    }).then(() => {
      const teacherId = this.liveSession.session.teacher
      apiUsers.getTeacherById(teacherId).then(teacher => {
        return this.teacher = teacher
      })
    })
  },
  computed: {
    firstName: function() {
      return this.teacher.name.split(" ")[0]
    }
  }
}

</script>

<style>
.own-text-editor{
    background: url(http://i.imgur.com/2cOaJ.png);
    background-size: 8.77%;
    background-attachment: local;
    background-repeat: no-repeat;
    background-position-y: 0px;
    background-color: rgb(50, 115, 220);
    color: white;
    padding-left: 60px;
    padding-top: 20px;
    border-color:#ccc;
    line-height: 30px;
    font-size: 1em;
    border-radius: 10px;
    border: none;

    outline:0px !important;
    -webkit-appearance:none;
}

.capitalise{
  text-transform: capitalize;
}

</style>
