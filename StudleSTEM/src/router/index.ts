// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Teorija from '../views/Teorija.vue';
import Uzdevumi from '../views/Uzdevumi.vue';
import Testi from '../views/Testi.vue';
import Profils from '../views/Profils.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/teorija',
        name: 'teorija',
        component: Teorija,
      },
      {
        path: '/uzdevumi',
        name: 'uzdevumi',
        component: Uzdevumi,
      },
      {
        path: '/testi',
        name: 'testi',
        component: Testi,
      },
      {
        path: '/profils',
        name: 'profils',
        component: Profils,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
