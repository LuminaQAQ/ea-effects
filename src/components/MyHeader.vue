<template>
    <ea-header>
        <ea-icon icon="icon-th-list" class="toggle-aside-btn"></ea-icon>
    </ea-header>
</template>

<script setup>
import "easy-component-ui/components/ea-menu/index.js";
import { defineComponent } from "vue";

defineComponent({
    name: "MyHeader"
});
</script>