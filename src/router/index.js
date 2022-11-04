import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import DetailView from '../views/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/amiibo',
      name: 'amiiboList',
      component: ListView
    },
    {
      path: '/amiibo/:amiiboId',
      name: 'amiiboDetail',
      component: DetailView
    }
  ]
})

export default router
