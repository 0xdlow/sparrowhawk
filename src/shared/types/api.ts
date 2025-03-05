/**
 * 通用API响应接口
 */
export interface ApiResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

/**
 * 分页查询参数
 */
export interface PaginationParams {
  page: number;
  limit: number;
  [key: string]: any;
}

/**
 * 分页响应数据
 */
export interface PaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * 分页响应
 */
export type PaginatedResponse<T> = ApiResponse<PaginatedData<T>>;

/**
 * 排序方向
 */
export type SortDirection = 'asc' | 'desc';

/**
 * 排序参数
 */
export interface SortParams {
  field: string;
  direction: SortDirection;
}

/**
 * HTTP方法
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

/**
 * API错误响应
 */
export interface ApiErrorResponse {
  code: number;
  message: string;
  details?: any;
} 