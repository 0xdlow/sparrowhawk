import type { AxiosError } from 'axios';

/**
 * 自定义API错误类
 */
export class ApiError extends Error {
  status: number;
  code?: string | number;
  data?: any;

  constructor(message: string, status: number = 500, code?: string | number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.data = data;
  }
}

/**
 * 处理API请求错误
 * @param error Axios错误对象
 * @returns 包含处理后错误信息的Promise
 */
export const handleApiError = (error: AxiosError): any => {
  if (error.response) {
    // 服务器返回了错误状态码
    const { status, data } = error.response;
    
    // 根据状态码处理特定错误
    switch (status) {
      case 401:
        // 处理未授权错误，例如重定向到登录页
        console.error('未授权，请登录');
        // 这里可以调用logout函数或触发相应事件
        break;
      case 403:
        console.error('没有权限访问此资源');
        break;
      case 404:
        console.error('请求的资源不存在');
        break;
      case 500:
        console.error('服务器内部错误');
        break;
    }

    // 创建自定义错误对象
    const apiError = new ApiError(
      (data as any)?.message || `请求失败(${status})`,
      status,
      (data as any)?.code,
      data
    );

    return Promise.reject(apiError);
  } else if (error.request) {
    // 请求已发送但没有收到响应
    console.error('网络错误，未收到响应');
    return Promise.reject(new ApiError('网络错误，请检查网络连接', 0));
  } else {
    // 在设置请求时发生错误
    console.error('请求配置错误', error.message);
    return Promise.reject(new ApiError('请求配置错误', 0));
  }
}; 