<template>
  <div>
    <h1>Let's start your lesson!</h1>

    <span @click="endLesson">End lesson</span>

    <h3>Select a language below to use our code editor</h3>

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
      <br>

    <textarea class="own-text-editor" rows="40" cols="90"></textarea>
  </div>
</template>

<script>

import AceEditor from '@/components/Editor'
import apiSessions from '@/api/sessions'

export default {
  data () {
    return {
        lang: '',
        session: '',
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
      }).then(() => {
        this.$router.push('/lesson-summary/' + this.session._id)
      })
    }
  },
  created(){
    tagoveApp.max();
  },
}

</script>

<style>
.own-text-editor{
    background: url(http://i.imgur.com/2cOaJ.png);
    background-attachment: local;
    background-repeat: no-repeat;
    padding-left: 35px;
    padding-top: 10px;
    border-color:#ccc;
}
</style>
