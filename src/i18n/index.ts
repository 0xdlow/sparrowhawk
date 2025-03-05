import { createI18n } from 'vue-i18n';
import enUS from './locales/en-US';
import zhCN from './locales/zh-CN';

// 支持的语言类型
export type SupportedLocale = 'en-US' | 'zh-CN';

// 获取浏览器语言
const getBrowserLanguage = (): SupportedLocale => {
  const navigatorLang = navigator.language;
  if (navigatorLang.includes('zh')) {
    return 'zh-CN';
  }
  return 'en-US';
};

// 获取保存的语言或使用浏览器语言
const getDefaultLanguage = (): SupportedLocale => {
  const savedLanguage = localStorage.getItem('language') as SupportedLocale;
  return (savedLanguage && ['en-US', 'zh-CN'].includes(savedLanguage)) 
    ? savedLanguage 
    : getBrowserLanguage();
};

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 使用组合式API
  locale: getDefaultLanguage(),
  fallbackLocale: 'en-US',
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
});

// 设置语言的工具函数
export const setLanguage = (lang: SupportedLocale): void => {
  i18n.global.locale.value = lang;
  localStorage.setItem('language', lang);
  document.querySelector('html')?.setAttribute('lang', lang);
};

// 获取当前语言
export const getCurrentLanguage = (): SupportedLocale => {
  return i18n.global.locale.value as SupportedLocale;
};

// 添加新语言包
export const addLocale = (locale: string, messages: any): void => {
  i18n.global.setLocaleMessage(locale, messages);
};

export default i18n; 