<template lang="html">
  <div>
    <h1>Welcome to your Dashboard!</h1>

<!-- SEARCH STARTS HERE -->

    <search-bar v-model="query"></search-bar>


<!-- SEARCH ENDS HERE -->


    <a href="javascript:tagoveApp.max()">Click here to chat with your teacher</a>
    <!-- <div id="visitor-list"></div> -->
    <br>
    <h2>Select a language below to use our code editor</h2>

    <select v-model="lang">
      <option disabled value="">Please select one</option>
      <option>Javascript</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
    <span>Selected: {{ lang }}</span>
    <br>
    <br>
    <AceEditor :lang="lang.toLowerCase()"></AceEditor>
  </div>
</template>

<script>
// window.tagove=window.tagove || [];
//     tagove.push(function(app){
//         app.initVisitorNode(document.getElementById('visitor-list'));
//     });
import AceEditor from '@/components/Editor'
import SearchBar from '@/components/SearchBar'

export default {
  components: { AceEditor, SearchBar },
  data () {
    return {
      lang: '',
      query: '',
    }
  }
}
</script>

<style lang="css">
</style>
