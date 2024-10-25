<style lang="scss" scoped>
ea-input::part(append-wrap),
ea-input::part(prepend-wrap) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ea-input {
  display: block;
  margin-bottom: 0.5rem;
}

.prepend,
.append {
  box-sizing: border-box;
  padding: 0 0.5rem;
}
</style>

<template>
  <ea-input class="ea-input" :value="inputVal" @input="handleInput">
    <div class="prepend" slot="prepend">{{ label }}
        <input type="range" name="" id="">
    </div>
    <div class="append" slot="append">{{ units }}</div>
  </ea-input>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import "easy-component-ui/components/ea-input/index.js";

const props = defineProps(["label", "units", "label"]);

const inputVal = ref(0);
const { value } = props;
inputVal.value = value;

const emit = defineEmits(["value-change"]);

const handleInput = (e) => {
  emit("value-change", e.target.value);
};
</script>
