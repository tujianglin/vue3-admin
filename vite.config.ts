import { defineConfig, loadEnv } from 'vite';

import dayjs from 'dayjs';
import { resolve } from 'path';

import { createVitePlugins } from './build/vite/plugin';
import { createProxy } from './build/vite/proxy';
import { wrapperEnv } from './build/utils';
import pkg from './package.json';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}
const { name, version } = pkg;
const __APP_INFO__ = {
  pkg: { name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  const viteEnv = wrapperEnv(env);
  const { VITE_PORT, VITE_PROXY } = viteEnv;
  const isBuild = command === 'build';
  return {
    // 服务器
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    // 地址别名
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    // css 配置
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
          additionalData: `
            @import "ant-design-vue/lib/style/themes/default.less";
            `,
        },
      },
    },
    // 定义全局常量
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    // 插件
    plugins: createVitePlugins(viteEnv, isBuild),
  };
});
