import { getCurrentUser } from './firebase'
import SignIn from './views/SignIn.vue'
import Profile from './views/Profile.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
]

export const router = new createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await getCurrentUser()) {
    return '/signin';
  } 
})
