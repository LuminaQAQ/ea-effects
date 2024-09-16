<style lang="scss">
@import url(../../assets/styles/borderTransitions.css);

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

@media screen and (max-width: 992px) {
  .sg-card {
    max-width: calc(33% - 2rem);
    flex: 1 0 calc(33% - 2rem);
  }
}

@media screen and (max-width: 768px) {
  .sg-card {
    max-width: calc(50% - 2rem);
    flex: 1 0 calc(50% - 2rem);
  }
}

@media screen and (max-width: 480px) {
  .sg-card {
    max-width: calc(100% - 2rem);
    flex: 1 0 calc(100% - 2rem);
  }
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
  fill: {
    title: "填充",
    className: "fill",
    code: `
.fill {
    transition: background-color .3s, color .3s;
}

.fill:hover {
    background-color: #409EFF;
    color: white;
}
`,
  },
});
</script>
