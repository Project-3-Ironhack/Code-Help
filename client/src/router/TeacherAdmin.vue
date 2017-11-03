<template>
  <div id="visitor-list">
      <p>Thanks for signing up to be a teacher at Code Help :) </p>
      <p>One of our team will review your information and send you an email with further instructions. </p>
      <p>We look forward to having you on board!</p>
  </div>
</template>

<script>


export default {
// vue meta
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Teacher Admin',
      script: [
      { src: "https://s.tagove.com/a-abb51/init.js"},
      { src: "https://s.tagove.com/backend.bundle.min.js"}
        ],
    },

    created() {
        // Added tagove backend into our site
    window.tagove=window.tagove || [];
    tagove.push(function(app){
        app.initVisitorNode(document.getElementById('visitor-list'));
    });
    },
}
</script>

<style>

</style>
