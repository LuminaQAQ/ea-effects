<style lang="scss">
@import url(../../assets/styles/slidingEntrancesSlidingExits.css);

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
  <h2>缩放进入</h2>
  <section class="part">
    <template v-for="(item, index) in zoomingIn" :key="index">
      <SgCard
        :title="item.title"
        :code="item.code"
        :className="item.className"
        :hasButton="true"
      />
    </template>
  </section>
  <h2>缩放退出</h2>
  <section class="part">
    <template v-for="(item, index) in zoomingOut" :key="index">
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

const zoomingIn = {
  zoomIn: {
    title: "放大-出现",
    className: "zoomIn",
    code: `
.zoomIn {
    animation: zoomIn .5s;
}

@keyframes zoomIn {
    from {
        transform: scale(0);
    }
}
`,
  },
  zoomInUp: {
    title: "放大-从上出现",
    className: "zoomInUp",
    code: `
.zoomInDown {
    animation: zoomInDown .5s ease-in;
}

@keyframes zoomInDown {
    from {
        transform: center bottom;
        transform: scale(0) translateY(-500%);
    }

    80% {
        transform: scale(.8) translateY(20%);
    }

    to {
        transform: center bottom;
        transform: scale(1);
    }
}
`,
  },
  zoomInLeft: {
    title: "放大-从左出现",
    className: "zoomInLeft",
    code: `
.zoomInLeft {
    animation: zoomInLeft .5s ease-in;
}

@keyframes zoomInLeft {
    from {
        transform: scale(0) translateX(-500%);
    }
}
`,
  },
  zoomInRight: {
    title: "放大-从右出现",
    className: "zoomInRight",
    code: `
.zoomInRight {
    animation: zoomInRight .5s ease-in;
}

@keyframes zoomInRight {
    from {
        transform: scale(0) translateX(500%);
    }
}
`,
  },
  zoomInDown: {
    title: "放大-从下出现",
    className: "zoomInDown",
    code: `
.zoomInDown {
    animation: zoomInDown .5s ease-in;
}

@keyframes zoomInDown {
    from {
        transform: scale(0) translateY(500%);
    }
}
  `,
  },
};

const zoomingOut = {
  zoomOut: {
    title: "放大-退出",
    className: "zoomOut",
    code: `
.zoomOut {
    animation: zoomOut .5s;
}

@keyframes zoomOut {
    to {
        transform: scale(0);
    }
}
`,
  },
  zoomOutUp: {
    title: "放大-从上退出",
    className: "zoomOutUp",
    code: `
.zoomOutUp {
    animation: zoomOutUp .75s ease-in;
}

@keyframes zoomOutUp {
    50% {
        transform: scale(.5);
    }

    to {
        transform: translateY(-1000%);
    }
}
`,
  },
  zoomOutLeft: {
    title: "放大-从左退出",
    className: "zoomOutLeft",
    code: `
.zoomOutLeft {
    animation: zoomOutLeft .75s ease-in;
}

@keyframes zoomOutLeft {
    50% {
        transform: scale(0.5);
    }

    to {
        transform: scale(0) translateX(-1000%);
    }
}
`,
  },
  zoomOutRight: {
    title: "放大-从右退出",
    className: "zoomOutRight",
    code: `
.zoomOutRight {
    animation: zoomOutRight .75s ease-in;
}

@keyframes zoomOutRight {
    50% {
        transform: scale(0.5);
    }

    to {
        transform: scale(0) translateX(1000%);
    }
}
`,
  },
  zoomOutDown: {
    title: "放大-从下退出",
    className: "zoomOutDown",
    code: `
.zoomOutDown {
    animation: zoomOutDown .75s ease-in;
}

@keyframes zoomOutDown {
    50% {
        transform: scale(0.5);
    }

    to {
        transform: scale(0) translateY(1000%);
    }
}
`,
  },
};
</script>
