import axios from 'axios';
import type { AxiosRequestConfig, Canceler } from 'axios';

/**
 * 取消标记映射，用于跟踪可取消的请求
 */
const pendingRequests = new Map<string, Canceler>();

/**
 * 生成请求的唯一键
 * @param config Axios请求配置
 * @returns 唯一键字符串
 */
const generateRequestKey = (config: AxiosRequestConfig): string => {
  const { url, method, params, data } = config;
  return [
    url || '',
    method || '',
    params ? JSON.stringify(params) : '',
    data ? JSON.stringify(data) : ''
  ].join('&');
};

/**
 * 添加请求取消令牌
 * @param config Axios请求配置
 */
export const addCancelToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // 生成请求键
  const requestKey = generateRequestKey(config);
  
  // 如果已存在相同请求，取消它
  removePendingRequest(config);
  
  // 创建取消令牌
  config.cancelToken = new axios.CancelToken((cancel) => {
    if (!pendingRequests.has(requestKey)) {
      pendingRequests.set(requestKey, cancel);
    }
  });
  
  return config;
};

/**
 * 移除挂起的请求
 * @param config Axios请求配置
 */
export const removePendingRequest = (config: AxiosRequestConfig): void => {
  const requestKey = generateRequestKey(config);
  
  if (pendingRequests.has(requestKey)) {
    // 如果存在相同请求，取消它
    const cancel = pendingRequests.get(requestKey);
    cancel && cancel('请求被取消，由于重复请求');
    pendingRequests.delete(requestKey);
  }
};

/**
 * 清除所有挂起的请求
 * @param message 取消消息
 */
export const clearPendingRequests = (message = '取消所有请求'): void => {
  pendingRequests.forEach(cancel => {
    cancel(message);
  });
  pendingRequests.clear();
};

/**
 * 创建可手动取消的请求配置
 * @returns 包含请求配置和取消函数的对象
 */
export const createCancellableRequest = (): { 
  config: AxiosRequestConfig; 
  cancel: (message?: string) => void;
} => {
  let cancel: Canceler;
  const config: AxiosRequestConfig = {
    cancelToken: new axios.CancelToken((c) => {
      cancel = c;
    })
  };
  
  return { 
    config, 
    cancel: (message = '请求已手动取消') => cancel(message)
  };
}; 