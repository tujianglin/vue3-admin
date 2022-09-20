import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.variable.min.css';
import { setupRouter } from './router';

function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  app.mount('#app');
}

bootstrap();
