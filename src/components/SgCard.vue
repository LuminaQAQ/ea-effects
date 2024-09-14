<style lang="scss">
.box {
  display: block;
  width: 5rem;
  padding: 1rem;
  margin: 0 auto;
  background-color: #ebeef5;
  cursor: pointer;
  text-align: center;

  white-space: nowrap;
}
</style>

<template>
  <div class="sg-card">
    <ea-card shadow="hover">
      <span :class="`box ${className}`">{{ title }}</span>
      <CodeBlock :code="code"></CodeBlock>
    </ea-card>
  </div>
</template>

<script setup>
import CodeBlock from "../components/CodeBlock.vue";
import "easy-component-ui/components/ea-card/index.js";
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Card",
  },
  code: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
});
</script>
