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
};
</script>
