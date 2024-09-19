<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.box {
  display: block;
  width: 7rem;
  padding: 1rem;
  margin: 0 auto;
  background-color: #ebeef5;
  cursor: pointer;
  text-align: center;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

<template>
  <div class="sg-card">
    <ea-card shadow="hover">
      <div slot="header" class="header">
        <span>{{ title }}</span>
        <ea-button v-if="hasButton" @click="toggleClass">
          点击执行动画
        </ea-button>
      </div>
      <span :class="animateClassName" @animationend="animationend">{{
        title
      }}</span>
      <CodeBlock :code="code"></CodeBlock>
    </ea-card>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import CodeBlock from "../components/CodeBlock.vue";
import "easy-component-ui/components/ea-card/index.js";

export default {
  name: "SgCard",
  components: { CodeBlock },
  props: {
    title: {
      type: String,
      default: "Card",
    },
    code: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    hasButton: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    let isAnimated = ref(props.hasButton);

    const animateClassName = computed(() => {
      return {
        [props.className]: isAnimated.value ? "" : props.className,
        box: true,
      };
    });

    const toggleClass = (e) => {
      isAnimated.value = false;
    };

    const animationend = () => {
      isAnimated.value = true;
    };

    return {
      isAnimated,
      animateClassName,
      toggleClass,
      animationend,
    };
  },
};
</script>
