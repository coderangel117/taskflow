import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import AuthLogin from '@/components/AuthLogin.vue'
import AuthRegister from '@/components/AuthRegister.vue'
import MentionLegales from '@/components/legal/MentionLegales.vue'
import Cookie from '@/components/legal/Cookie.vue'
import ConditionUtilisation from '@/components/legal/ConditionUtilisation.vue'
import PrivacyPolicy from '@/components/legal/PrivacyPolicy.vue'
import EisenhowerFeature from '@/components/features/EisenhowerFeature.vue'
import KanbanFeature from '@/components/features/KanbanFeature.vue'
import CalendarFeature from '@/components/features/CalendarFeature.vue'
import Pricing from '@/components/Pricing.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/auth/login', name: 'Login', component: AuthLogin },
  { path: '/auth/register', name: 'Register', component: AuthRegister },
  { path: '/features/matrix', name: 'EisenhowerFeature', component: EisenhowerFeature },
  { path: '/features/kanban', name: 'KanbanFeature', component: KanbanFeature },
  { path: '/features/calendar', name: 'CalendarFeature', component: CalendarFeature },
  { path: '/legal/mentions', name: 'MentionLegales', component: MentionLegales },
  { path: '/legal/cookies', name: 'Cookies', component: Cookie },
  { path: '/legal/conditions', name: 'ConditionsUtilisation', component: ConditionUtilisation },
  { path: '/legal/privacy', name: 'Privacy policies', component: PrivacyPolicy },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
