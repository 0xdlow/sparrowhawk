import { httpClient } from '../config';
import { requestWithRetry } from '../helpers/retryHelper';
import { createCancellableRequest } from '../helpers/cancelHelper';
import type { AxiosResponse } from 'axios';

/**
 * 用户接口
 */
export interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role?: string;
  [key: string]: any;
}

/**
 * 登录请求参数
 */
export interface LoginRequest {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * 登录响应
 */
export interface LoginResponse {
  code: number;
  message?: string;
  data?: {
    token: string;
    user: User;
  };
}

/**
 * 用户列表响应
 */
export interface UsersListResponse {
  success: boolean;
  data: {
    users: User[];
    total: number;
    page: number;
    limit: number;
  };
}

/**
 * 用户响应
 */
export interface UserResponse {
  code: number;
  data?: User;
  message?: string;
}

/**
 * 注册请求参数
 */
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * 用户API服务
 */
const userService = {
  /**
   * 用户登录
   * @param data 登录信息
   * @returns Promise with login response
   */
  login: (data: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    return httpClient.post('/api/auth/login', data);
  },

  /**
   * 带重试功能的用户登录
   * @param data 登录信息
   * @returns Promise with login response
   */
  loginWithRetry: (data: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    return requestWithRetry<LoginResponse>({
      url: '/api/auth/login',
      method: 'post',
      data
    });
  },

  /**
   * 可取消的用户登录请求
   * @param data 登录信息
   * @returns 包含Promise和取消函数的对象
   */
  loginCancellable: (data: LoginRequest) => {
    const { config, cancel } = createCancellableRequest();
    
    const request = httpClient.post<LoginResponse>(
      '/api/auth/login', 
      data, 
      config
    );
    
    return { request, cancel };
  },

  /**
   * 用户注册
   * @param data 注册信息
   * @returns Promise with user data
   */
  register: (data: RegisterRequest): Promise<AxiosResponse<UserResponse>> => {
    return httpClient.post('/api/users', {
      username: data.username,
      email: data.email,
      password: data.password
    });
  },

  /**
   * 获取当前用户信息
   * @returns Promise with user data
   */
  getCurrentUser: (): Promise<AxiosResponse<UserResponse>> => {
    return httpClient.get('/api/user/me');
  },

  /**
   * 获取用户列表
   * @param page 页码
   * @param limit 每页数量
   * @returns Promise with users list
   */
  getUsers: (page: number = 1, limit: number = 10): Promise<AxiosResponse<UsersListResponse>> => {
    return httpClient.get('/api/users', {
      params: { page, limit }
    });
  },

  /**
   * 获取指定用户信息
   * @param id 用户ID
   * @returns Promise with user data
   */
  getUser: (id: number): Promise<AxiosResponse<UserResponse>> => {
    return httpClient.get(`/api/users/${id}`);
  },

  /**
   * 更新用户信息
   * @param id 用户ID
   * @param data 用户数据
   * @returns Promise with updated user
   */
  updateUser: (id: number, data: Partial<User>): Promise<AxiosResponse<UserResponse>> => {
    return httpClient.put(`/api/users/${id}`, data);
  },

  /**
   * 删除用户
   * @param id 用户ID
   * @returns Promise with success status
   */
  deleteUser: (id: number): Promise<AxiosResponse<void>> => {
    return httpClient.delete(`/api/users/${id}`);
  }
};

export default userService; 