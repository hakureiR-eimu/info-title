import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'btc',
      component: ()=>import ('@/views/BtcView.vue'),
    },
    {
      path: '/gold',
      name: 'gold',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GoldView.vue'),
    },
  ],
})

export default router
