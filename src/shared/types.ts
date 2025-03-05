/**
 * 用户信息接口
 */
export interface User {
  id: number | string
  username: string
  email: string
  avatar?: string
  role: 'admin' | 'user' | 'guest'
}

/**
 * 分页响应接口
 */
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

/**
 * API响应接口
 */
export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

/**
 * 菜单项接口
 */
export interface MenuItem {
  id: number | string
  name: string
  path: string
  icon?: string
  children?: MenuItem[]
} 