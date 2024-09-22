<style lang="scss">
@import url(../../assets/styles/fadeInAndFadeOut.css);

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
  <h2>淡入</h2>
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
  <h2>淡出</h2>
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
  fadeIn: {
    title: "淡入",
    className: "fadeIn",
    code: `
.fadeIn {
    animation: fadeIn .75s;
}

@keyframes fadeIn {
    from {
        filter: opacity(0);
    }
}
`,
  },
  fadeInDown: {
    title: "淡入-从上进入",
    className: "fadeInDown",
    code: `
.fadeInDown {
    animation: fadeInDown .75s;
}

@keyframes fadeInDown {
    from {
        filter: opacity(0);
        transform: translateY(-50%);
    }
}
`,
  },
  fadeInLeft: {
    title: "淡入-从左进入",
    className: "fadeInLeft",
    code: `
.fadeInLeft {
    animation: fadeInLeft .75s;
}

@keyframes fadeInLeft {
    from {
        filter: opacity(0);
        transform: translateX(-50%);
    }
}
`,
  },
  fadeInRight: {
    title: "淡入-从右进入",
    className: "fadeInRight",
    code: `
.fadeInRight {
    animation: fadeInRight .75s;
}

@keyframes fadeInRight {
    from {
        filter: opacity(0);
        transform: translateX(50%);
    }

    to {
        filter: opacity(1);
    }
}
`,
  },
  fadeInDown: {
    title: "淡入-从上进入",
    className: "fadeInDown",
    code: `
.fadeInDown {
    animation: fadeInDown .75s;
}

@keyframes fadeInDown {
    from {
        filter: opacity(0);
        transform: translateY(-50%);
    }
}
`,
  },
  fadeInUp: {
    title: "淡入-从下进入",
    className: "fadeInUp",
    code: `
.fadeInUp {
    animation: fadeInUp .75s;
}

@keyframes fadeInUp {
    from {
        filter: opacity(0);
        transform: translateY(50%);
    }
}
`,
  },
  fadeInTopLeft: {
    title: "淡入-从左上进入",
    className: "fadeInTopLeft",
    code: `
.fadeInTopLeft {
    animation: fadeInTopLeft .75s;
}

@keyframes fadeInTopLeft {
    from {
        filter: opacity(0);
        transform: translate(-50%, -50%);
    }
}
`,
  },
  fadeInTopRight: {
    title: "淡入-从右上进入",
    className: "fadeInTopRight",
    code: `
.fadeInTopRight {
    animation: fadeInTopRight .75s;
}

@keyframes fadeInTopRight {
    from {
        filter: opacity(0);
        transform: translate(50%, -50%);
    }
}
`,
  },
  fadeInBottomLeft: {
    title: "淡入-从左下进入",
    className: "fadeInBottomLeft",
    code: `
.fadeInBottomLeft {
    animation: fadeInBottomLeft .75s;
}

@keyframes fadeInBottomLeft {
    from {
        filter: opacity(0);
        transform: translate(-50%, 50%);
    }
}
`,
  },
  fadeInBottomRight: {
    title: "淡入-从右下进入",
    className: "fadeInBottomRight",
    code: `
.fadeInBottomRight {
    animation: fadeInBottomRight .75s;
}

@keyframes fadeInBottomRight {
    from {
        filter: opacity(0);
        transform: translate(50%, 50%);
    }
}
`,
  },
};

const codesOut = {
  fadeOut: {
    title: "淡出",
    className: "fadeOut",
    code: `
.fadeOut {
    animation: fadeOut .75s reverse ease-out;
}

@keyframes fadeOut {
    from {
        filter: opacity(0);
    }
}
`,
  },
  fadeOutDown: {
    title: "淡出-向下退出",
    className: "fadeOutDown",
    code: `
.fadeOutDown {
    animation: fadeOutDown .75s reverse;
}

@keyframes fadeOutDown {
    from {
        filter: opacity(0);
        transform: translateY(50%);
    }
}
`,
  },
};
</script>
