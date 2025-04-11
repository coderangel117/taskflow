import { createRouter, createWebHistory } from 'vue-router'
import AuthLogin from '@/components/Auth/AuthLogin.vue'
import AuthRegister from '@/components/Auth/AuthRegister.vue'
import MentionLegales from '@/views/legal/MentionLegales.vue'
import Cookie from '@/views/legal/Cookie.vue'
import ConditionUtilisation from '@/views/legal/ConditionUtilisation.vue'
import PrivacyPolicy from '@/views/legal/PrivacyPolicy.vue'
import EisenhowerFeature from '@/views/features/EisenhowerFeature.vue'
import KanbanFeature from '@/views/features/KanbanFeature.vue'
import CalendarFeature from '@/views/features/CalendarFeature.vue'
import Pricing from '@/components/Pricing.vue'
import AppHome from '@/components/Home.vue'
import MatrixView from '@/views/MatrixView.vue'
import KanbanView from '@/views/KanbanView.vue'

const routes = [
  { path: '/', name: 'Home', component: AppHome },
  { path: '/dashboard', name: 'MatrixView', component: MatrixView },
  { path: '/kanban', name: 'KanbanView', component: KanbanView },
  { path: '/calendar', name: 'CalendarView', component: CalendarFeature }, // @TODO: Create a CalendarView component
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/auth/login', name: 'Login', component: AuthLogin },
  { path: '/auth/register', name: 'Register', component: AuthRegister },
  { path: '/features/matrix', name: 'EisenhowerFeature', component: EisenhowerFeature },
  { path: '/features/kanban', name: 'KanbanFeature', component: KanbanFeature },
  { path: '/features/calendar', name: 'CalendarFeature', component: CalendarFeature },
  { path: '/legal/mentions', name: 'MentionLegales', component: MentionLegales },
  { path: '/legal/cookies', name: 'Cookies', component: Cookie },
  { path: '/legal/conditions', name: 'ConditionsUtilisation', component: ConditionUtilisation },
  { path: '/legal/privacy', name: 'Confidentialité', component: PrivacyPolicy },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
