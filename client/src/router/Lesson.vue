<template>
  <div>
    <h1>Let's start your lesson!</h1>
    <a href="javascript:tagoveApp.max()">Click here to chat with your teacher</a>
    <!-- <div id="visitor-list"></div> -->
    <br>
    <h2>Select a language below to use our code editor</h2>
    
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
    <textarea rows="40" cols="90"></textarea>
  </div>
</template>

<script>
// window.tagove=window.tagove || [];
//     tagove.push(function(app){
//         app.initVisitorNode(document.getElementById('visitor-list'));
//     });
import AceEditor from '@/components/Editor'

export default {
  components: { AceEditor },
  data () {
    return {
      lang: '',
    }
  }
}
</script>

<style>
textarea{
    background: url(http://i.imgur.com/2cOaJ.png);
    background-attachment: local;
    background-repeat: no-repeat;
    padding-left: 35px;
    padding-top: 10px;
    border-color:#ccc;
}
</style>
