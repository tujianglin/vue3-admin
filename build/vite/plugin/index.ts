import { PluginOption } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { configStyleImportPlugin } from './styleImport';
import { configVisualizerPlugin } from './visualizer';
import { configThemePlugin } from './theme';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {} = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx(), vueSetupExtend()];

  isBuild && vitePlugins.push(legacy());

  vitePlugins.push(configStyleImportPlugin());

  vitePlugins.push(configVisualizerPlugin());

  vitePlugins.push(configThemePlugin());

  return vitePlugins;
}
