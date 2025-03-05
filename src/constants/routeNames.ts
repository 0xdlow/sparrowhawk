/**
 * 路由名称常量
 * 集中管理所有路由名称，避免字符串硬编码
 */
export const RouteNames = {
  HOME: 'home',
  ABOUT: 'about',
  LOGIN: 'login',
  PROFILE: 'profile',
  NOT_FOUND: 'not-found'
} as const;

export type RouteName = typeof RouteNames[keyof typeof RouteNames]; 