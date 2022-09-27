import { LocalAppConfig } from '/#/storage';

/* class 前缀 */
export const prefixCls = 't';

/* 默认 主题颜色 */
export const primaryColor = '#1890ff';

/* app 主题颜色列表 */
export const APP_PRESET_COLOR_LIST: string[] = [
  primaryColor,
  '#0084f4',
  '#009688',
  '#536dfe',
  '#ff5c93',
  '#ee4f12',
  '#0096c7',
  '#9c27b0',
  '#ff9800',
];

/* app 默认配置 */
export const defAppConfig: LocalAppConfig = {
  primaryColor: '#1890ff',
  locale: 'zh_CN',
  collapsed: false,
};
