<style lang="scss">
@import url(../../assets/styles/rotatingEntrances.css);

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
  <h2>进入</h2>
  <section class="part">
    <template v-for="(item, index) in entrances" :key="index">
      <SgCard
        :title="item.title"
        :code="item.code"
        :className="item.className"
        :hasButton="true"
      />
    </template>
  </section>

  <h2>退出</h2>
  <section class="part">
    <template v-for="(item, index) in exits" :key="index">
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

const entrances = {
  rotateIn: {
    title: "旋转进入",
    className: "rotateIn",
    code: `
.rotateIn {
    animation: rotateIn .75s;
}

@keyframes rotateIn {
    from {
        transform: rotate(225deg);
        filter: opacity(0);
    }
}
`,
  },
  rotateInDownLeft: {
    title: "旋转进入-左下",
    className: "rotateInDownLeft",
    code: `
.rotateInDownLeft {
    animation: rotateInDownLeft .75s;
}

@keyframes rotateInDownLeft {
    from {
        transform-origin: left bottom;
        transform: rotate(-45deg);
        filter: opacity(0);
    }

    to {
        transform-origin: left bottom;
    }
}
`,
  },
  rotateInUpLeft: {
    title: "旋转进入-右上",
    className: "rotateInUpLeft",
    code: `
.rotateInDownRight {
    animation: rotateInDownRight .75s;
}

@keyframes rotateInDownRight {
    from {
        transform-origin: left top;
        transform: rotate(45deg);
        filter: opacity(0);
    }

    to {
        transform-origin: left top;
    }
}
`,
  },
  rotateInUpRight: {
    title: "旋转进入-右上",
    className: "rotateInUpRight",
    code: `
.rotateInUpRight {
    animation: rotateInUpRight .75s;
}

@keyframes rotateInUpRight {
    from {
        transform-origin: right top;
        transform: rotate(45deg);
        filter: opacity(0);
    }

    to {
        transform-origin: right top;
    }
}
`,
  },
};

const exits = {
  rotateOut: {
    title: "旋转退出",
    className: "rotateOut",
    code: `
.rotateOut {
    animation: rotateOut .75s;
}

@keyframes rotateOut {
    to {
        transform: rotate(225deg);
        filter: opacity(0);
    }
}
`,
  },
  rotateOutUpLeft: {
    title: "旋转退出-左上",
    className: "rotateOutUpLeft",
    code: `
.rotateOutUpLeft {
    animation: rotateOutUpLeft .75s;
}

@keyframes rotateOutUpLeft {
    from {
        transform-origin: left bottom;
    }

    to {
        transform-origin: left bottom;
        transform: rotate(-45deg);
        filter: opacity(0);
    }
}
`,
  },
  rotateOutUpRight: {
    title: "旋转退出-右上",
    className: "rotateOutUpRight",
    code: `
.rotateOutUpRight {
    animation: rotateOutUpRight .75s;
}

@keyframes rotateOutUpRight {
    from {
        transform-origin: right bottom;
    }

    to {
        transform-origin: right bottom;
        transform: rotate(45deg);
        filter: opacity(0);
    }
}
`,
  },
  rotateOutDownLeft: {
    title: "旋转退出-右下",
    className: "rotateOutDownLeft",
    code: `
.rotateOutDownLeft {
    animation: rotateOutDownLeft .75s;
}

@keyframes rotateOutDownLeft {
    from {
        transform-origin: left top;
    }

    to {
        transform-origin: left top;
        transform: rotate(45deg);
        filter: opacity(0);
    }
}
`,
  },
  rotateOutDownRight: {
    title: "旋转退出-右下",
    className: "rotateOutDownRight",
    code: `
.rotateOutDownRight {
    animation: rotateOutDownRight .75s;
}

@keyframes rotateOutDownRight {
    from {
        transform-origin: right top;
    }

    to {
        transform-origin: right top;
        transform: rotate(-45deg);
        filter: opacity(0);
    }
}
`,
  },
};
</script>
