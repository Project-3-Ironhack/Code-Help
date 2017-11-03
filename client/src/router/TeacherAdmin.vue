<template>
  <div id="visitor-list">
      <div v-if="description!==undefined">
        <p>Thanks for signing up to be a teacher at Code Help :) </p>
        <p>One of our team will review your information and send you an email with further instructions. </p>
        <p>We look forward to having you on board!</p>
      </div>
      <div v-else>
          <p>Before you get started, we need you to fill out your information.</p>
          <p>Head on over to your account to do so!</p>
      </div>
  </div>
</template>

<script>
import apiUsers from '@/api/users'


export default {
    data() {
        return {
            description: '',
        };
    },
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

    const userId = this.$root.user._id;

        apiUsers.getTeacherById(userId).then(user => {
            console.log('the use is...', user)
            this.description = user.description;
            console.log('this role is...', this.description)
        })
        .catch(err => {
        this.error = error.response;
        });
    },
}
</script>

<style>

</style>
