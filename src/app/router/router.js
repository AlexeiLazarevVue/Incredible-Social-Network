import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import AuthorizationPage from '@/pages/AuthorizationPage'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/authorization',
    component: AuthorizationPage
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router