<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.box {
  display: block;
  width: 7rem;
  padding: 1rem;
  margin: 0 auto;
  background-color: #ebeef5;
  cursor: pointer;
  text-align: center;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

<template>
  <div class="sg-card">
    <ea-card shadow="hover">
      <div slot="header" class="header">
        <span>{{ title }}</span>
      </div>
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
