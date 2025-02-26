import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import AuthLogin from '@/components/AuthLogin.vue'
import AuthRegister from '@/components/AuthRegister.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: AuthLogin,
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: AuthRegister,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
