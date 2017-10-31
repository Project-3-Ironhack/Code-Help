<template>
  <div>
    <h1>Let's start your lesson!</h1>
    <!-- <a href="javascript:tagoveApp.max()">Click here to chat with your teacher</a> -->
<<<<<<< HEAD
    <!-- <a href="javascript:tagoveApp.max()"></a> -->
    <span @click="endLesson">End lesson</span>
=======
>>>>>>> ad85e4bec0986260da09ac7212fca50dd22320b5
    <br>
    <h3>Select a language below to use our code editor</h3>

    <!-- <select v-model="lang">
      <option disabled value="">Please select one</option>
      <option>JavaScript</option>
      <option>HTML</option>
      <option>CSS</option>
    </select>
    <span>Selected: {{ lang }}</span>
    <br>
    <br>

    <AceEditor :lang="lang.toLowerCase()"></AceEditor>
      <br> -->

    <codemirror v-model="code" :options="editorOptions"></codemirror>
      <br>

    <textarea class="own-text-editor" rows="40" cols="90"></textarea>
  </div>
</template>

<script>

import AceEditor from '@/components/Editor'
import { codemirror, CodeMirror } from 'vue-codemirror'
import 'codemirror/keymap/sublime';
import apiSessions from '@/api/sessions';

export default {

  // start of code mirror
  data () {
    return {
      session: '',
      code: 'const a = 10',
      editorOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'cobalt',
        lineNumbers: true,
        line: true,

        // lang: '',

        // 高级配置（需要引入对应的插件包）,codemirror advanced options(You need to manually introduce the corresponding codemirror function script code)
        // sublime、emacs、vim三种键位模式，支持你的不同操作习惯
        keyMap: "sublime",
        // 按键映射，比如Ctrl键映射autocomplete，autocomplete是hint代码提示事件
        extraKeys: { "Ctrl": "autocomplete" },
        // 代码折叠
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        // 选中文本自动高亮，及高亮方式
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
        // more codemirror options...
        // 如果有hint方面的配置，也应该出现在这里
      }
    }
  },
  methods: {
    onEditorReady(editor) {
      console.log('the editor is readied!', editor)
    },
    onEditorFocus(editor) {
      console.log('the editor is focus!', editor)
    },
    onEditorCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
    },
    endLesson() {
      const id = this.$route.params[0]
      apiSessions.endSession(id).then(session => {
        console.log("session from view:", session.data.response)
        this.session = session.data.response;
        console.log("this.session:", this.session._id)
      }).then(() => {
        this.$router.push('/lesson-summary/' + this.session._id)
      })
    }
  },
  computed: {
    editor() {
      return this.$refs.myEditor.editor
    }
  },
  mounted() {
    console.log('this is current editor object', this.editor)
    // you can use this.editor to do something...
  },
  components: {
    codemirror, CodeMirror,
    // AceEditor,
  },
  // end of code mirror

//Ace Editor
  // components: { AceEditor },
  // data () {
  //   return {
  //     lang: '',
  //   }
  // }
created(){
  tagoveApp.max();
}
}


</script>

<style>
.own-text-editor{
    background: url(http://i.imgur.com/2cOaJ.png);
    background-attachment: local;
    background-repeat: no-repeat;
    padding-left: 35px;
    padding-top: 10px;
    border-color:#ccc;
}
</style>
