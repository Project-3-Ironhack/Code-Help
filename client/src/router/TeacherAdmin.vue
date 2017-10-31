<template>
  <div id="visitor-list">
      Let's teach some students!
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
