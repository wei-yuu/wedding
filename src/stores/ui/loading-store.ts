import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useLoadingStore = defineStore('loading', () => {
  const visible = ref(false);
  const message = ref('');
  const icon = ref<string>();

  const show = (_message: string, _icon?: string) => {
    visible.value = true;
    message.value = _message;
    icon.value = _icon;
  };

  const hide = () => {
    visible.value = false;
    message.value = '';
    icon.value = undefined;
  };

  return {
    visible: readonly(visible),
    message: readonly(message),
    icon: readonly(icon),
    show,
    hide,
  };
});
