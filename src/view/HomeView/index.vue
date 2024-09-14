<style lang="scss">
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
  max-width: 25%;
  flex: 1 0 25%;
  align-self: stretch;
}

@media screen and (max-width: 992px) {
  .sg-card {
    max-width: 33%;
    flex: 1 0 33%;
  }
}

@media screen and (max-width: 768px) {
  .sg-card {
    max-width: 50%;
    flex: 1 0 50%;
  }
}

@media screen and (max-width: 480px) {
  .sg-card {
    max-width: 100%;
    flex: 1 0 100%;
  }
}
/* ------- grow 放大 ------- */
/* #region  */
.grow {
  transform: scale(1);

  transition: transform 0.3s;
}

.grow:hover {
  transform: scale(1.05);
}
/* #endregion */
/* ------- end  ------- */

/* ------- shrink 缩小 ------- */
/* #region  */
.shrink {
  transform: scale(1);

  transition: transform 0.3s;
}

.shrink:hover {
  transform: scale(0.95);
}
/* #endregion */
/* ------- end  ------- */

/* ------- pulse 心跳 ------- */
/* #region  */
.pulse:hover {
  transform: scale(0.9);
  animation: pulse infinite 0.75s;
}

@keyframes pulse {
  50% {
    transform: scale(1.1);
  }
}
/* #endregion */
/* ------- end  ------- */

/* ------- pulse-grow 脉冲-放大 ------- */
/* #region  */
.pulse-grow:hover {
  animation: pulse-grow infinite 0.75s;
}
@keyframes pulse-grow {
  50% {
    transform: scale(1.1);
  }
}
/* #endregion */
/* ------- end  ------- */

/* ------- pulse-shrink 脉冲-缩小 ------- */
/* #region  */
.pulse-shrink:hover {
  animation: pulse-shrink infinite 0.75s;
}
@keyframes pulse-shrink {
  50% {
    transform: scale(0.9);
  }
}
/* #endregion */
/* ------- end  ------- */

/* ------- press 按压 ------- */
/* #region  */
.press:hover {
  animation: press 0.45s;
}
@keyframes press {
  50% {
    transform: scale(0.8);
  }
}
/* #endregion */
/* ------- end  ------- */

/* ------- press 弹起 ------- */
/* #region  */
.pop:hover {
  animation: pop 0.45s;
}
@keyframes pop {
  50% {
    transform: scale(1.2);
  }
}
/* #endregion */
/* ------- end  ------- */

/* ------- bounce-in 小跳跃-放大 ------- */
/* #region  */
.bounceIn {
  transition: transform 0.3s;
}
.bounceIn:hover {
  transform: scale(1.2);
  animation: bounce-in 0.7s ease-in-out;
  animation-delay: 0.2s;
}
@keyframes bounce-in {
  25% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(1.2);
  }

  75% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1.2);
  }
}
/* #endregion */
/* ------- end  ------- */

/* ------- bounce-out 小跳跃-放大 ------- */
/* #region  */
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
/* #endregion */
/* ------- end  ------- */

/* ------- rightRotate 右旋转 ------- */
/* #region  */
.rightRotate {
  transition: transform 0.3s;
}
.rightRotate:hover {
  transform: rotate(5deg);
}
/* #endregion */
/* ------- end  ------- */

/* ------- growRotate 右旋转-变大 ------- */
/* #region  */
.growRotate {
  transition: transform 0.3s;
}
.growRotate:hover {
  transform: rotate(5deg) scale(1.1);
}
/* #endregion */
/* ------- end  ------- */

/* ------- float 上浮 ------- */
/* #region  */
.float {
  transition: transform 0.3s;
}
.float:hover {
  transform: translateY(-20%);
}
/* #endregion */
/* ------- end  ------- */

/* ------- sink 下沉 ------- */
/* #region  */
.sink {
  transition: transform 0.3s;
}
.sink:hover {
  transform: translateY(20%);
}
/* #endregion */
/* ------- end  ------- */

/* ------- bob 上浮-飘动 ------- */
/* #region  */
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
/* #endregion */
/* ------- end  ------- */

/* ------- hang 下沉-飘动 ------- */
/* #region  */
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
/* #endregion */
/* ------- end  ------- */
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

const codes = {
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
};
</script>
