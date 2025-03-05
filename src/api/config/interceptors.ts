import type { AxiosInstance, AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { handleApiError } from '../helpers/errorHandler';
import { getToken } from '../helpers/authHelper';

/**
 * 设置axios实例的请求和响应拦截器
 * @param instance axios实例
 */
export const setupInterceptors = (instance: AxiosInstance): void => {
  // 请求拦截器
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
      // 添加认证Token
      const token = getToken();
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }

      // 可以在这里添加其他请求预处理
      // 例如添加特定的headers、修改请求数据格式等

      return config;
    },
    (error: AxiosError): Promise<AxiosError> => {
      // 请求错误处理
      console.error('Request error:', error);
      return Promise.reject(error);
    }
  );

  // 响应拦截器
  instance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
      // 统一处理响应数据
      // 例如只返回response.data，或添加特定的数据处理逻辑
      
      // 这里假设API的标准响应格式为 { code: number, data: any, message: string }
      const { data } = response;
      
      // 如果API有自定义的错误码，可以在这里检查
      if (data && data.code !== undefined && data.code !== 0 && data.code !== 200) {
        // 业务逻辑错误，转为Promise.reject处理
        const error = new Error(data.message || 'API返回错误');
        return Promise.reject(error);
      }
      
      return response;
    },
    (error: AxiosError) => {
      // 统一错误处理
      return handleApiError(error);
    }
  );
}; 