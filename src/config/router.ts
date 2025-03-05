/**
 * 路由配置
 */
export const routerConfig = {
  // 认证相关配置
  auth: {
    // 认证检查超时时间（毫秒）
    tokenCheckTimeout: 5000,
    
    // 本地存储中的令牌键名
    tokenKey: 'auth_token',
    
    // 未认证时重定向的路由名称
    loginRouteName: 'login',
    
    // 已认证用户访问游客页面时重定向的路由名称
    homeRouteName: 'home'
  },
  
  // 路由元数据键名
  meta: {
    requiresAuth: 'requiresAuth',
    guest: 'guest'
  }
} 