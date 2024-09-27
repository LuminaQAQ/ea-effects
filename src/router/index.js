import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../view/HomeView/index.vue'

// Hover.css
import TwoDTransitions from "../view/2DTransitionView/index.vue"
import BackgroundTransitions from "../view/BackgroundTransitions/index.vue"
import BorderTransitions from "../view/BorderTransitions/index.vue"
import ShadowAndGlowTransitions from "../view/ShadowAndGlowTransitions/index.vue"
import SpeechBubbles from "../view/SpeechBubbles/index.vue"
import Curls from "../view/Curls/index.vue"

// Animate.css
import AttentionSeekers from "../view/AttentionSeekers/index.vue"
import BackEntrancesAndBackExits from "../view/BackEntrancesAndBackExits/index.vue"
import BouncingEntrancesAndBouncingExits from "../view/BouncingEntrancesAndBouncingExits/index.vue"
import FadeInAndFadeOut from "../view/FadeInAndFadeOut/index.vue"
import Flippers from "../view/Flippers/index.vue"
import Lightspeed from "../view/Lightspeed/index.vue"
import RotatingEntrancesAndRotatingExits from "../view/rotatingEntrancesAndRotatingExits/index.vue"
import Specials from "../view/specials/index.vue"
import ZoomingEntrancesAndZoomingExits from "../view/zoomingEntrancesAndZoomingExits/index.vue"

import AboutView from '../view/AboutView/index.vue'

const routes = [
    // { path: '/', component: HomeView, meta: { title: '主页' } },
    { path: '/', redirect: "/2DTransitions", meta: { title: '主页' } },
    { path: '/2DTransitions', component: TwoDTransitions, meta: { title: '2D 过渡动画' } },
    { path: '/backgroundTransitions', component: BackgroundTransitions, meta: { title: '背景过渡动画' } },
    { path: '/borderTransitions', component: BorderTransitions, meta: { title: '边框过渡动画' } },
    { path: '/shadowAndGlowTransitions', component: ShadowAndGlowTransitions, meta: { title: '阴影过渡动画' } },
    { path: '/speechBubbles', component: SpeechBubbles, meta: { title: '气泡框过渡动画' } },
    { path: '/curls', component: Curls, meta: { title: '折角过渡动画' } },

    { path: '/attentionSeekers', component: AttentionSeekers, meta: { title: '吸引眼球动画' } },
    { path: '/backEntrancesAndBackExits', component: BackEntrancesAndBackExits, meta: { title: '后进后出动画' } },
    { path: '/bouncingEntrancesAndBouncingExits', component: BouncingEntrancesAndBouncingExits, meta: { title: '弹出弹入动画' } },
    { path: '/fadeInAndFadeOut', component: FadeInAndFadeOut, meta: { title: '淡入淡出动画' } },
    { path: '/flippers', component: Flippers, meta: { title: '翻转动画' } },
    { path: '/lightspeed', component: Lightspeed, meta: { title: '光速动画' } },
    { path: '/rotatingEntrancesAndRotatingExits', component: RotatingEntrancesAndRotatingExits, meta: { title: '旋转动画' } },
    { path: '/specials', component: Specials, meta: { title: '特殊效果' } },
    { path: '/zoomingEntrancesAndZoomingExits', component: ZoomingEntrancesAndZoomingExits, meta: { title: '放大缩小动画' } },

    // { path: '/about', component: AboutView },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Ea-effects.css`;

    if (!to.hash) next();
})