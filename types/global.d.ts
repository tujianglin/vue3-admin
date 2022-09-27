/* 全局常量 */
declare const __APP_INFO__: string;

/* 环境变量 */
declare interface ViteEnv {
  VITE_MOCK: boolean;
  VITE_PORT: number;
  VITE_APP_NAME: string;
  VITE_PROXY: [string, string][];
}
