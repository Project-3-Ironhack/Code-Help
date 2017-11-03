<template>
  <div>
    <h1>Your lesson with </span>
      <span class="capitalise" v-if="this.teacher">{{firstName}}</span>
      <span class="capitalise" v-else>your teacher</span>

      <button type="button" class="button is-danger" @click="endLesson">End lesson</button></h1>

<br>
<br>
    <textarea class="own-text-editor" rows="20" cols="80"></textarea>
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
    console.log('this is created')
    const id = this.$route.params[0]
    tagoveApp.startChat();
    tagoveApp.max();
     console.log('chat should have started')
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
    background-size: 6.75%;
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

    float: left;
    margin-left: 80px;
}

.capitalise{
  text-transform: capitalize;
}

</style>
