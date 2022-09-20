import { defineStore } from 'pinia';
import { ConfigProvider } from 'ant-design-vue';
import { Storage } from '/@/utils/storage';
import { StorageEnum } from '/@/enums/storageEnum';
import { LocalTheme } from '/#/storage';

interface AppState {
  themeConfig: LocalTheme;
}

/* 缓存主题配置 */
const localThemeConfig = Storage.getLocal<LocalTheme>(StorageEnum.THEME_KEY) || {};

const { primaryColor } = localThemeConfig;

primaryColor &&
  ConfigProvider.config({
    theme: {
      primaryColor,
    },
  });

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    themeConfig: {
      ...localThemeConfig,
    },
  }),
  actions: {
    /* 主题配置 */
    setTheme(theme: Partial<LocalTheme>) {
      Object.keys(theme).map((key) => {
        this.themeConfig[key] = theme[key];
      });
      Storage.setLocal(StorageEnum.THEME_KEY, this.themeConfig);
    },
    /* 主题颜色配置 */
    setThemeColor(theme: LocalTheme) {
      this.themeConfig.primaryColor = theme.primaryColor;
      ConfigProvider.config({
        theme: {
          primaryColor: theme.primaryColor,
        },
      });
      Storage.setLocal(StorageEnum.THEME_KEY, this.themeConfig);
    },
  },
});
