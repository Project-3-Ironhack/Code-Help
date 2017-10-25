<template>
  <div class="vue-brace">
  </div>
</template>


<script>
import ace from 'brace'
import 'brace/theme/chrome'
import 'brace/mode/html'

export default {
    data(){
        return {

        };
    },
    props: {
        lang: {
            String,
            required: true
        }
    },
  async mounted () {
      this.editor = ace.edit(this.$el)
      this.editor.$blockScrolling = Infinity
      this.editor.setTheme('ace/theme/chrome')
      this.editor.setValue(`Select a language above and then let's start coding!`)
      await import(`brace/mode/${this.lang}`)
      this.editor.getSession().setMode(`ace/mode/${this.lang}`)
  },
  watch: {
      async lang (lang) {
          let text = this.editor.getValue();
          await import(`brace/mode/${lang}`)
          this.editor.getSession().setMode(`ace/mode/${lang}`)
      }
  }
}
</script>

<style scoped>
.vue-brace {
    width: 50%;
    min-width: 300px;
    min-height: 400px;
}
</style>
