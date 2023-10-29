import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import AuthorizationPage from '@/pages/AuthorizationPage'
import RegistrationPage from '@/pages/RegistrationPage'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/authorization',
    component: AuthorizationPage
  },
  {
    path: '/registration',
    component: RegistrationPage
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router