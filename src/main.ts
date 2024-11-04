import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import appLoading from './plugins/app-loading';
import appNotify from './plugins/app-notify';
import router from './router';

import '@/styles/index.scss';

const app = createApp(App)
  .use(createPinia())
  .use(router)
  .use(appLoading)
  .use(appNotify);

app.mount('#app');
