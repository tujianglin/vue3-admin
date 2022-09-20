import { defineAsyncComponent } from 'vue';
import { Spin } from 'ant-design-vue';

export const ThemeColorPicker = defineAsyncComponent({
  loader: () => import('./ThemeColorPicker.vue'),
  loadingComponent: <Spin></Spin>,
  delay: 200,
});
