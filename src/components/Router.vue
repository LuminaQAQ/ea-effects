<template>
  <my-route to="/">CSS调试器</my-route>
  <my-route to="/about">AboutView</my-route>
</template>

<script setup>
import { defineComponent } from "vue";
import MyRoute from "./MyRoute.vue";

defineComponent({
  name: "Router",
});
</script>
