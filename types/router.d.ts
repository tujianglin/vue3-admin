import { RouteRecordRaw } from 'vue-router';

/* 应用自定义路由类型 */
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  children?: AppRouteRecordRaw[];
  meta?: {
    /* 显隐菜单 */
    hideMenu?: boolean;
    /* 显隐子菜单 */
    hideChildrenInMenu?: boolean;
    /* 显隐面包屑 */
    hideBreadcrumb?: boolean;
    /* 是否开启页面缓存 */
    keepAlive?: boolean;
    /* 菜单 icon */
    icon?: string;
    /* 标题 */
    title?: string;
  };
}
