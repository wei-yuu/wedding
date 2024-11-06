import { ButtonColor, type Button } from '@/types/components/ui/button.type';
import { defineStore } from 'pinia';
import type { VNode } from 'vue';

interface NotifyState {
  visible: boolean;
  message?: string | VNode;
  title: string;
  buttons?: Button[];
}

export const useNotifyStore = defineStore('notify', {
  state: (): NotifyState => {
    return {
      visible: false,
      message: '',
      title: '',
      buttons: [],
    };
  },
  actions: {
    async show(payload: Omit<NotifyState, 'visible'>) {
      this.$reset();

      await new Promise<void>((resolve) => {
        const subscribe = this.$subscribe((_, state) => {
          if (!state.visible) {
            subscribe();
            resolve();
          }
        });

        this.visible = true;
        this.message = payload.message;
        this.title = payload.title;
        this.buttons = payload.buttons ?? [
          {
            text: '關閉',
            color: ButtonColor.Gray,
            callback: () => (this.visible = false),
          },
        ];
      });
    },
  },
});
