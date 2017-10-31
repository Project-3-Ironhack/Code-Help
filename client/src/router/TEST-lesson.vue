<template>
  <div id='app'>
<!--  -->
<a href="javascript:tagoveApp.max()">Click here to chat with your teacher</a>
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
<!--  -->

  </div>
</template>
 
<script>

import AceEditor from '@/components/Editor'

 
export default {
  data () {
    return {
      complete: false,

      // 
        lang: '',
      // 
    }
  },
 
  components: { AceEditor },
 
  methods: {
  }
}
</script> 
 
<style>

</style> 