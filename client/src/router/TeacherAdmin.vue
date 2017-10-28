<template>
  <div id="visitor-list">
      this is the admin panel
  </div>
</template>

<script>
// Added tagove backend into our site
    window.tagove=window.tagove || [];
    tagove.push(function(app){
        app.initVisitorNode(document.getElementById('visitor-list'));
    });

export default {

}
</script>

<style>

</style>
