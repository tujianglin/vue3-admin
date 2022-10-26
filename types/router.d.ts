import type { RouteRecordRaw, RouteMeta } from 'vue-router';

/* 应用自定义路由类型 */
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  children?: AppRouteRecordRaw[];
  meta?: RouteMeta;
}
