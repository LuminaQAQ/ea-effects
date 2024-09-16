import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../view/HomeView/index.vue'

import TwoDTransitions from "../view/2DTransitionView/index.vue"
import BackgroundTransitions from "../view/BackgroundTransitions/index.vue"
import BorderTransitions from "../view/BorderTransitions/index.vue"
import ShadowAndGlowTransitions from "../view/ShadowAndGlowTransitions/index.vue"

import AboutView from '../view/AboutView/index.vue'

const routes = [
    { path: '/', component: HomeView, meta: { title: '主页' } },
    { path: '/2DTransitions', component: TwoDTransitions, meta: { title: '2D 过渡动画' } },
    { path: '/backgroundTransitions', component: BackgroundTransitions, meta: { title: '背景过渡动画' } },
    { path: '/borderTransitions', component: BorderTransitions, meta: { title: '边框过渡动画' } },
    { path: '/shadowAndGlowTransitions', component: ShadowAndGlowTransitions, meta: { title: '阴影过渡动画' } },
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