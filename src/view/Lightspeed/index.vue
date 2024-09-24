<style lang="scss">
@import url(../../assets/styles/lightspeed.css);

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
  lightSpeedInRight: {
    title: "光速-从右进入",
    className: "lightSpeedInRight",
    code: `
.lightSpeedInRight {
    animation: lightSpeedInRight .75s;
}

@keyframes lightSpeedInRight {
    from {
        transform: translateX(100%) skew(30deg);
        filter: opacity(0);
    }

    50% {
        transform: translateX(0) skew(-30deg);
        filter: opacity(1);
    }

    75% {
        transform: skew(15deg);
    }
}
`,
  },
  lightSpeedInLeft: {
    title: "光速-从左进入",
    className: "lightSpeedInLeft",
    code: `
.lightSpeedInLeft {
    animation: lightSpeedInLeft .75s;
}

@keyframes lightSpeedInLeft {
    from {
        transform: translateX(-100%) skew(-30deg);
        filter: opacity(0);
    }

    50% {
        transform: translateX(0) skew(30deg);
        filter: opacity(1);
    }

    75% {
        transform: skew(-15deg);
    }
}
`,
  },
  lightSpeedOutRight: {
    title: "光速-向右退出",
    className: "lightSpeedOutRight",
    code: `
.lightSpeedOutRight {
    animation: lightSpeedOutRight .75s ease-in;
}

@keyframes lightSpeedOutRight {
    to {
        transform: translateX(100%) skew(30deg);
        filter: opacity(0);
    }
}
`,
  },
  lightSpeedOutLeft: {
    title: "光速-向左退出",
    className: "lightSpeedOutLeft",
    code: `
.lightSpeedOutLeft {
    animation: lightSpeedOutLeft .75s ease-in;
}

@keyframes lightSpeedOutLeft {
    to {
        transform: translateX(-100%) skew(-30deg);
        filter: opacity(0);
    }
}
`,
  },
};
</script>
