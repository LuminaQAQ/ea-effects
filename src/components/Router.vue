<template>
  <!-- <my-route to="/">首页</my-route> -->
  <my-route to="/2DTransitions">Hover | 2D 过渡动画</my-route>
  <my-route to="/backgroundTransitions">
    Hover | 背景（background）过渡动画
  </my-route>
  <my-route to="/borderTransitions">Hover | 边框（border）过渡动画</my-route>
  <my-route to="/shadowAndGlowTransitions">
    Hover | 阴影（box-shadow）过渡动画
  </my-route>
  <my-route to="/about">AboutView</my-route>
</template>

<script setup>
import { defineComponent } from "vue";
import MyRoute from "./MyRoute.vue";

defineComponent({
  name: "Router",
});
</script>
