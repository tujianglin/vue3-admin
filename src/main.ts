import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.variable.min.css';
import 'virtual:windi.css';
import { setupRouter } from './router';
import { setupStore } from './store';
import { setupI18n } from './locales';

async function bootstrap() {
  const app = createApp(App);

  // 配置 store
  setupStore(app);
  // 配置 多语言
  await setupI18n(app);
  // 配置 路由
  await setupRouter(app);

  app.mount('#app');
}

bootstrap();
