declare global {
  // 全局环境变量类型定义
  interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_API_VERSION: string;
    readonly VITE_API_ENABLE_LOGGING: string;
    readonly VITE_API_TIMEOUT: string;
    // 更多环境变量...
  }

  // 确保 import.meta.env 使用定义的接口
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  // 全局窗口扩展
  interface Window {
    // 可以添加全局特性或第三方库声明
  }
}

// 全局工具类型
type Nullable<T> = T | null | undefined;
type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;
type RecordAny = Record<string, any>;

// 确保被视为模块
export {}; 