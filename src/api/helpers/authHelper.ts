/**
 * Token在本地存储中的键名
 */
const TOKEN_KEY = 'auth_token';

/**
 * 从本地存储获取认证Token
 * @returns 存储的Token或null
 */
export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * 将Token保存到本地存储
 * @param token 要保存的Token
 */
export const saveToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

/**
 * 从本地存储中移除Token
 */
export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * 检查是否已认证（Token是否存在）
 * @returns 是否已认证
 */
export const isAuthenticated = (): boolean => {
  return !!getToken();
}; 