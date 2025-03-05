import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { httpClient } from '../config';

/**
 * 重试配置接口
 */
interface RetryConfig {
  retries: number;            // 最大重试次数
  retryDelay: number;         // 重试延迟（毫秒）
  retryCondition?: (error: AxiosError) => boolean;  // 判断是否应该重试的条件
}

/**
 * 默认重试配置
 */
const defaultRetryConfig: RetryConfig = {
  retries: 3,
  retryDelay: 1000,
  retryCondition: (error: AxiosError) => {
    // 默认只在网络错误或5xx服务器错误时重试
    return (
      !error.response || 
      (error.response.status >= 500 && error.response.status <= 599)
    );
  }
};

/**
 * 带重试功能的请求函数
 * @param config Axios请求配置
 * @param retryConfig 重试配置
 * @returns Promise，解析为响应或拒绝为错误
 */
export const requestWithRetry = async <T = any>(
  config: AxiosRequestConfig,
  retryConfig: Partial<RetryConfig> = {}
): Promise<AxiosResponse<T>> => {
  // 合并默认配置和自定义配置
  const { retries, retryDelay, retryCondition } = {
    ...defaultRetryConfig,
    ...retryConfig
  };

  let lastError: AxiosError;
  
  // 尝试请求，包括初始请求和重试
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // 发送请求
      return await httpClient.request<T>(config);
    } catch (error) {
      lastError = error as AxiosError;
      
      // 如果已达到最大重试次数或不满足重试条件，则抛出错误
      if (
        attempt >= retries || 
        !retryCondition || 
        !retryCondition(lastError)
      ) {
        throw lastError;
      }
      
      // 计算延迟时间（可以使用指数退避策略）
      const delay = retryDelay * Math.pow(2, attempt);
      console.warn(`Retrying request (${attempt + 1}/${retries}) after ${delay}ms...`);
      
      // 等待延迟时间后继续下一次尝试
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  
  // 这行代码理论上不会执行，但TypeScript需要有返回值
  throw lastError!;
}; 