<style lang="scss">
@import url(../../assets/styles/backEntrancesAndBackExits.css);

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
  <h2>从后面进入</h2>
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
  <h2>从后面退出</h2>
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
  backInTop: {
    title: "从上出现",
    className: "backInTop",
    code: `
.backInTop {
    animation: backInTop .75s;
}

@keyframes backInTop {
    0% {
        transform: translate(0, -100%) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`,
  },
  backInLeft: {
    title: "从左出现",
    className: "backInLeft",
    code: `
.backInLeft {
    animation: backInLeft .75s;
}

@keyframes backInLeft {
    0% {
        transform: translate(-100%, 0) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`,
  },
  backInBottom: {
    title: "从下出现",
    className: "backInBottom",
    code: `
.backInBottom {
    animation: backInBottom .75s;
}

@keyframes backInBottom {
    0% {
        transform: translate(0, 100%) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`,
  },
  backInRight: {
    title: "从右出现",
    className: "backInRight",
    code: `
.backInRight {
    animation: backInRight .75s;
}

@keyframes backInRight {
    0% {
        transform: translate(100%, 0) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`,
  },
};

const codesOut = {
  backOutTop: {
    title: "从上退出",
    className: "backOutTop",
    code: `
.backOutTop {
    animation: backOutTop .75s;
}

@keyframes backOutTop {
    0% {
        transform: translate(0, 0);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, -100%) scale(0.6);
    }
}
`,
  },
  backOutLeft: {
    title: "从左退出",
    className: "backOutLeft",
    code: `
.backOutLeft {
    animation: backOutLeft .75s;
}

@keyframes backOutLeft {
    0% {
        transform: translate(0, 0)scale(1);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(-100%, 0) scale(0.6);
    }
}
`,
  },
  backOutBottom: {
    title: "从下退出",
    className: "backOutBottom",
    code: `
.backOutBottom {
    animation: backOutBottom .75s;
}

@keyframes backOutBottom {
    0% {
        transform: translate(0, 0)scale(1);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 100%) scale(0.6);
    }
}
`,
  },
  backOutRight: {
    title: "从右退出",
    className: "backOutRight",
    code: `
.backInRight {
    animation: backInRight .75s;
}

@keyframes backInRight {
    0% {
        transform: translate(100%, 0) scale(0.6);
    }

    50% {
        transform: translate(0, 0) scale(0.6);
    }

    100% {
        transform: translate(0, 0)scale(1);
    }
}
`,
  },
};
</script>
