<template>
<div>
  <h2 v-if="getURL === '/dashboard'">Hello {{userName}}, and welcome to Code Help!</h2>
    <p v-if="getURL === '/dashboard'">Before we unleash your talents on our students, we need to get to know you a little better.<br>Please fill out the questions, below.</p>
    <form @submit.prevent="teacherUpdate(); saveImage();">

         <label v-if="getURL !== '/dashboard'">Your name
            <input type="text" required v-model="name">
        </label><br/>

        <label>Introduce yourself
            <textarea v-bind:required="$root.user.role==='Teacher'" rows="6" cols="30" v-model="description" placeholder="Tell us about yourself..."></textarea>
        </label><br/>

        <label>Where you can be found online (optional)
            <ul>
                <li><icon name="github"></icon><input type="text"  v-model="gitHubUrl" placeholder="GitHub"></li>
                <li><icon name="linkedin"></icon><input type="text"  v-model="linkedInUrl"placeholder="LinkedIn" ></li>
                <li><icon name="home"></icon><input type="text"  v-model="personalWebsiteUrl" placeholder="Your personal website or blog"></li>
                <li><icon name="twitter"></icon><input type="text"  v-model="twitterUrl" placeholder="Twitter"></li>
            </ul>

        </label><br/>

        <span v-if="$root.user.role==='Teacher'">Areas of expertise</span><span v-if="$root.user.role==='Student'">What are you studying?</span>
        <v-select required class="vue-select-form" multiple :closeOnSelect='false' v-model="skills" :options="options"></v-select><br>


        <p v-if="user.image !== undefined">Your current photo</p><img :src="user.image" v-if="user.image && getURL === '/account'" width="100">
        <br>
        <label><span v-if="user.image === undefined">Upload your photo</span><span v-else>Change your photo</span>
            <input type="file" name="image" :required="!user.image && $root.user.role==='Teacher'" @change="image = $event.target.files[0]">
        </label><br/>
         <br>

        <label required v-if="$root.user.role==='Teacher'">Help students for free, or name your price<br>

                    <select required v-model="currency">
                        <option value="" selected>Currency</option>
                        <option value="dollar">$ USD</option>
                        <option value="euro">€ EUR</option>
                        <option value="sterling">£ GBP</option>
                    </select>
            <input required type="number" min="0" max="10" step=".01" v-model="price">
            per minute
        </label><br>
        <br>


        <button>Update your information</button>
        <p v-if="okMessage"> Update successful</p>
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
            options: [
              'Amazon Web Services',
              'Android',
              'Angular.js',
              'Apache',
              'Babel',
              'Backbone.js',
              'Bootstrap',
              'Bower',
              'C',
              'C++',
              'Coffeescript',
              'C#',
              'CSS',
              'd3.js',
              'Django',
              'Docker',
              'Doctrine',
              '.NET',
              'Drupal',
              'Ember JS',
              'Express',
              'Git',
              'Github',
              'Go',
              'Grunt',
              'Gulp',
              'Handlebars',
              'Heroku',
              'HTML5',
              'Jasmine',
              'Java',
              'Javascript',
              'JQuery',
              'Laravel',
              'LESS',
              'Mocha',
              'MongoDB',
              'Mysql',
              'NGINX',
              'Node.js',
              'npm',
              'PHP',
              'PostgreSQL',
              'Python',
              'Rails',
              'React',
              'Redis',
              'Ruby',
              'SASS',
              'Swift',
              'Symfony',
              'Travis',
              'Typescript',
              'Ubuntu',
              'Vagrant',
              'Vim',
              'Vue.js',
              'Webpack',
              'Wordpress',
              'Yarn',
            ],
            //end multi select
            name: '',
            description: '',
            skills: '',
            image: '',
            price: 0,
            currency: '',
            error: null,
            user: '',
            okMessage: false,
            gitHubUrl: '',
            linkedInUrl: '',
            personalWebsiteUrl: '',
            twitterUrl: '',

            role: this.$root.user.role,
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
        apiUsers.teacherUpdate(userId, this.name, this.description, this.skills, this.price, this.currency, this.gitHubUrl, this.linkedInUrl, this.personalWebsiteUrl, this.twitterUrl)
        .then(data => {
            this.okMessage = true;
            setTimeout(() => this.okMessage = false, 2000);
        })
        .then(() => {if(this.role==='Teacher') {
            setTimeout(()=>this.$router.push('/teach'), 1500);
            } else {
            setTimeout(()=>this.$router.push('/dashboard'), 1500);
            }
        })
        .catch(err => {
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
            this.gitHubUrl = user.gitHubUrl;
            this.linkedInUrl = user.linkedInUrl;
            this.personalWebsiteUrl = user.personalWebsiteUrl;
            this.twitterUrl = user.twitterUrl;
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
.vue-select-form {
    width: 35%;
    min-width: 380px;
}

.vue-select-form > div {
    width: 100%;
}

  .v-select li {
    margin: -4px 0;
  }
</style>


<style scoped>
label {
    vertical-align: top;
    /* display:block; */
}

li {
    list-style-type: none;
}
li > input {
    margin-left: 10px;
}
</style>
