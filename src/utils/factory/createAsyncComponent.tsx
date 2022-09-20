/**
 * 创建异步组件工厂函数
 */
import { defineAsyncComponent } from 'vue';
import { Spin } from 'ant-design-vue';
interface Options {
  size?: 'default' | 'small' | 'large';
  delay?: number;
  timeout?: number;
  loading?: boolean;
}
export function createAsyncComponent(loader: Fn, option: Options = {}) {
  const { size = 'small', delay = 100, timeout = 3000, loading = true } = option;
  return defineAsyncComponent({
    loader,
    loadingComponent: loading ? <Spin spinning={true} size={size}></Spin> : undefined,
    delay,
    timeout,
  });
}
