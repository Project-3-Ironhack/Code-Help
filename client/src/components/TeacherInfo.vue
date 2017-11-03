<template>
<div class="page-body">
  <h2 v-if="getURL === '/dashboard'">Hello {{userName}}, and welcome to Code Help!</h2>
    <p style="text-align: left" v-if="getURL === '/dashboard'">Before we unleash your talents on our students, we need to get to know you a little better.</p>
    <p v-if="getURL === '/dashboard'" style="margin-bottom: -20px">Please fill out the questions, below.</p>
   <div class="field">
        <form @submit.prevent="teacherUpdate(); saveImage();">

        <div class="field">
            <label class="label" v-if="getURL !== '/dashboard'">Your name
                <input class="input" type="text" required v-model="name">
            </label><br/>
        </div>

        <div class="field">
            <label class="label" >Introduce yourself
                <b-input maxlength="600" type="textarea" v-bind:required="$root.user.role==='Teacher'" rows="6" cols="30" v-model="description" placeholder="Tell us about yourself..."></b-input>
            </label><br/>
        </div>

        <div class="field">
            <label class="label" >Where can we find you online <span style="font-weight: normal">(optional)</span>
                    <label class="control has-icons-left">
                        <input style="margin-bottom: 10px" class="input" type="text"  v-model="gitHubUrl" placeholder="GitHub">
                        <span class="icon is-small is-left">
                        <icon name="github"></icon>
                        </span>
                    </label>
                    <label class="control has-icons-left">
                        <input style="margin-bottom: 10px" class="input" type="text"  v-model="linkedInUrl"placeholder="LinkedIn" >
                        <span class="icon is-small is-left">
                        <icon name="linkedin"></icon>
                        </span>
                    </label>
                    <label class="control has-icons-left">
                        <input style="margin-bottom: 10px" class="input" type="text"  v-model="personalWebsiteUrl" placeholder="Your personal website or blog">
                        <span class="icon is-small is-left">
                        <icon name="home"></icon>
                        </span>
                    </label>
                    <label class="control has-icons-left">
                        <input style="margin-bottom: 10px" class="input" type="text"  v-model="twitterUrl" placeholder="Twitter">
                        <span class="icon is-small is-left">
                        <icon name="twitter"></icon>
                        </span>
                    </label>

            </label><br/>
        </div>

        <div class="field">
            <span style="font-weight: bold" v-if="$root.user.role==='Teacher'">Areas of expertise</span><span v-if="$root.user.role==='Student'">What are you studying?</span>
            <v-select required class="vue-select-form" multiple :closeOnSelect='false' v-model="skills" :options="options"></v-select><br>
        </div>


<br>
        <div class="field" @change="image = $event.target.files[0]">
                <p v-if="user.image !== undefined" style="font-weight: bold">Your current photo</p><img :src="user.image" v-if="user.image && getURL === '/account'" style="width:100px !important; height: 100px !important; object-fit: cover !important">
                <br><br>
                <span style="font-weight: bold;" v-if="user.image === undefined">Upload your photo</span><span v-else>Click here to change your photo</span>
            <b-field style="margin-top: 10px;">
                <b-upload v-model="files" style="width: 210px;" >
                    <a class="button is-info input" type="file" name="image" :required="!user.image && $root.user.role==='Teacher'" @change="image = $event.target.files[0]">
                        <icon style="margin-left: 8px;" class="icon is-small is-left" name="upload"></icon>
                        <span style="padding-left: 15px;">Click to upload</span>
                    </a>
                </b-upload>
                <div v-if="files && files.length" >
                    <span class="file-name">
                        {{ files[0].name }}
                    </span>
                </div>
            </b-field>
        </div>
<br>
    <label class="label" required v-if="$root.user.role==='Teacher'">Help students for free, or name your price<br>    </label>
        <b-field type="no-icon">
            <b-select placeholder="Currency" required v-model="currency">
                <option value="dollar">$</option>
                <option value="sterling">£</option>
                <option value="euro">€</option>
            </b-select>
            <b-input required type="number" min="0" max="10" step="1" v-model="price" placeholder="0" style="width: 90px"></b-input>
            <span style="font-weight: normal; margin-left: 10px; padding-top: 5px;">per minute</span>
        </b-field>
    </label>

<br>
            <button class="button is-success">Update your information</button>
            <p v-if="okMessage"> Update successful</p>
        </form>
    </div>
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
              'JavaScript',
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
            currency: null,
            error: null,
            user: '',
            okMessage: false,
            gitHubUrl: '',
            linkedInUrl: '',
            personalWebsiteUrl: '',
            twitterUrl: '',

            role: this.$root.user.role,

            files: [],
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
        console.log('this teacher update triggers')
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
        console.log('testing', typeof this.image)
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
    width: 500px;
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
.page-body {
    width: 500px;
    margin: 0 auto;
}

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

  .field {
    text-align: left;
  }

</style>
