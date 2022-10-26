import type { RouteLocationRaw, Router } from 'vue-router';
import { useRouter } from 'vue-router';

function handleError(e: Error) {
  console.error(e);
}

/* 跳转 */
export function useGo(_router?: Router) {
  const { push, replace } = _router || useRouter();
  function go(opt: RouteLocationRaw, isReplace = false) {
    if (!opt) return;
    isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
  }
  return go;
}
