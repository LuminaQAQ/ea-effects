<script setup>
import { defineComponent, onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import "easy-component-ui/components/ea-menu-item/index.js";

const props = defineProps({ to: String });
const route = useRoute();

defineComponent({
    name: 'MyRoute',
});

const navActive = {
    activeRoute: ref(route.path) || '',
};

watch(route, (newVal) => {
    navActive.activeRoute.value = newVal.path;
});
</script>

<style lang="scss" scoped>
.rl-item {
    list-style: none;
    display: block;

    a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;

        // color: black;
        color: var(--normal-text-color);

        &.active {
            color: var(--actived-text-color);
        }
    }
}

ea-menu-item::part(container) {
    padding: 0;
}
</style>

<template>
    <ea-menu-item class="rl-item" :actived="navActive.activeRoute.value === to">
        <RouterLink :to="to" activeClass="active">
            <slot></slot>
        </RouterLink>
    </ea-menu-item>
</template>