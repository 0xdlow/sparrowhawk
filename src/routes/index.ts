import {createRouter, createWebHistory} from "vue-router"
import type {RouteRecordRaw, RouteLocationNormalized} from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import { RouteNames } from "../constants/routeNames"
import { routerConfig } from "../config/router"
import { reactive } from "vue"
import { useUserStore } from "../stores/user"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouteNames.HOME,
    component: HomeView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/about",
    name: RouteNames.ABOUT,
    component: AboutView,
    meta: {
      requiresAuth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 导航状态管理
const navigationState = reactive({ isNavigating: false })

/**
 * 验证路由元数据
 * 检查路由是否有冲突的元数据设置
 */
function validateRouteMeta(route: RouteLocationNormalized): boolean {
  const requiresAuth = route.matched.some(r => r.meta[routerConfig.meta.requiresAuth])
  const guestOnly = route.matched.some(r => r.meta[routerConfig.meta.guest])
  
  if (requiresAuth && guestOnly) {
    console.error(`Route ${route.path} has conflicting meta tags: requiresAuth and guest cannot both be true.`)
    return false
  }
  return true
}

/**
 * 检查用户认证状态
 * 如果需要，会从服务器获取最新的认证状态
 */
async function checkAuthentication(userStore: ReturnType<typeof useUserStore>): Promise<boolean> {
  // 如果用户已登录，直接返回true
  if (userStore.isLoggedIn) {
    return true
  }
  
  // 尝试恢复会话
  userStore.restoreSession()
  if (userStore.isLoggedIn) {
    return true
  }
  
  // 如果有token但没有用户信息，尝试获取用户信息
  const token = localStorage.getItem(routerConfig.auth.tokenKey)
  if (token) {
    try {
      const result = await Promise.race([
        userStore.fetchCurrentUser(),
        new Promise<never>((_, reject) => 
          setTimeout(() => reject(new Error('Authentication check timeout')), 
          routerConfig.auth.tokenCheckTimeout)
        )
      ])
      return result.success
    } catch (error) {
      console.error('Authentication check failed:', error)
      return false
    }
  }
  
  return false
}

// 全局前置守卫
router.beforeEach(async (to, _, next) => {
  // 防止重复导航
  if (navigationState.isNavigating) {
    console.log('Already navigating, preventing new navigation.')
    next(false)
    return
  }
  
  navigationState.isNavigating = true
  
  try {
    // 验证路由元数据
    if (!validateRouteMeta(to)) {
      next(false)
      return
    }
    
    // 检查认证状态
    const userStore = useUserStore()
    const isAuthenticated = await checkAuthentication(userStore)
    
    // 处理需要认证的路由
    const requiresAuth = to.matched.some(record => record.meta[routerConfig.meta.requiresAuth])
    if (requiresAuth && !isAuthenticated) {
      // 未登录，重定向到登录页
      next({ 
        name: routerConfig.auth.loginRouteName,
        query: { redirect: encodeURIComponent(to.fullPath) },
        replace: true
      })
      return
    }
    
    // 处理游客路由（已登录用户不应访问，如登录页）
    const guestOnly = to.matched.some(record => record.meta[routerConfig.meta.guest])
    if (guestOnly && isAuthenticated) {
      // 已登录，重定向到首页
      next({ 
        name: routerConfig.auth.homeRouteName,
        replace: true
      })
      return
    }
    
    // 允许导航
    next()
  } catch (error) {
    console.error('Navigation error:', error)
    next(false)
  } finally {
    navigationState.isNavigating = false
  }
})

export default router
