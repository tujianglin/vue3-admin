import { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { AppRouteRecordRaw } from '/#/router';
// const Loyouts = () => import('/@/layouts/index.vue');
const routes: AppRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
    // component: Loyouts,
    children: [
      {
        path: '/login',
        component: () => import('/@/views/login/index.vue'),
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
