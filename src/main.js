import { createApp, onMounted } from 'vue'
import App from './App.vue'
import "./index.css"
import "./assets/styles/media.css"
import { router } from './router'

import { setConfig } from "easy-component-ui/components/globalConfig.js"

window.addEventListener('DOMContentLoaded', () => {
    setConfig({
        fontelloCSS: new URL(
            "/ea-icon/css/fontello.css",
            import.meta.url
        ).href,
    });
})

createApp(App).use(router).mount('#app')
