webpackJsonp([7],{"/Uby":function(e,t,r){"use strict";function n(e){r("ocis")}var a=r("cZxk"),o=r("poz5"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},"/v0t":function(e,t,r){"use strict";function n(e){r("cr+D")}var a=r("wdZb"),o=r("JBJb"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},"0VBK":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Welcome to your Dashboard, "+e._s(e.userName)+"!")]),e._v(" "),"Teacher"!==e.$root.user.role||e.user.name&&e.user.description&&e.user.image&&e.user.price?e._e():r("teacher-info"),e._v(" "),"Student"===e.$root.user.role?r("search-bar",{model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}):e._e(),e._v(" "),r("search-results",{attrs:{query:e.query}})],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},"4PLH":function(e,t,r){"use strict";function n(e){r("lmoD")}var a=r("yGSC"),o=r("0VBK"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},"4ZN9":function(e,t,r){"use strict";function n(e){r("t7AR")}var a=r("nWmR"),o=r("VlN8"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},"66Fd":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vue-brace"})},a=[],o={render:n,staticRenderFns:a};t.a=o},"880T":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(t){t.preventDefault(),e.login(t)}}},[r("label",[e._v("Username\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),r("br"),e._v(" "),r("label",[e._v("Password\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("br"),e._v(" "),r("button",{attrs:{type:"submit",name:"button"}},[e._v("Log in")])]),e._v(" "),e.error?r("div",{staticClass:"error-message"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e(),e._v("\n  Don't have an account? "),r("router-link",{attrs:{to:"/signup"}},[e._v("Click here to sign up.")])],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},B0BH:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",[e._v("\n  "+e._s(e.result.name)+"\n")])},a=[],o={render:n,staticRenderFns:a};t.a=o},B2fo:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(t){t.preventDefault(),e.signup(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],attrs:{type:"radio",id:"student",value:"Student"},domProps:{checked:e._q(e.role,"Student")},on:{change:function(t){e.role="Student"}}}),e._v(" "),r("label",{attrs:{for:"one"}},[e._v("Student")]),e._v(" "),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.role,expression:"role"}],attrs:{type:"radio",id:"teacher",value:"Teacher"},domProps:{checked:e._q(e.role,"Teacher")},on:{change:function(t){e.role="Teacher"}}}),e._v(" "),r("label",{attrs:{for:"two"}},[e._v("Teacher")]),e._v(" "),r("br"),e._v(" "),r("span",[e._v("Role: "+e._s(e.role))]),e._v(" "),r("br"),e._v(" "),r("label",[e._v("Username\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),r("br"),e._v(" "),r("label",[e._v("Name\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("br"),e._v(" "),r("label",[e._v("Password\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("br"),e._v(" "),r("button",{attrs:{type:"submit",name:"button"}},[e._v("Sign up")])]),e._v(" "),e.error?r("div",{staticClass:"error-message"},[e._v("\n    "+e._s(e.error)+"\n  ")]):e._e(),e._v("\n  Already have an account? "),r("router-link",{attrs:{to:"/login"}},[e._v("Click here to log in.")])],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},CPk2:function(e,t){},"CRO/":function(e,t,r){"use strict";function n(e){r("xzbz")}var a=r("ENvD"),o=r("B0BH"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},ENvD:function(e,t,r){"use strict";t.a={props:["result"]}},FX9o:function(e,t){},H5KK:function(e,t){},HFfC:function(e,t,r){"use strict";var n=r("o3g8");t.a={data:function(){return{name:"ggg",description:"",skills:"",image:"",price:"",error:null,user:""}},computed:{userName:function(){return this.$root.user.name.charAt(0).toUpperCase()+this.$root.user.name.slice(1)}},methods:{teacherUpdate:function(){var e=this;this.error=null;var t=this.$root.user._id;n.a.teacherUpdate(t,this.name,this.description,this.image,this.price).then(function(t){e.$router.push("/dashboard")}).catch(function(t){e.error=error.response})}},created:function(){var e=this,t=this.$root.user._id;n.a.getTeacherById(t).then(function(t){e.user=t})}}},HYGe:function(e,t,r){"use strict";function n(e){r("uGwW")}var a=r("rkeC"),o=r("Rvns"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},JBJb:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Let's start your lesson!")]),e._v(" "),r("a",{attrs:{href:"javascript:tagoveApp.max()"}},[e._v("Click here to chat with your teacher")]),e._v(" "),r("br"),e._v(" "),r("h2",[e._v("Select a language below to use our code editor")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.lang,expression:"lang"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.lang=t.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}},[e._v("Please select one")]),e._v(" "),r("option",[e._v("JavaScript")]),e._v(" "),r("option",[e._v("HTML")]),e._v(" "),r("option",[e._v("CSS")])]),e._v(" "),r("span",[e._v("Selected: "+e._s(e.lang))]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("AceEditor",{attrs:{lang:e.lang.toLowerCase()}})],1)},a=[],o={render:n,staticRenderFns:a};t.a=o},K3i7:function(e,t){},M93x:function(e,t,r){"use strict";function n(e){r("FX9o")}var a=r("xJD8"),o=r("MTSB"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},MTSB:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[r("div",{staticClass:"navbar-brand"},[r("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e._v("\n      Code Help\n    ")]),e._v(" "),e.$root.user?r("router-link",{staticClass:"navbar-item",attrs:{to:"/account"}},[e._v("\n      "+e._s(e.userName)+"'s Account\n    ")]):e._e(),e._v(" "),r("router-link",{staticClass:"navbar-item",attrs:{to:"/lesson"}},[e._v("\n      Lesson\n    ")]),e._v(" "),e.$root.user?r("a",{staticClass:"navbar-item",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.logout(t)}}},[e._v("\n      Logout\n    ")]):e._e()],1)]),e._v(" "),r("section",{staticClass:"content"},[r("router-view")],1),e._v(" "),e._m(0)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"container"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("strong",[e._v("Code Help")]),e._v(" by Stuart & Thibaut.\n      ")])])])])}],o={render:n,staticRenderFns:a};t.a=o},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),a=r("M93x"),o=r("YaEn"),s=r("Pfph"),i=r("MMSg"),u=r.n(i),c=r("doPI");r.n(c);n.a.use(u.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a},data:{user:null},created:function(){s.a.checkUser(this.$root)}})},PR8a:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Hello "+e._s(e.userName)+", and welcome to Code Help!")]),e._v(" "),e._m(0),e._v(" "),r("form",{on:{submit:function(t){t.preventDefault(),e.teacherUpdate(t)}}},[r("label",[e._v("Your name\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),r("br"),e._v(" "),r("label",[e._v("Introduce yourself\n            "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],attrs:{rows:"6",cols:"30",required:"",placeholder:"Tell us about yourself..."},domProps:{value:e.description},on:{input:function(t){t.target.composing||(e.description=t.target.value)}}})]),r("br"),e._v(" "),r("label",[e._v("Areas of expertise\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.skills,expression:"skills"}],attrs:{type:"text",required:""},domProps:{value:e.skills},on:{input:function(t){t.target.composing||(e.skills=t.target.value)}}})]),r("br"),e._v(" "),r("label",[e._v("Upload your photo\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.image,expression:"image"}],attrs:{type:"text",required:""},domProps:{value:e.image},on:{input:function(t){t.target.composing||(e.image=t.target.value)}}})]),r("br"),e._v(" "),r("label",[e._v("Your price per minute\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{type:"number",required:""},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}})]),r("br"),e._v(" "),r("button",[e._v("Update your information")])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Before we unleash your talents on our students, we need to get to know you a little better."),r("br"),e._v("Please fill out the questions, below.")])}],o={render:n,staticRenderFns:a};t.a=o},Pfph:function(e,t,r){"use strict";function n(e){var t=e.token,r=e.user;i.a.defaults.headers.common.Authorization="Bearer "+t,localStorage.setItem("token",t),localStorage.setItem("user",o()(r))}var a=r("mvHQ"),o=r.n(a),s=r("mtWM"),i=r.n(s),u=i.a.create({baseURL:"/api"}),c={signup:function(e){return u.post("/signup",e).then(function(e){return e.data})},login:function(e,t,r){return u.post("/login",{username:e,password:t}).then(function(e){return n(e.data),r.user=e.data.user,e.data})},checkUser:function(e){var t=localStorage.getItem("token"),r=localStorage.getItem("user");if(t&&r){var a=JSON.parse(r);n({token:t,user:a}),e.user=a}},logout:function(e){localStorage.removeItem("token"),e.user=null,delete i.a.defaults.headers.common.Authorization}};t.a=c},QRL1:function(e,t,r){"use strict";var n=r("Pfph");t.a={data:function(){return{role:"",username:"",password:"",name:"",error:null}},methods:{signup:function(){var e=this;this.error=null,n.a.signup({role:this.role,username:this.username,name:this.name,password:this.password}).then(function(){e.$router.push("/login")}).catch(function(t){e.error=t.response.data.error.message})}}}},Rvns:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Welcome to your account")])])}],o={render:n,staticRenderFns:a};t.a=o},VlN8:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.queryResults,function(t){return e.query?r("div",[r("teacher-card",{attrs:{result:t}})],1):r("div",[r("ul",e._l(e.teachers,function(t){return r("li",[e._v(e._s(t.name))])}))])}))},a=[],o={render:n,staticRenderFns:a};t.a=o},VnmG:function(e,t){},YBtj:function(e,t){},YaEn:function(e,t,r){"use strict";var n=r("7+uW"),a=r("/ocq"),o=r("ys7F"),s=r("tYer"),i=r("fpQY"),u=r("4PLH"),c=r("/v0t"),l=r("HYGe"),v=r("Pfph");n.a.use(a.a);var d=new a.a({mode:"history",routes:[{path:"/",component:o.a,beforeEnter:function(e,t,r){localStorage.token?r("/dashboard"):r()}},{path:"/signup",component:s.a,beforeEnter:function(e,t,r){localStorage.token?r("/dashboard"):r()}},{path:"/login",component:i.a,beforeEnter:function(e,t,r){localStorage.token?r("/dashboard"):r()}},{path:"/dashboard",component:u.a,meta:{requiresAuth:!0}},{path:"/lesson",component:c.a,meta:{requiresAuth:!0}},{path:"/account",component:l.a,meta:{requiresAuth:!0}}]});d.beforeEach(function(e,t,r){if(e.meta.requiresAuth&&(v.a.checkUser(d.app.$root),!d.app.$root.user))return r({path:"/login",query:{redirect:encodeURIComponent(e.fullPath)}});r()}),t.a=d},"aek+":function(e,t,r){"use strict";function n(e){r("CPk2")}var a=r("pIzI"),o=r("66Fd"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,"data-v-6a4cf1f6",null);t.a=u.exports},cFkf:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),e._v("\n  Ready to get started? Click here to "),r("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")]),r("br"),e._v("\n  Already have an account? Click here to "),r("router-link",{attrs:{to:"/login"}},[e._v("Log In")])],1)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Welcome to Code Help")]),e._v(" "),r("h2",[e._v("Learn to code with experts from around the world")])])}],o={render:n,staticRenderFns:a};t.a=o},cZxk:function(e,t,r){"use strict";r("o3g8");t.a={data:function(){return{teachers:[],queryResults:[]}},props:["value"]}},"cr+D":function(e,t){},doPI:function(e,t){},eW03:function(e,t,r){"use strict";function n(e){r("VnmG")}var a=r("HFfC"),o=r("PR8a"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},fpQY:function(e,t,r){"use strict";function n(e){r("H5KK")}var a=r("nlR8"),o=r("880T"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},ju5Z:function(e,t,r){function n(e){var t=a[e];return t?Promise.all(t.slice(1).map(r.e)).then(function(){return r(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var a={"./css":["33AR",5],"./css.js":["33AR",5],"./html":["hCU/"],"./html.js":["hCU/"],"./html_elixir":["5ULU",4],"./html_elixir.js":["5ULU",4],"./html_ruby":["U5p+",3],"./html_ruby.js":["U5p+",3],"./javascript":["h636",2],"./javascript.js":["h636",2],"./rhtml":["kKuj",1],"./rhtml.js":["kKuj",1],"./scss":["aoJI",0],"./scss.js":["aoJI",0]};n.keys=function(){return Object.keys(a)},n.id="ju5Z",e.exports=n},kWpI:function(e,t,r){"use strict";t.a={}},lmoD:function(e,t){},nWmR:function(e,t,r){"use strict";var n=r("CRO/"),a=r("o3g8");t.a={data:function(){return{teachers:[],queryResults:[]}},components:{TeacherCard:n.a},props:["query"],created:function(){var e=this;a.a.getAll().then(function(t){console.log("TEACHERS:",t),e.teachers=t}).then(window.addEventListener("keyup",this.searchTeachers))},methods:{searchTeachers:function(){var e={keys:["name","skills.name"]},t=new Fuse(this.teachers,e);console.log("OPTIONS: ",e),console.log("FUSE EXECUTED WITh THIS QUERY:",this.query),console.log("EXECUTING FUSE SEARCH: ",t.search(this.query)),console.log(t),this.queryResults=t.search(this.query)},computed:{search:function(e){return console.log("hello"),this.searchTeachers()}}}}},nlR8:function(e,t,r){"use strict";var n=r("Pfph");t.a={data:function(){return{username:"",password:"",error:null}},methods:{login:function(){var e=this;this.error=null,n.a.login(this.username,this.password,this.$root).then(function(t){e.$router.push("/dashboard")}).catch(function(t){e.error=t.response.data.error})}}}},o3g8:function(e,t,r){"use strict";var n=r("mtWM"),a=r.n(n),o=a.a.create({baseURL:"/api"}),s={getAll:function(){return o.get("/users").then(function(e){return e.data})},getTeacherById:function(e){return o.get("/teacher/"+e).then(function(e){return e.data})},teacherUpdate:function(e,t,r,n,a){return o.patch("/teacher/:id",{id:e,name:t,description:r,image:n,price:a}).then(function(e){return e.data}).catch(function(e){console.error(e)})}};t.a=s},ocis:function(e,t){},pIzI:function(e,t,r){"use strict";var n=r("Xxa5"),a=r.n(n),o=r("exGp"),s=r.n(o),i=r("kX7f"),u=r.n(i),c=r("Dukv"),l=(r.n(c),r("hCU/"));r.n(l);t.a={data:function(){return{}},props:{lang:{String:String,required:!0}},mounted:function(){var e=this;return s()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.editor=u.a.edit(e.$el),e.editor.$blockScrolling=1/0,e.editor.setTheme("ace/theme/chrome"),e.editor.setValue("Select a language above and then let's start coding!"),t.next=6,r("ju5Z")("./"+e.lang);case 6:e.editor.getSession().setMode("ace/mode/"+e.lang);case 7:case"end":return t.stop()}},t,e)}))()},watch:{lang:function(e){var t=this;return s()(a.a.mark(function n(){var o;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.editor.getValue(),n.next=3,r("ju5Z")("./"+e);case 3:t.editor.getSession().setMode("ace/mode/"+e);case 4:case"end":return n.stop()}},n,t)}))()}}}},poz5:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"field"},[r("label",{staticClass:"label"},[r("h2",[e._v("Let's find you a teacher!")]),e._v(" "),r("div",{staticClass:"control"},[r("input",{staticClass:"input",attrs:{type:"text",placeholder:"ask us anything: language, teacher..."},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value)}}})])])]),e._v(" "),r("div",{staticClass:"field is-grouped"},[r("div",{staticClass:"control"},[r("button",{staticClass:"button is-primary"},[e._v("Search")]),e._v(" "),e._l(e.queryResults,function(t){return r("div",[e._v("\n      Teacher: "+e._s(t.name)+"\n      Skills: "+e._s(t.skills[0].name)+"\n      ")])})],2)])])},a=[],o={render:n,staticRenderFns:a};t.a=o},rkeC:function(e,t,r){"use strict";t.a={data:function(){return{}}}},t7AR:function(e,t){},tYer:function(e,t,r){"use strict";function n(e){r("YBtj")}var a=r("QRL1"),o=r("B2fo"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports},uGwW:function(e,t){},wdZb:function(e,t,r){"use strict";var n=r("aek+");t.a={components:{AceEditor:n.a},data:function(){return{lang:""}}}},xJD8:function(e,t,r){"use strict";var n=r("Pfph");t.a={name:"app",methods:{logout:function(){n.a.logout(this.$root),this.$router.push("/")}},computed:{userName:function(){return this.$root.user.name.charAt(0).toUpperCase()+this.$root.user.name.slice(1)}}}},xzbz:function(e,t){},yGSC:function(e,t,r){"use strict";var n=r("/Uby"),a=r("4ZN9"),o=r("eW03"),s=r("o3g8");t.a={components:{SearchBar:n.a,TeacherInfo:o.a,SearchResults:a.a},data:function(){return{users:[],query:""}},created:function(){var e=this,t=this.$root.user._id;s.a.getTeacherById(t).then(function(t){e.user=t})},computed:{userName:function(){return this.$root.user.name.charAt(0).toUpperCase()+this.$root.user.name.slice(1)}}}},ys7F:function(e,t,r){"use strict";function n(e){r("K3i7")}var a=r("kWpI"),o=r("cFkf"),s=r("VU/8"),i=n,u=s(a.a,o.a,!1,i,null,null);t.a=u.exports}},["NHnr"]);
//# sourceMappingURL=app.3a0b458f93af68b72efc.js.map