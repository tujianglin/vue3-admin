import { defineStore } from 'pinia';
import { toRaw, unref } from 'vue';
import { RouteLocationNormalized, RouteLocationRaw, Router } from 'vue-router';
import { store } from '/@/store';
import { PageEnum } from '/@/enums/pageEnum';

const getToTarget = (tabItem: RouteLocationNormalized) => {
  const { params, path, query } = tabItem;
  return {
    params: params || {},
    path,
    query: query || {},
  };
};

export interface multipleTabState {
  tabList: RouteLocationNormalized[];
}

export const useMultipleTabStore = defineStore('app-multiple-tab', {
  state: (): multipleTabState => ({ tabList: [] }),
  actions: {
    /* 添加标签 */
    async addTab(route: RouteLocationNormalized) {
      const { fullPath, path, params, query } = route;
      // 判断标签路径是否是特殊路径
      if (path === PageEnum.BASE_LOGIN) return;
      let updateIndex = -1;
      // 当前标签是否存在, 不需要重复标签
      const tabHasExits = this.tabList.some((tab, index) => {
        updateIndex = index;
        return (tab.fullPath || tab.path) === (fullPath || path);
      });
      if (tabHasExits) {
        // 如果标签卡已存在执行更新操作
        const curTab = toRaw(this.tabList)[updateIndex];
        if (!curTab) return;
        curTab.params = params || curTab.params;
        curTab.query = query || curTab.query;
        curTab.fullPath = fullPath || curTab.fullPath;
        this.tabList.splice(updateIndex, 1, curTab);
      } else {
        this.tabList.push(route);
      }
    },
    /* 根据key删除标签 */
    async closeTabByKey(key: string, router: Router) {
      const index = this.tabList.findIndex((i) => (i.fullPath || i.path) === key);
      if (index !== -1) {
        await this.closeTab(this.tabList[index], router);
      }
    },
    /* 关闭标签 */
    async closeTab(tab: RouteLocationNormalized, router: Router) {
      const close = (route: RouteLocationNormalized) => {
        const { fullPath, meta: { affix } = {} } = route;
        if (affix) return;
        const index = this.tabList.findIndex((i) => i.fullPath === fullPath);
        index !== -1 && this.tabList.splice(index, 1);
      };
      const { currentRoute, replace } = router;
      const { path } = unref(currentRoute);
      if (path !== tab.path) {
        close(tab);
        return;
      }
      // 删除之后跳转的目标
      let toTarget: RouteLocationRaw = {};
      const index = this.tabList.findIndex((i) => i.path === path);
      if (index === 0) {
        // 当下标为0的时, 删除跳转到右边标签
        if (this.tabList.length === 1) {
        } else {
          const page = this.tabList[index + 1];
          toTarget = getToTarget(page);
        }
      } else {
        // 删除之后跳转左边标签
        const page = this.tabList[index - 1];
        toTarget = getToTarget(page);
      }
      close(currentRoute.value);
      await replace(toTarget);
    },
  },
});

export function useMultipleTabWithOutStore() {
  return useMultipleTabStore(store);
}
