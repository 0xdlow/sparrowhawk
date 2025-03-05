// 配置
import { httpClient, createHttpClient } from './config';

// 助手函数
import { handleApiError, ApiError } from './helpers/errorHandler';
import { getToken, saveToken, removeToken, isAuthenticated } from './helpers/authHelper';
import { requestWithRetry } from './helpers/retryHelper';
import { 
  addCancelToken, 
  removePendingRequest, 
  clearPendingRequests, 
  createCancellableRequest 
} from './helpers/cancelHelper';

// 服务
import userService from './services/userService';

// 导出所有内容
export {
  // 配置
  httpClient,
  createHttpClient,
  
  // 助手函数
  handleApiError,
  ApiError,
  getToken,
  saveToken,
  removeToken,
  isAuthenticated,
  requestWithRetry,
  addCancelToken,
  removePendingRequest,
  clearPendingRequests,
  createCancellableRequest,
  
  // 服务
  userService
};

// 默认导出所有服务
export default {
  user: userService,
  // 添加更多服务...
}; 