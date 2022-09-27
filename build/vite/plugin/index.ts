import { PluginOption } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import legacy from '@vitejs/plugin-legacy';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import windiCSS from 'vite-plugin-windicss';
import { configMockPlugin } from './mock';

import { configVisualizerPlugin } from './visualizer';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_MOCK } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    windiCSS(),
  ];

  isBuild && vitePlugins.push(legacy());

  VITE_MOCK && vitePlugins.push(configMockPlugin(isBuild));

  vitePlugins.push(configVisualizerPlugin());

  return vitePlugins;
}
