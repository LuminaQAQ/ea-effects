<style lang="scss" scoped>
ea-aside {
  background-color: #fafafa;

  transition: width 0.3s, box-shadow 0.3s;
}

.toggle-aside-btn {
  display: none;
}

@media screen and (max-width: 768px) {
  .container {
    &.open {
      .my-aside {
        width: 200px;
        box-shadow: 2px 0 5px 5px rgba(0, 0, 0, 0.138);

        z-index: 999;
      }

      .mask {
        position: fixed;
        left: 0;
        top: 0;

        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);

        z-index: 998;

        opacity: 1;
      }
    }
  }

  .my-aside {
    position: absolute;
    height: 100%;
    width: 0;
    overflow: hidden;
    box-shadow: none;
  }

  .toggle-aside-btn {
    display: contents;
    cursor: pointer;
  }

  .mask {
    opacity: 0;
    transition: opacity 0.3s;
  }
}
</style>

<template>
  <ea-container
    :class="`container ${isToggle ? 'open' : ''}`"
    direction="vertical"
  >
    <my-aside :class="`my-aside`"></my-aside>
    <ea-container>
      <ea-header>
        <ea-icon
          icon="icon-th-list"
          class="toggle-aside-btn"
          @click="isToggle = !isToggle"
        ></ea-icon>
        <section class="mask" @click="isToggle = !isToggle"></section>
      </ea-header>
      <ea-main>
        <RouterView />
      </ea-main>
    </ea-container>
  </ea-container>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import { ref, watch } from "vue";

import MyAside from "./components/MyAside.vue";

import "easy-component-ui/components/ea-container/index.js";
import "easy-component-ui/components/ea-header/index.js";
import "easy-component-ui/components/ea-footer/index.js";
import "easy-component-ui/components/ea-aside/index.js";
import "easy-component-ui/components/ea-main/index.js";
import "easy-component-ui/components/ea-menu/index.js";
import "easy-component-ui/components/ea-icon/index.js";

let isToggle = ref(false);

const route = useRoute();
watch(route, () => {
  isToggle.value = false;
});
</script>
