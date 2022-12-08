import { createApp } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import AOS from 'aos'
import App from './App.vue'
import pinia from '@/store/index'
import router from '@/router/index'

import 'aos/dist/aos.css'
import './assets/main.css'

const app = createApp(App)
app.use(AOS.init({ once: true }) as any)
app.use(pinia)
app.use(router)
app.use(MasonryWall)
app.mount('#app')
