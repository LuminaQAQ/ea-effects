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
  <h2>滑动进入</h2>
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
  <h2>滑动退出</h2>
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
  slideInUp: {
    title: "滑动进入-从上",
    className: "slideInUp",
    code: `
.slideInDown {
    animation: slideInDown .5s ease-out;
}

@keyframes slideInDown {
    from {
        transform: translateY(-200%);
    }
}
`,
  },
  slideInLeft: {
    title: "滑动进入-从左",
    className: "slideInLeft",
    code: `
.slideInLeft {
    animation: slideInLeft .5s ease-out;
}

@keyframes slideInLeft {
    from {
        transform: translateX(-200%);
    }
}
`,
  },
  slideInRight: {
    title: "滑动进入-从右",
    className: "slideInRight",
    code: `
.slideInLeft {
    animation: slideInLeft .5s ease-out;
}

@keyframes slideInLeft {
    from {
        transform: translateX(-200%);
    }
}
`,
  },
  slideInDown: {
    title: "滑动进入-从上",
    className: "slideInDown",
    code: `
.slideInDown {
    animation: slideInDown .5s ease-out;
}

@keyframes slideInDown {
    from {
        transform: translateY(200%);
    }
}
`,
  },
};

const zoomingOut = {
  slideOutDown: {
    title: "滑动退出-向下",
    className: "slideOutDown",
    code: `
.slideOutDown {
    animation: slideOutDown .75s ease-out;
}

@keyframes slideOutDown {
    to {
        transform: translateY(200%);
    }
}
`,
  },
  slideOutLeft: {
    title: "滑动退出-向左",
    className: "slideOutLeft",
    code: `
.slideOutLeft {
    animation: slideOutLeft .75s ease-out;
}

@keyframes slideOutLeft {
    to {
        transform: translateX(-200%);
    }
}
`,
  },
  slideOutRight: {
    title: "滑动退出-向右",
    className: "slideOutRight",
    code: `
.slideOutRight {
    animation: slideOutRight .5s ease-out;
}

@keyframes slideOutRight {
    to {
        transform: translateX(200%);
    }
}
`,
  },
  slideOutUp: {
    title: "滑动退出-向上",
    className: "slideOutUp",
    code: `
.slideOutUp {
    animation: slideOutUp .5s ease-out;
}

@keyframes slideOutUp {
    to {
        transform: translateY(-200%);
    }
}
`,
  },
};
</script>
