<template>
<div>
  <h2 v-if="getURL === '/dashboard'">Hello {{userName}}, and welcome to Code Help!</h2>
    <p v-if="getURL === '/dashboard'">Before we unleash your talents on our students, we need to get to know you a little better.<br>Please fill out the questions, below.</p>
    <form @submit.prevent="teacherUpdate(); saveImage();">
        <!-- DON'T SHOW THE NAME FIELD ON THE DASHBOARD PAGE -->
        <label v-if="getURL !== '/dashboard'">Your name
            <input type="text" required v-model="name">
        </label><br/>

        <label>Introduce yourself
            <textarea rows="6" cols="30" required v-model="description" placeholder="Tell us about yourself..."></textarea>
        </label><br/>

        <!-- <label><span v-if="$root.user.role==='Teacher'">Areas of expertise</span><span v-if="$root.user.role==='Student'">What are you studying?</span>
            <input type="text" required v-model="skills">
        </label><br/> -->

        <!-- trying multi-select dropdown -->
        <span v-if="$root.user.role==='Teacher'">Areas of expertise</span><span v-if="$root.user.role==='Student'">What are you studying?</span>
        <v-select multiple :closeOnSelect='false' v-model="skills" :options="options"></v-select>


        <!-- LIFECYCLE HOOKS QUESTION // create a new teacher, fill in info inc photo, click submit, get sent to account page, all the info is there except photo. if you do something in created and save then photo appears. after this, the photo then appears always. -->
        <p v-if="user.image !== undefined">Your current photo</p><img :src="user.image" v-if="user.image && getURL === '/account'" width="100">
        <br>
        <label><span v-if="user.image === undefined">Upload your photo</span><span v-else>Change your photo</span>
            <input type="file" name="image" :required="!user.image" @change="image = $event.target.files[0]">
        </label><br/>
         <br>

        <label v-if="$root.user.role==='Teacher'">Your price per minute
            <!-- NEED TO UPDATE THE MODEL IF WE WANT TO KEEP CURRENCY -->
                    <select v-model="currency">
                        <option value="" selected>Select your currency</option>
                        <option value="dollar">$ USD</option>
                        <option value="euro">€ EUR</option>
                        <option value="sterling">£ GBP</option>
                    </select>
            <input type="number" min="0" max="10" step=".01" required v-model="price">
        </label><br/>


        <button>Update your information</button>
    </form>

</div>
</template>

<script>
import apiUsers from "@/api/users"

// mutli select
import vSelect from "vue-select"

export default {
    // multi select
    components: {vSelect},
    data(){
        return{
            // start multi select
            options: ['JavaScript','Vue.js','HTML','CSS','React','Angular','Git', "GitHub",'Bootstrap','Bulma','Heroku','Docker','AWS','Google Maps'],
            //end multi select
            name: '',
            description: '',
            skills: '',
            image: '',
            price: '',
            currency: '',
            error: null,
            user: '',
        };
    },
    computed: {
    userName: function () {
      return this.name.charAt(0).toUpperCase()+this.name.slice(1);
    },
    getURL: function() {
        return this.$route.path;
    }
  },
  methods: {
    teacherUpdate(){

        this.error = null
        const userId = this.$root.user._id;
        apiUsers.teacherUpdate(userId, this.name, this.description, this.skills, this.price, this.currency)
        .then(data => {
            this.$router.push('/account');
        }).catch(err => {
            this.error = error.response;
        })
    },
    saveImage(){
        // if you don't upload an image on the account page, it doesn't change the image to an empty string
        if(this.$route.path === '/dashboard' || (this.$route.path === '/account' && typeof this.image !=='string')){
            console.log('testing', typeof this.image)
            const userId = this.$root.user._id;
            apiUsers.saveImage(userId, this.image)
            .then(response => {
            // change the image when the user uploads a new image
                this.user.image = response.data.image;
            }).catch(err => {
                this.error = error.response;
            })
        }
    },
  },
  created(){
      
    const userId = this.$root.user._id;
    apiUsers.getTeacherById(userId).then(user => {
        // update name to the name from the DB, so that when we patch, name isn't set to an empty string
        this.name = user.name; 
        this.user = user;
        if(this.$route.path === '/account'){
            this.description = user.description;
            this.price = user.price;
            this.currency = user.currency;
            this.skills = user.skills;
            this.image = user.image;
        }
        // need to set student price to something, as otherwise need to create a new function without price as a parameter
        if(this.user.role === 'Student'){
            this.price = 0;
            this.currency = undefined;
        }
    });
  },
}
</script>

<style>

</style>
