<style lang="scss" scoped>
.aside-header::part(container) {
  border-bottom: 1px solid #cccccc93;
  width: 100%;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.aside-header {
  .logo {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;

    line-height: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .aside-title {
    line-height: 2;
    font-size: 1.2rem;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}

ea-aside::part(container) {
  box-shadow: 2px 0 5px 5px rgba(0, 0, 0, 0.138);

  transition: width 0.3s, box-shadow 0.3s;
}
</style>

<template>
  <ea-aside width="200">
    <ea-header class="aside-header">
      <div class="logo">
        <img src="../../public/favicon.ico" alt="" />
      </div>
      <b class="aside-title">ea-animation</b>
    </ea-header>
    <ea-menu mode="vertical">
      <Router />
    </ea-menu>
  </ea-aside>
</template>

<script setup>
import Router from "./Router.vue";

import "easy-component-ui/components/ea-container/index.js";
import "easy-component-ui/components/ea-aside/index.js";
import "easy-component-ui/components/ea-menu/index.js";
import { defineComponent } from "vue";

defineComponent({
  name: "MyAside",
});
</script>
