<style lang="scss">
@import url(../../assets/styles/shadowAndGlowTransitions.css);

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
      />
    </template>
  </section>
</template>

<script setup>
import SgCard from "../../components/SgCard.vue";

const codes = {};

Object.assign(codes, {
  shadow: {
    title: "阴影",
    className: "shadow",
    code: `
.borderFade {
    box-sizing: border-box;
    border: 3px solid transparent;

    transition: border-color .3s;
}

.borderFade:hover {
    border-color: #409EFF;
}
`,
  },
  growShadow: {
    title: "阴影-容器变大",
    className: "growShadow",
    code: `
.growShadow {
    transition: box-shadow .3s, transform .3s;
}

.growShadow:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 10px -1px rgba(128, 128, 128, 0.4);
}
`,
  },
  floatShadow: {
    title: "阴影-容器浮起",
    className: "floatShadow",
    code: `
.floatShadow {
    overflow: unset;
    position: relative;
    transition: transform .3s;
}

.floatShadow::after {
    content: '';
    display: block;

    position: absolute;
    bottom: -.5rem;
    left: 0;
    transform: translateY(100%) scaleY(0);
    background-image: linear-gradient(to left, #ebeef5, rgb(160, 160, 160), #ebeef5);

    width: 100%;
    height: 8px;

    border-radius: 50%;

    transition: transform .3s;
}

.floatShadow:hover {
    transform: translateY(-20%);
}

.floatShadow:hover::after {
    transform: translateY(100%) scaleY(1);

}
`,
  },
  glow: {
    title: "阴影-四散",
    className: "glow",
    code: `
.glow {
    transition: box-shadow .3s;
}

.glow:hover {
    box-shadow: 0 0 5px 5px rgba(128, 128, 128, 0.3);
}
`,
  },
  shadowRadial: {
    title: "阴影-径向散开",
    className: "shadowRadial",
    code: `
.shadowRadial {
    overflow: unset;
    position: relative;
    transition: transform .3s;
}

.shadowRadial::after,
.shadowRadial::before {
    content: '';
    display: block;

    position: absolute;
    left: 0;
    transform: scaleY(0);
    background-image: linear-gradient(to left, #ebeef5, rgb(160, 160, 160), #ebeef5);

    width: 100%;
    height: 4px;

    border-radius: 50%;

    transition: transform .3s;
}

.shadowRadial::before {
    top: 0;
}

.shadowRadial::after {
    bottom: 0;
}

.shadowRadial:hover::before {
    transform: scaleY(1) translateY(-3px);
}

.shadowRadial:hover::after {
    transform: scaleY(1) translateY(3px);

}
`,
  },
  boxShadowOutset: {
    title: "阴影-外部",
    className: "boxShadowOutset",
    code: `
.boxShadowOutset {
    transition: box-shadow .3s;
}

.boxShadowOutset:hover {
    box-shadow: 3px 3px 1px 0 rgb(160, 160, 160);
}
`,
  },
  boxShadowInset: {
    title: "阴影-内部",
    className: "boxShadowInset",
    code: `
.boxShadowInset {
    transition: box-shadow .3s;
}

.boxShadowInset:hover {
    box-shadow: inset 3px 3px 1px 0 rgb(160, 160, 160);
}
`,
  },
});
</script>
