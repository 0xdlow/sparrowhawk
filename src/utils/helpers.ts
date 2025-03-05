/**
 * 格式化日期
 * @param date 日期对象或日期字符串
 * @param format 格式化字符串，默认为 YYYY-MM-DD
 * @returns 格式化后的日期字符串
 */
export function formatDate(date: Date | string, format: string = 'YYYY-MM-DD'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  
  let result = format
  result = result.replace('YYYY', String(year))
  result = result.replace('MM', month)
  result = result.replace('DD', day)
  
  return result
}

/**
 * 防抖函数
 * @param fn 需要防抖的函数
 * @param delay 延迟时间，单位为毫秒
 * @returns 防抖处理后的函数
 */
export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: number | null = null
  
  return function(this: any, ...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer)
    }
    
    timer = window.setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

/**
 * 将对象转换为URL查询参数
 * @param params 参数对象
 * @returns URL查询参数字符串
 */
export function objectToQueryString(params: Record<string, any>): string {
  return Object.keys(params)
    .filter(key => params[key] !== undefined && params[key] !== null)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')
} 