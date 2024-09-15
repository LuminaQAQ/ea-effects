<template>
  <!-- <my-route to="/">首页</my-route> -->
  <my-route to="/2DTransitions">Hover | 2D 过渡动画</my-route>
  <my-route to="/backgroundTransitions">Hover | 背景过渡动画</my-route>
  <my-route to="/about">AboutView</my-route>
</template>

<script setup>
import { defineComponent } from "vue";
import MyRoute from "./MyRoute.vue";

defineComponent({
  name: "Router",
});
</script>
