<style lang="scss">
@import url(../../assets/styles/2dTransition.css);

.part {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;

  & > .sg-card {
    box-sizing: border-box;
    height: 100%;
  }
}
.sg-card {
  max-width: calc(25% - 2rem);
  flex: 1 0 calc(25% - 2rem);
  align-self: stretch;

  box-sizing: border-box;
  margin: 1rem;
}

@media screen and (max-width: 992px) {
  .sg-card {
    max-width: calc(33% - 2rem);
    flex: 1 0 calc(33% - 2rem);
  }
}

@media screen and (max-width: 768px) {
  .sg-card {
    max-width: calc(50% - 2rem);
    flex: 1 0 calc(50% - 2rem);
  }
}

@media screen and (max-width: 480px) {
  .sg-card {
    max-width: calc(100% - 2rem);
    flex: 1 0 calc(100% - 2rem);
  }
}
</style>

<template>
  <section class="part">
    <template v-for="(item, index) in codes" :key="index">
      <SgCard
        :title="item.title"
        :code="item.code"
        :className="item.className"
      />
    </template>
  </section>
</template>

<script setup>
import SgCard from "../../components/SgCard.vue";

const codes = {};

Object.assign(codes, {
  grow: {
    title: "放大",
    className: "grow",
    code: `
.grow {
  transform: scale(1);

  transition: transform 0.3s;
}

.grow:hover {
  transform: scale(1.05);
}
`,
  },
  shrink: {
    title: "缩小",
    className: "shrink",
    code: `
.shrink {
  transform: scale(1);

  transition: transform 0.3s;
}

.shrink:hover {
  transform: scale(0.95);
}
`,
  },
  pulse: {
    title: "心跳",
    className: "pulse",
    code: `
.pulse:hover {
  transform: scale(0.9);
  animation: pulse infinite 0.75s;
}

@keyframes pulse {
  50% {
    transform: scale(1.1);
  }
}
`,
  },
  pulseGrow: {
    title: "脉冲-放大",
    className: "pulse-grow",
    code: `
.pulse-grow:hover {
  animation: pulse-grow infinite 0.75s;
}
@keyframes pulse-grow {
  50% {
    transform: scale(1.1);
  }
}
`,
  },
  pulseShrink: {
    title: "心跳-缩小",
    className: "pulse-shrink",
    code: `
.pulse-shrink:hover {
  animation: pulse-shrink infinite 0.75s;
}
@keyframes pulse-shrink {
  50% {
    transform: scale(0.9);
  }
}
`,
  },
  press: {
    title: "按压/点击",
    className: "press",
    code: `
.press:hover {
  animation: press 0.45s;
}
@keyframes press {
  50% {
    transform: scale(0.8);
  }
}
`,
  },
  pop: {
    title: "弹起",
    className: "pop",
    code: `
.pop:hover {
  animation: pop 0.45s;
}
@keyframes pop {
  50% {
    transform: scale(1.2);
  }
}
`,
  },
  bounceIn: {
    title: "小跳跃-放大",
    className: "bounceIn",
    code: `
.pop:hover {
  animation: pop 0.45s;
}
@keyframes pop {
  50% {
    transform: scale(1.2);
  }
}
`,
  },
  bounceOut: {
    title: "小跳跃-缩小",
    className: "bounceOut",
    code: `
.bounceOut {
  transition: transform 0.3s;
}
.bounceOut:hover {
  transform: scale(0.8);
  animation: bounceOut 0.7s ease-in-out;
  animation-delay: 0.2s;
}
@keyframes bounceOut {
  25% {
    transform: scale(0.9);
  }

  50% {
    transform: scale(0.8);
  }

  75% {
    transform: scale(0.85);
  }

  100% {
    transform: scale(0.8);
  }
}
`,
  },
  rightRotate: {
    title: "右旋转",
    className: "rightRotate",
    code: `
.rightRotate {
  transition: transform 0.3s;
}
.rightRotate:hover {
  transform: rotate(5deg);
}
`,
  },
  growRotate: {
    title: "右旋转-变大",
    className: "growRotate",
    code: `
.leftRotate {
  transition: transform 0.3s;
}
.leftRotate:hover {
  transform: rotate(-15deg);
}
`,
  },
  float: {
    title: "上浮",
    className: "float",
    code: `
.float {
  transition: transform 0.3s;
}
.float:hover {
  transform: translateY(-20%);
}
`,
  },
  sink: {
    title: "下沉",
    className: "sink",
    code: `
.sink {
  transition: transform 0.3s;
}
.sink:hover {
  transform: translateY(20%);
}
`,
  },
  bob: {
    title: "上浮-飘动",
    className: "bob",
    code: `
.bob {
  transition: transform 0.3s;
}
.bob:hover {
  transform: translateY(-20%);

  animation: bob infinite 1.5s linear;
  animation-delay: 0.3s;
}

@keyframes bob {
  25% {
    transform: translateY(-15%);
  }

  75% {
    transform: translateY(-25%);
  }
}
`,
  },
  hang: {
    title: "下沉-飘动",
    className: "hang",
    code: `
.hang {
  transition: transform 0.3s;
}
.hang:hover {
  transform: translateY(20%);

  animation: hang infinite 1.5s linear;
  animation-delay: 0.3s;
}

@keyframes hang {
  25% {
    transform: translateY(15%);
  }

  75% {
    transform: translateY(25%);
  }
}
`,
  },
  skewForward: {
    title: "倾斜-向前",
    className: "skewForward",
    code: `
.skewForward {
  transform-origin: center bottom;
  transition: transform 0.3s;
}
.skewForward:hover {
  transform: skewX(-20deg);
}
    `,
  },
  skewBackward: {
    title: "倾斜-向后",
    className: "skewBackward",
    code: `
.skewBackward {
  transform-origin: center bottom;
  transition: transform 0.3s;
}
.skewBackward:hover {
  transform: skewX(20deg);
}
    `,
  },
  wobbleHorizontal: {
    title: "摆动-水平",
    className: "wobbleHorizontal",
    code: `

.wobbleHorizontal:hover {
  animation: wobbleHorizontal 0.75s;
}

@keyframes wobbleHorizontal {
  0% {
    transform: translateX(-20%);
  }
  20% {
    transform: translateX(15%);
  }
  40% {
    transform: translateX(-10%);
  }
  60% {
    transform: translateX(5%);
  }
  80% {
    transform: translateX(-2.5%);
  }
  100% {
    transform: translateX(0%);
  }
}
    `,
  },
  wobbleVertical: {
    title: "摆动-垂直",
    className: "wobbleVertical",
    code: `
.wobbleVertical:hover {
  animation: wobbleVertical 0.75s;
}

@keyframes wobbleVertical {
  0% {
    transform: translateY(-20%);
  }
  20% {
    transform: translateY(15%);
  }
  40% {
    transform: translateY(-10%);
  }
  60% {
    transform: translateY(5%);
  }
  80% {
    transform: translateY(-2.5%);
  }
  100% {
    transform: translateY(0%);
  }
}
    `,
  },
  wobbleToBottomRight: {
    title: "摆动-右下方向",
    className: "wobbleToBottomRight",
    code: `
.wobbleToBottomRight:hover {
  animation: wobbleToBottomRight 0.75s;
}

@keyframes wobbleToBottomRight {
  0% {
    transform: translateY(-10%) translateX(-10%);
  }
  20% {
    transform: translateY(8%) translateX(8%);
  }
  40% {
    transform: translateY(-6%) translateX(-6%);
  }
  60% {
    transform: translateY(4%) translateX(4%);
  }
  80% {
    transform: translateY(-2%) translateX(-2%);
  }
  100% {
    transform: translateY(0%) translateX(0%);
  }
}
    `,
  },
  wobbleToTopRight: {
    title: "摆动-右上方向",
    className: "wobbleToTopRight",
    code: `
.wobbleToTopRight:hover {
  animation: wobbleToTopRight 0.75s;
}

@keyframes wobbleToTopRight {
  0% {
    transform: translateY(-10%) translateX(10%);
  }
  20% {
    transform: translateY(8%) translateX(-8%);
  }
  40% {
    transform: translateY(-6%) translateX(6%);
  }
  60% {
    transform: translateY(4%) translateX(-4%);
  }
  80% {
    transform: translateY(-2%) translateX(2%);
  }
  100% {
    transform: translateY(0%) translateX(0%);
  }
}
    `,
  },
  puddingTop: {
    title: "布丁摆-底部固定",
    className: "puddingTop",
    code: `
.puddingTop:hover {
  transform-origin: center bottom;
  animation: puddingTop 0.75s;
}

@keyframes puddingTop {
  0% {
    transform: skewX(15deg);
  }
  20% {
    transform: skewX(-12deg);
  }
  40% {
    transform: skewX(9deg);
  }
  60% {
    transform: skewX(-6deg);
  }
  80% {
    transform: skewX(3deg);
  }
  100% {
    transform: skewX(0deg);
  }
}
    `,
  },
  puddingBottom: {
    title: "布丁摆-顶部固定",
    className: "puddingBottom",
    code: `
.puddingBottom:hover {
  transform-origin: center top;
  animation: puddingBottom 0.75s;
}

@keyframes puddingBottom {
  0% {
    transform: skewX(15deg);
  }
  20% {
    transform: skewX(-12deg);
  }
  40% {
    transform: skewX(9deg);
  }
  60% {
    transform: skewX(-6deg);
  }
  80% {
    transform: skewX(3deg);
  }
  100% {
    transform: skewX(0deg);
  }
}
    `,
  },
  wobbleSkew: {
    title: "摇摆-倾斜",
    className: "wobbleSkew",
    code: `
.wobbleSkew:hover {
  animation: wobbleSkew 0.75s;
}

@keyframes wobbleSkew {
  0% {
    transform: skewX(15deg);
  }
  20% {
    transform: skewX(-12deg);
  }
  40% {
    transform: skewX(9deg);
  }
  60% {
    transform: skewX(-6deg);
  }
  80% {
    transform: skewX(3deg);
  }
  100% {
    transform: skewX(0deg);
  }
}
    `,
  },
  buzz: {
    title: "抖动",
    className: "buzz",
    code: `
.buzz:hover {
  animation: buzz 0.15s infinite;
}

@keyframes buzz {
  25% {
    transform: skewX(-5deg);
  }

  75% {
    transform: skewX(5deg);
  }
}
    `,
  },
  buzzOut: {
    title: "抖动-寸止",
    className: "buzzOut",
    code: `

.buzzOut:hover {
  animation: buzzOut 0.5s;
}

@keyframes buzzOut {
  0% {
    transform: skewX(10deg);
  }

  20% {
    transform: skewX(-8deg);
  }

  40% {
    transform: skewX(6deg);
  }

  60% {
    transform: skewX(-4deg);
  }

  80% {
    transform: skewX(2deg);
  }

  100% {
    transform: skewX(0deg);
  }
}
    `,
  },
  forward: {
    title: "偏移-向右",
    className: "forward",
    code: `
.forward {
  transition: transform 0.3s;
}
.forward:hover {
  transform: translateX(20%);
}
    `,
  },
  backward: {
    title: "偏移-向左",
    className: "backward",
    code: `
.backward {
  transition: transform 0.3s;
}
.backward:hover {
  transform: translateX(-20%);
}
    `,
  },
});
</script>
