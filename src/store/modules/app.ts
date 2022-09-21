import { defineStore } from 'pinia';
import { ConfigProvider } from 'ant-design-vue';
import { Storage } from '/@/utils/storage';
import { StorageEnum } from '/@/enums/storageEnum';
import { defAppConfig } from '/@/settings/designSetting';
import { LocalAppConfig } from '/#/storage';
import { store } from '/@/store';

interface AppState {
  appConfig: LocalAppConfig;
}

/* 缓存主题配置 */
const localAppConfig = Storage.getLocal<LocalAppConfig>(StorageEnum.APP_CONFIG) || {};

const { primaryColor = defAppConfig.primaryColor } = localAppConfig;

ConfigProvider.config({
  theme: {
    primaryColor,
  },
});

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    appConfig: {
      ...defAppConfig,
      ...localAppConfig,
    },
  }),
  getters: {
    getAppConfig(): LocalAppConfig {
      return this.appConfig;
    },
  },
  actions: {
    /* APP 配置 */
    setTheme(theme: Partial<LocalAppConfig>) {
      Object.keys(theme).map((key) => {
        this.appConfig[key] = theme[key];
      });
      Storage.setLocal(StorageEnum.APP_CONFIG, this.appConfig);
    },
    /* 主题颜色配置 */
    setThemeColor(color: LocalAppConfig['primaryColor']) {
      this.appConfig.primaryColor = color;
      ConfigProvider.config({
        theme: {
          primaryColor: color,
        },
      });
      Storage.setLocal(StorageEnum.APP_CONFIG, this.appConfig);
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
