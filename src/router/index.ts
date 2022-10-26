import { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { AppRouteRecordRaw } from '/#/router';
const Loyouts = () => import('/@/layouts/index.vue');
export const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Loyouts,
    meta: {
      hideChildrenInMenu: true,
      icon: 'ep:avatar',
      title: '首页',
      affix: true,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: () => import('/@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/page',
    redirect: '/page1',
    name: 'Page',
    component: Loyouts,
    meta: {
      icon: 'ep:briefcase',
      title: '页面-1',
    },
    children: [
      {
        path: '/page1',
        name: 'Page1',
        meta: {
          title: '页面1',
        },
        component: () => import('/@/views/demo/page1.vue'),
      },
      {
        path: '/page2',
        name: 'page2',
        meta: {
          title: '页面2',
        },
        component: () => import('/@/views/demo/page2.vue'),
      },
      {
        path: '/demo1',
        name: 'demo1',
        meta: {
          title: '页面-2',
        },
        children: [
          {
            path: '/page3',
            name: 'page3',
            meta: {
              title: '页面3',
            },
            component: () => import('/@/views/demo/page3.vue'),
          },
          {
            path: '/page4',
            name: 'page4',
            meta: {
              title: '页面3',
            },
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
