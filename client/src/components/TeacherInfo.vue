<template>
<div>
  <h2>Hello {{userName}}, and welcome to Code Help!</h2>
    <p>Before we unleash your talents on our students, we need to get to know you a little better.<br>Please fill out the questions, below.</p>
    <form @submit.prevent="teacherUpdate">
        <label>Your name
            <input type="text" required v-model="name">
        </label><br/>
        
        <label>Introduce yourself
            <textarea rows="6" cols="30" required v-model="description" placeholder="Tell us about yourself..."></textarea>
        </label><br/>

        <label>Areas of expertise
            <input type="text" required v-model="skills">
        </label><br/>

        <label>Upload your photo
            <input type="text" required v-model="image">
        </label><br/>

        <label>Your price per minute
            <input type="number" required v-model="price">
        </label><br/>

        <button>Update your information</button>
    </form>

</div>
</template>

<script>
import api from "@/api/auth"

export default {
    data(){
        return{
            name: 'ggg', // how do we populate the name in the text field based on name entered at sign up? and how do we reference it here?
            description: '',
            skills: '',
            image: '',
            price: '',
            error: null,
            user: '',
        };
    },
    computed: {
    userName: function () {
      return this.$root.user.name.charAt(0).toUpperCase()+this.$root.user.name.slice(1);
    }
  },
  methods: {
    teacherUpdate(){ //deleted this.skills
        this.error = null
        const userId = this.$root.user._id;
        api.teacherUpdate(userId, this.name, this.description, this.image, this.price)
        .then(data => {
            this.$router.push('/dashboard');
        }).catch(err => {
            this.error = error.response;
        })
    },
  },
  created(){
    const userId = this.$root.user._id;
    api.getTeacherById(userId).then(user => {
        this.user = user;
    });
  },
}
</script>

<style>

</style>
