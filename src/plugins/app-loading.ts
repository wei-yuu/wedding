import { useLoadingStore } from '@/stores/ui/loading-store';
import { type App } from 'vue';

const start = (message: string, icon?: string) => {
  const store = useLoadingStore();
  store.show(message, icon);
};

const stop = () => {
  const store = useLoadingStore();
  store.hide();
};

export const appLoading = {
  start,
  stop,
};

export default {
  install: (app: App) => {
    app.config.globalProperties.$loading = appLoading;
  },
};
