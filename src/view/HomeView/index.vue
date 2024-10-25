<style lang="scss">
@import "/atom-one-dark.css";

:root {
  // 基础（basic）
  --width: 100px;
  --height: 100px;

  // 阴影（box-shadow）
  --box-shadow-x-skew: 0px;
  --box-shadow-y-skew: 0px;
  --box-shadow-blur-rad: 0px;
  --box-shadow-diffusion-rad: 0px;
  --box-shadow-diffusion-color: inherit;
}

.adjustor-box {
  width: var(--width);
  height: var(--height);

  box-shadow: var(--box-shadow-x-skew);

  border: 1px solid black;

  transition: all 0.3s;
}
</style>

<template>
  <div class="home-container">
    <div class="effect-preview">
      <div class="adjustor-box" ref="boxEl"></div>
      <pre>
        <code ref="codeBlock" class="code language-css">
          width: {{option.basic.width}}px;
          height: {{option.basic.height}}px;
        </code>
      </pre>
    </div>
    <div class="effect-function">
      <ea-collapse ref="collapseEl" id="normalCollapse" active="1, 2">
        <ea-collapse-item title="基础">
          <SgAdjustor
            label="盒子宽度(width)："
            units="px"
            :value="option.basic.width"
            @value-change="handler.basic.handleWidth"
          />
          <SgAdjustor
            label="盒子高度(height)："
            units="px"
            :value="option.basic.height"
            @value-change="handler.basic.handleHeight"
          />
        </ea-collapse-item>
        <ea-collapse-item title="阴影（box-shadow）">
          <SgAdjustor
            label="阴影水平偏移: "
            units="px"
            :value="option.basic.width"
            @value-change="handler.basic.handleWidth"
          />
        </ea-collapse-item>
        <ea-collapse-item title="标题3">
          <div>内容3</div>
        </ea-collapse-item>
      </ea-collapse>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, Ref, ref } from "vue";

import SgAdjustor from "../../components/SgAdjustor.vue";

import "easy-component-ui/components/ea-collapse/index.js";

import "highlight.js/styles/default.css";

import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("css", css);

const collapseEl: Ref<HTMLElement> = ref(null);
const boxEl: Ref<HTMLElement> = ref(null);
const codeBlock: Ref<HTMLElement> = ref(null);

let option = reactive(
  {
    basic: {
      width: 100,
      height: 100,
    },
    boxShadow: {
      
    }
  },
  { deep: true }
);

/**
 * 设置css变量及更新值
 * @param {String} settingType 输入框的分类（option[settingType]）
 * @param {String} settingOption 输入框的值（option[settingType][settingOption]）
 * @param {String} name 变量名
 * @param {String} value 属性值
 * @param {String} units 属性值的单位
 */
const handleStyle = (settingType, settingOption, name, value, units) => {
  option[settingType][settingOption] = value;
  boxEl.value.style.setProperty(name, value + units);
};

const handler = {
  basic: {
    handleWidth(val) {
      handleStyle("basic", "width", "--width", val, "px");
    },
    handleHeight(val) {
      handleStyle("basic", "height", "--height", val, "px");
    },
  },
};

onMounted(() => {
  hljs.highlightElement(codeBlock.value);

  collapseEl.value.active = Array.from(collapseEl.value.children)
    .map((item) => {
      return item.name;
    })
    .join(",");
});
</script>
