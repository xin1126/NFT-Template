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
        path: 'marketPrice',
        name: 'marketPrice',
        component: () => import('../pages/marketPrice/index.vue'),
      },
      {
        path: 'artistDetail/:img',
        name: 'artistDetail',
        component: () => import('../pages/artistDetail/index.vue'),
      },
      {
        path: 'catena/:type',
        name: 'catena',
        component: () => import('../pages/catena/index.vue'),
      },
      {
        path: 'productDetail/:img',
        name: 'productDetail',
        component: () => import('../pages/productDetail/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
