<style lang="scss">
@import url(../../assets/styles/specials.css);

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
</style>

<template>
  <section class="part">
    <template v-for="(item, index) in codes" :key="index">
      <SgCard
        :title="item.title"
        :code="item.code"
        :className="item.className"
        :hasButton="true"
      />
    </template>
  </section>
</template>

<script setup>
import SgCard from "../../components/SgCard.vue";
import "easy-component-ui/components/ea-button/index.js";

const codes = {
  hinge: {
    title: "铰链",
    className: "hinge",
    code: `
.hinge {
    animation: hinge 2.5s;
}

@keyframes hinge {
    0% {
        transform-origin: left top;
    }

    10% {
        transform: rotate(75deg);
    }

    20% {
        transform: rotate(45deg);
    }

    30% {
        transform: rotate(75deg);
    }

    40% {
        transform: rotate(60deg) translateY(0) translateX(0);
    }

    100% {
        transform-origin: left top;
        transform: rotate(60deg) translateY(500%) translateX(500%);
    }
}
`,
  },
  jackInTheBox: {
    title: "跳跳盒",
    className: "jackInTheBox",
    code: `
.jackInTheBox {
    animation: jackInTheBox .5s;
}

@keyframes jackInTheBox {
    0% {
        scale: 0;
    }

    20% {
        transform: rotate(15deg);
    }

    40% {
        transform: rotate(-10deg);
        scale: 1.2;
    }

    60% {
        transform: rotate(5deg);
    }

    100% {
        scale: 1;
    }
}
`,
  },
  rollIn: {
    title: "翻滚-进入",
    className: "rollIn",
    code: `
.rollIn {
    animation: rollIn 1s;
}

@keyframes rollIn {
    0% {
        transform-origin: left bottom;
        transform: translateX(-100%) rotate(-125deg);
    }

    100% {
        transform-origin: left bottom;
    }
}
`,
  },
  rollOut: {
    title: "翻滚-退出",
    className: "rollOut",
    code: `
.rollOut {
    animation: rollOut 1s;
}

@keyframes rollOut {
    0% {
        transform-origin: right bottom;
    }

    100% {
        transform-origin: right bottom;
        transform: translateX(100%) rotate(125deg);
    }
}
`,
  },
};
</script>
