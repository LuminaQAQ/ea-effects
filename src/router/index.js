import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../view/HomeView/index.vue'
import TwoDTransitions from "../view/2DTransitionView/index.vue"
import AboutView from '../view/AboutView/index.vue'

const routes = [
    { path: '/', component: HomeView, meta: { title: '主页' } },
    { path: '/2DTransitions', component: TwoDTransitions, meta: { title: '2D transitions' } },
    { path: '/about', component: AboutView },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Ea-effects.css`;

    if (!to.hash) next();
})