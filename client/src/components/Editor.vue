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
      this.editor.setValue('Type or paste your code here')
      await import(`brace/mode/${this.lang}`)
      this.editor.getSession().setMode(`ace/mode/${this.lang}`)
  },
  watch: {
      async lang (lang) {
          await import(`brace/mode/${lang}`)
          this.editor.getSession().setMode(`ace/mode/${lang}`)
          if(this.lang === 'javascript'){
          this.editor.setValue('//Type or paste your code here')
          };
          if(this.lang === 'html'){
          this.editor.setValue(`<!DOCTYPE html>
<!--  Type or paste your code here  -->`)
          };
          if(this.lang === 'css'){
          this.editor.setValue('/*  Type or paste your code here  */')
          };
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
