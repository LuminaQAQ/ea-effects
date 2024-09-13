import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../view/HomeView/index.vue'
import AboutView from '../view/AboutView/index.vue'

const routes = [
    { path: '/', component: HomeView, meta: { title: 'CSS 调试器' } },
    { path: '/about', component: AboutView },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Ea-animation.css`;
    next();
})