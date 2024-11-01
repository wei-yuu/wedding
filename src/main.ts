import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import appLoading from './plugins/app-loading';
import router from './router';

import '@/styles/index.scss';

const app = createApp(App).use(createPinia()).use(router).use(appLoading);

app.mount('#app');
