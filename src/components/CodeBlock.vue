<style lang="scss">
.code {
  max-height: 10rem;
  min-height: 10rem;
}
</style>

<template>
  <pre>
        <code ref="codeBlock" :class="`code language-${type}`">
            {{ code }}
        </code>
    </pre>
</template>

<script>
import "highlight.js/styles/default.css";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import html from "highlight.js/lib/languages/vbscript-html";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", html);

export default {
  name: "CodeBlock",
  props: {
    code: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "css",
    },
  },
  mounted() {
    this.highlightCode();
  },
  methods: {
    highlightCode() {
      const codeBlock = this.$refs.codeBlock;
      hljs.highlightElement(codeBlock);
    },
  },
};
</script>
