import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
  const visible = ref(false);
  const message = ref('');

  const show = (_message: string) => {
    visible.value = true;
    message.value = _message;
  };

  const hide = () => {
    visible.value = false;
    message.value = '';
  };

  return {
    visible: readonly(visible),
    message: readonly(message),
    show,
    hide,
  };
});
