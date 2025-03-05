import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import userService from '../api/services/userService'
import type { User, LoginRequest } from '../api/services/userService'
import { saveToken, removeToken } from '../api/helpers/authHelper'

export const useUserStore = defineStore('user', () => {
  // 状态
  const currentUser = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  
  // 计算属性
  const isLoggedIn = computed(() => !!currentUser.value)
  const username = computed(() => currentUser.value?.username || '')
  const userRole = computed(() => currentUser.value?.role || 'user')
  
  // 监听用户变化，自动保存到本地存储
  watch(currentUser, (newUser) => {
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser))
    } else {
      localStorage.removeItem('user')
    }
  })
  
  // 动作
  /**
   * 登录
   */
  async function login(credentials: LoginRequest) {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await userService.login(credentials)
      
      if (response.data.code === 0 && response.data.data) {
        const { token, user } = response.data.data
        
        // 保存token和用户信息
        saveToken(token)
        currentUser.value = user
        
        return { success: true }
      } else {
        throw new Error(response.data.message || 'Login failed')
      }
    } catch (err: any) {
      error.value = err.message || 'An error occurred during login'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }
  
  /**
   * 获取当前用户信息
   */
  async function fetchCurrentUser() {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await userService.getCurrentUser()
      
      if (response.data.code === 0 && response.data.data) {
        currentUser.value = response.data.data
        return { success: true }
      } else {
        throw new Error(response.data.message || 'Failed to fetch user')
      }
    } catch (err: any) {
      error.value = err.message || 'An error occurred while fetching user data'
      return { success: false, error: error.value }
    } finally {
      isLoading.value = false
    }
  }
  
  /**
   * 登出
   */
  function logout() {
    // 清除token和用户信息
    removeToken()
    currentUser.value = null
  }
  
  /**
   * 从本地存储恢复用户会话
   */
  function restoreSession() {
    try {
      const userJson = localStorage.getItem('user')
      if (userJson) {
        currentUser.value = JSON.parse(userJson)
      }
    } catch (err) {
      console.error('Failed to restore user session:', err)
    }
  }
  
  // 初始化时尝试恢复会话
  restoreSession()
  
  return {
    // 状态
    currentUser,
    isLoading,
    error,
    
    // 计算属性
    isLoggedIn,
    username,
    userRole,
    
    // 动作
    login,
    logout,
    fetchCurrentUser,
    restoreSession
  }
}) 