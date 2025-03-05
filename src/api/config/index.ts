import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import { setupInterceptors } from './interceptors';

// 默认配置
const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

/**
 * 创建自定义HTTP客户端实例
 * @param config 覆盖默认配置的自定义配置
 * @returns 配置好的axios实例
 */
export const createHttpClient = (config: AxiosRequestConfig = {}): AxiosInstance => {
  // 合并默认配置和自定义配置
  const axiosInstance = axios.create({
    ...defaultConfig,
    ...config
  });

  // 设置拦截器
  setupInterceptors(axiosInstance);

  return axiosInstance;
};

// 创建默认HTTP客户端实例
export const httpClient = createHttpClient();

// 暴露原始axios以便使用特殊功能
export { axios }; 