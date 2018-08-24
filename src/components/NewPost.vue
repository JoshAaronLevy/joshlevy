/* eslint-disable */
<template>
  <div class="container">
    <vue-ckeditor 
      v-model="content" 
      :config="config" 
      @blur="onBlur($event)" 
      @focus="onFocus($event)"
    />
  </div>
</template>

<script>
import VueCkeditor from 'vue-ckeditor2';

export default {
  name: 'NewPost',
  components: { VueCkeditor },
  data() {
    return {
      content: '',
      config: {
        toolbar: [
          [
            'Font',
            'Format',
            'FontSize',
            '-',
            'Cut',
            'Copy',
            'Paste',
            'PasteText',
            '-',
            'Bold',
            'Italic',
            'Underline',
            '-',
            'NumberedList',
            'BulletedList',
            'Outdent',
            'Indent',
            '-',
            'Link',
            'Unlink',
            'Image',
            'SpecialChar',
            'Source'
          ]
        ],
        height: 300
      }
    };
  },
  methods: {
    onBlur(editor) {
      console.log(editor);
    },
    onFocus(editor) {
      console.log(editor);
    }
  }
};
</script>