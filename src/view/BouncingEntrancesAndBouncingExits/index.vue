<style lang="scss">
@import url(../../assets/styles/bouncingEntrancesAndBouncingExits.css);

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
  <h2>弹跳进入</h2>
  <section class="part">
    <template v-for="(item, index) in codesIn" :key="index">
      <SgCard
        :title="item.title"
        :code="item.code"
        :className="item.className"
        :hasButton="true"
      />
    </template>
  </section>
  <h2>弹跳退出</h2>
  <section class="part">
    <template v-for="(item, index) in codesOut" :key="index">
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

const codesIn = {
  bounceIn: {
    title: "弹跳出现",
    className: "bounceIn",
    code: `
.bounceIn {
    animation: bounceIn .75s;
}

@keyframes bounceIn {
    0% {
        filter: opacity(0);
        transform: scale(1.3);
    }

    20% {
        transform: scale(1);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`,
  },
  bounceInDown: {
    title: "弹跳出现-从上方",
    className: "bounceInDown",
    code: `
.bounceInDown {
    animation: bounceInDown .75s;
}

@keyframes bounceInDown {
    0% {
        transform: translateY(-500%);
    }

    20% {
        transform: scale(1) translateY(20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`,
  },
  bounceInLeft: {
    title: "弹跳出现-从左方",
    className: "bounceInLeft",
    code: `
.bounceInLeft {
    animation: bounceInLeft .75s;
}

@keyframes bounceInLeft {
    0% {
        transform: translateX(-500%);
    }

    20% {
        transform: scale(1) translateX(20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`,
  },
  bounceInTop: {
    title: "弹跳出现-从下方",
    className: "bounceInTop",
    code: `
.bounceInTop {
    animation: bounceInTop .75s;
}

@keyframes bounceInTop {
    0% {
        transform: translateY(500%);
    }

    20% {
        transform: scale(1) translateY(-20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`,
  },
  bounceInRight: {
    title: "弹跳出现-从右方",
    className: "bounceInRight",
    code: `
.bounceInRight {
    animation: bounceInRight .75s;
}

@keyframes bounceInRight {
    0% {
        transform: translateX(500%);
    }

    20% {
        transform: scale(1) translateX(-20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`,
  },
};

const codesOut = {
  bounceInRight: {
    title: "弹跳出现-从右方",
    className: "bounceInRight",
    code: `
.bounceInRight {
    animation: bounceInRight .75s;
}

@keyframes bounceInRight {
    0% {
        transform: translateX(500%);
    }

    20% {
        transform: scale(1) translateX(-20%);
    }

    40% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.1);
    }
}
`,
  },
  bounceOut: {
    title: "弹跳退出",
    className: "bounceOut",
    code: `
.bounceOut {
    animation: bounceOut .75s;
}

@keyframes bounceOut {

    20% {
        transform: scale(1);
    }

    40% {
        transform: scale(0.7);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(0.6);
    }

    100% {
        transform: scale(0);
    }
}
`,
  },
  bounceOutDown: {
    title: "弹跳退出-从上方",
    className: "bounceOutDown",
    code: `
.bounceOutDown {
    animation: bounceOutDown .75s;
}

@keyframes bounceOutDown {
    20% {
        transform: translateY(20%);
    }

    40% {
        transform: translateY(-10%);
    }

    60% {
        transform: translateY(10%);
    }

    100% {
        transform: translateY(-500%);
    }
}
`,
  },
  bounceOutLeft: {
    title: "弹跳退出-从左方",
    className: "bounceOutLeft",
    code: `
.bounceOutLeft {
    animation: bounceOutLeft .75s;
}

@keyframes bounceOutLeft {
    20% {
        transform: translateX(-20%);
    }

    40% {
        transform: translateX(10%);
    }

    60% {
        transform: translateX(-10%);
    }

    100% {
        transform: translateX(-500%);
    }
}
`,
  },
  bounceOutUp: {
    title: "弹跳退出-从下方",
    className: "bounceOutUp",
    code: `
.bounceOutUp {
    animation: bounceOutUp .75s;
}

@keyframes bounceOutUp {
    20% {
        transform: translateY(20%);
    }

    40% {
        transform: translateY(-10%);
    }

    60% {
        transform: translateY(10%);
    }

    100% {
        transform: translateY(500%);
    }
}
`,
  },
  bounceOutRight: {
    title: "弹跳退出-从右方",
    className: "bounceOutRight",
    code: `
.bounceOutRight {
    animation: bounceOutRight .75s;
}

@keyframes bounceOutRight {
    20% {
        transform: translateX(20%);
    }

    40% {
        transform: translateX(-10%);
    }

    60% {
        transform: translateX(10%);
    }

    100% {
        transform: translateX(500%);
    }
}
`,
  },
};
</script>
