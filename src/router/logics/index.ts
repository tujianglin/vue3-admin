import mitt from '/@/utils/mitt';
import type { RouteLocationNormalized, RouteRecordNormalized } from 'vue-router';

const emitter = mitt();

const key = Symbol();

/* 最后一个路由 */
let lastChangeTab: RouteLocationNormalized;

/* 初始化路由参数 */
export function getRawRoute(route: RouteLocationNormalized): RouteLocationNormalized {
  if (!route) return route;
  const { matched, ...opt } = route;
  return {
    ...opt,
    matched: (matched
      ? matched.map((i) => ({
          name: i.name,
          meta: i.meta,
          path: i.path,
        }))
      : undefined) as RouteRecordNormalized[],
  };
}

/* 设置路由 */
export function setRouteChange(route: RouteLocationNormalized) {
  const r = getRawRoute(route);
  emitter.emit(key, r);
  lastChangeTab = r;
}

/* 监听路由变化 */
export function listenerRouteChange(
  callback: (route: RouteLocationNormalized) => void,
  immediate = true,
) {
  emitter.on(key, callback);
  immediate && lastChangeTab && callback(lastChangeTab);
}
