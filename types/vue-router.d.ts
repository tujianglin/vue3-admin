export {};

/* 自定义 vue-router Meta 全局类型 */
declare module 'vue-router' {
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    /* 是否固定标签 */
    affix?: boolean;
    /* 标签名称 */
    title?: string;
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
  }
}
