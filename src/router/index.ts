import { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { AppRouteRecordRaw } from '/#/router';
const Loyouts = () => import('/@/layouts/index.vue');
export const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
    name: '登录',
    component: Loyouts,
    meta: {
      hideChildrenInMenu: true,
    },
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('/@/views/login/index.vue'),
      },
    ],
  },
  {
    path: '/page',
    redirect: '/page1',
    name: 'demo',
    component: Loyouts,
    children: [
      {
        path: '/page1',
        name: 'page1',
        component: () => import('/@/views/demo/page1.vue'),
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('/@/views/demo/page2.vue'),
      },
      {
        path: '/demo1',
        name: 'demo1',
        children: [
          {
            path: '/page3',
            name: 'page3',
            component: () => import('/@/views/demo/page3.vue'),
          },
          {
            path: '/page4',
            name: 'page4',
            component: () => import('/@/views/demo/page4.vue'),
          },
        ],
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes: routes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
