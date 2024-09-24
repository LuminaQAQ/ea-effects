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
</script>
