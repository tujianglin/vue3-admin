import type { Router } from 'vue-router';
import { setRouteChange } from '../logics';

export function setupRouterGuard(router: Router) {
  createPageGuard(router);
}

function createPageGuard(router: Router) {
  router.beforeEach(async (to) => {
    await setRouteChange(to);
    return true;
  });
}
