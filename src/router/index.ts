import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async () => {
  const { fetchUserSession } = useAuthStore()
  await fetchUserSession()
})

if (import.meta.hot) {
  handleHotUpdate(router)
}
export default router
