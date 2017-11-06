<template>
  <div>
    <h1>Your session with </span>
      <span class="capitalise" v-if="this.teacher">{{firstName}}</span>
      <span class="capitalise" v-else>your teacher</span>
    </h1>
<br>
      <div style="text-align:left; margin-left: 5%">
        <label class="lesson-end" style="display: inline-block; vertical-align: middle"> Click here once your session has ended &nbsp => &nbsp</label>
        <input style=" display: inline-block; vertical-align: middle"type="button" class="button is-warning" @click="endLesson" value="I've finished"></input>
      </div>
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

  methods: {
    endLesson() {
      tagoveApp.remove();
      const id = this.$route.params[0]
      apiSessions.endSession(id).then(session => {
        this.session = session.data.response;
      }).then(() => {
        this.$router.push('/lesson-summary/' + this.session._id)
      })
    }
  },
  created(){
    const id = this.$route.params[0]
    tagoveApp.startChat();
    tagoveApp.max();
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
.lesson-end{
  font-size: 1.1rem !important;
}
.own-text-editor{
    background: url(http://i.imgur.com/2cOaJ.png);
    background-size: 48.5px;
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
    margin-left: 5%;

    width: calc(100% - 500px);
    
    min-width: 350px;
    
}

.capitalise{
  text-transform: capitalize;
}

</style>
