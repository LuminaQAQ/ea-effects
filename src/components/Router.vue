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
  <my-route to="/speechBubbles">Hover | 气泡框过渡动画</my-route>
  <my-route to="/curls">Hover | 折角过渡动画</my-route>
  <my-route to="/attentionSeekers">Animate | 吸引眼球动画</my-route>
  <my-route to="/backEntrancesAndBackExits">Animate | 后进后出动画</my-route>
  <my-route to="/bouncingEntrancesAndBouncingExits">
    Animate | 弹出弹入动画
  </my-route>
  <my-route to="/fadeInAndFadeOut"> Animate | 淡入淡出动画 </my-route>
  <my-route to="/flippers"> Animate | 翻转动画 </my-route>
  <my-route to="/lightspeed"> Animate | 光速动画 </my-route>
</template>

<script setup>
import { defineComponent } from "vue";
import MyRoute from "./MyRoute.vue";

defineComponent({
  name: "Router",
});
</script>
