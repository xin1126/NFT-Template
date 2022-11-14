import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layouts/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../pages/home/index.vue'),
      },
      {
        path: 'explore',
        name: 'explore',
        component: () => import('../pages/explore/index.vue'),
      },
      {
        path: 'artistDetail/:img',
        name: 'artistDetail',
        component: () => import('../pages/artistDetail/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
