<style lang="scss">
@import url(../../assets/styles/flippers.css);

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
  flip: {
    title: "翻转",
    className: "flip",
    code: `
.flip {
    animation: flip .75s;
}

@keyframes flip {
    50% {
        transform: rotateY(180deg) scale(1.5);
    }

    to {
        transform: rotateY(360deg);
    }
}
`,
  },
  flipInX: {
    title: "翻转-x轴",
    className: "flipInX",
    code: `
.flipInX {
    animation: flipInX 1.5s;
}

@keyframes flipInX {
    from {
        transform: rotateX(90deg);
        filter: opacity(0.5);
    }

    25% {
        transform: rotateX(-25deg);
    }

    50% {
        transform: rotateX(25deg);
        filter: opacity(1);
    }

    75% {
        transform: rotateX(-15deg);
    }

    to {
        transform: rotateX(0);
    }
}
`,
  },
  flipInY: {
    title: "翻转-y轴",
    className: "flipInY",
    code: `
.flipInY {
    animation: flipInY 1.5s;
}

@keyframes flipInY {
    from {
        transform: rotateY(90deg);
        filter: opacity(0.5);
    }

    25% {
        transform: rotateY(-25deg);
    }

    50% {
        transform: rotateY(25deg);
        filter: opacity(1);
    }

    75% {
        transform: rotateY(-15deg);
    }

    to {
        transform: rotateY(0);
    }
}
`,
  },
  flipOutX: {
    title: "翻转退出-x轴",
    className: "flipOutX",
    code: `
.flipOutX {
    animation: flipOutX .75s ease-out;
}

@keyframes flipOutX {
    33% {
        transform: rotateY(45deg);
    }

    66% {
        filter: opacity(1);
    }

    to {
        transform: rotateY(-180deg);
        filter: opacity(0);
    }
}
`,
  },
  flipOutY: {
    title: "翻转退出-y轴",
    className: "flipOutY",
    code: `
.flipOutY {
    animation: flipOutY .75s ease-out;
}

@keyframes flipOutY {
    33% {
        transform: rotateX(45deg);
    }

    66% {
        filter: opacity(1);
    }

    to {
        transform: rotateX(-180deg);
        filter: opacity(0);
    }
}
`,
  },
};
</script>
