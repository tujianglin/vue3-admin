import { ref, toRaw } from 'vue';
import type { RouteLocationNormalized } from 'vue-router';
import { useRouter } from 'vue-router';
import { useMultipleTabStore } from '/@/store/modules/multipleTab';

/* 初始化固定标签 */
export function initAffixTabs() {
  const affixList = ref<RouteLocationNormalized[]>([]);
  const tabStore = useMultipleTabStore();
  const router = useRouter();
  // 筛选固定标签
  function filterAffixTabs(routes: RouteLocationNormalized[]) {
    const tabs: RouteLocationNormalized[] = [];
    routes &&
      routes.forEach((route) => {
        if (route.meta?.affix) {
          tabs.push(toRaw(route));
        }
      });
    return tabs;
  }
  /* 添加固定标签 */
  function addAffixTabs() {
    const affixTabs = filterAffixTabs(router.getRoutes() as unknown as RouteLocationNormalized[]);
    affixList.value = affixTabs;
    for (const tab of affixTabs) {
      tabStore.addTab({
        meta: tab.meta,
        name: tab.name,
        path: (tab as any)?.redirect || tab.path,
      } as unknown as RouteLocationNormalized);
    }
  }
  let isAddAffix = false;
  if (!isAddAffix) {
    addAffixTabs();
    isAddAffix = true;
  }
  return affixList.value.map((i) => i.meta?.title).filter(Boolean) as string[];
}
