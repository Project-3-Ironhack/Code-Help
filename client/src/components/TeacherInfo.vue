<template>
<div>
  <h2>Hello {{userName}}, and welcome to Code Help!</h2>
    <p>Before we unleash your talents on our students, we need to get to know you a little better.<br>Please fill out the questions, below.</p>
    <form @submit.prevent="teacherUpdate(); saveImage();">
        <!-- <label>Your name
            <input type="text" required v-model="name">
        </label><br/> -->

        <label>Introduce yourself
            <textarea rows="6" cols="30" required v-model="description" placeholder="Tell us about yourself..."></textarea>
        </label><br/>

        <label>Areas of expertise
            <input type="text" required v-model="skills">
        </label><br/>

        <label>Upload your photo
            <input type="file" name="image" required @change="image = $event.target.files[0]">
        </label><br/>
         <img :src="user.image" v-if="user.image" width="100">
         <br>

        <label>Your price per minute
            <!-- NEED TO UPDATE THE MODEL IF WE WANT TO KEEP CURRENCY -->
                    <select>
                        <option value="dollar">$</option>
                        <option value="euro">€</option>
                        <option value="sterling">£</option>
                    </select>
            <input type="number" min="0" max="1000" step="any" required v-model="price">
        </label><br/>


        <button>Update your information</button>
    </form>

</div>
</template>

<script>
import apiUsers from "@/api/users"

export default {
    data(){
        return{
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
    teacherUpdate(){ //deleted this.skills and this.image
        this.error = null
        const userId = this.$root.user._id;
        apiUsers.teacherUpdate(userId,this.description, this.price)
        .then(data => {
            this.$router.push('/dashboard');
        }).catch(err => {
            this.error = error.response;
        })
    },
    saveImage(){
        const userId = this.$root.user._id;
        apiUsers.saveImage(userId, this.image)
        .then(response => {
            this.image = this.$root.user.image
        }).catch(err => {
            this.error = error.response;
        })
    },
  },
  created(){
    const userId = this.$root.user._id;
    apiUsers.getTeacherById(userId).then(user => {
        this.user = user;
    });
  },
}
</script>

<style>

</style>
