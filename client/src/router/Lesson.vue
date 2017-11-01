<template>
  <div>
    <h1>Let's start your lesson!</h1>

    <p>And when you're done, just click here to end your lesson <span style="color: rgb(50, 115, 220) "> => </span> <button @click="endLesson">End lesson</button></p>

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
        tagoveApp.remove();
      }).then(() => {
        this.$router.push('/lesson-summary/' + this.session._id)
      })
    }
  },
  created(){
    tagoveApp.startChat();
  },
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
</style>
