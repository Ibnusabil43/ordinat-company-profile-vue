import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles/main.css'

// Import animation directives
import { vScrollReveal, vFadeIn, vSlideIn, vStaggerChildren } from './composables/useAnimationDirective'

const app = createApp(App)

// Register global directives
app.directive('scroll-reveal', vScrollReveal)
app.directive('fade-in', vFadeIn)
app.directive('slide-in', vSlideIn)
app.directive('stagger-children', vStaggerChildren)

app.use(createPinia())
app.use(router)

app.mount('#app')
