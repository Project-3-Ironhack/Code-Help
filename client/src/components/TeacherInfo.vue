<template>
<div>
  <h2>Hello {{userName}}, and welcome to Code Help!</h2>
    <p>Before we unleash your talents on our students, we need to get to know you a little better.<br>Please fill out the questions, below.</p>
    <form @submit.prevent="teacherUpdate">
        <label>Your name
            <input type="text" required v-model="name">
        </label><br/>
        
        <label>Introduce yourself
            <textarea rows="6" cols="30" required v-model="bio" placeholder="Tell us about yourself..."></textarea>
        </label><br/>

        <label>Areas of expertise
            <input type="text" required v-model="skills">
        </label><br/>

        <label>Upload your photo
            <input type="text" required v-model="photo">
        </label><br/>
        <button>Submit</button>
    </form>
</div>
</template>

<script>
import api from "@/api/auth"

export default {
    datat(){
        return{
            // name: , // how do we populate the name in the text field based on name entered at sign up? and how do we reference it here?
            description: '',
            // skills: '',
            // photo: '',
        };
    },
    computed: {
    userName: function () {
      return this.$root.user.name.charAt(0).toUpperCase()+this.$root.user.name.slice(1);
    }
  },
  methods: {
    teacherUpdate(){

    }
  },
}
</script>

<style>

</style>
