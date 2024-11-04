import { useNotifyStore } from '@/stores/ui/notify-store';
import { ButtonColor, type Button } from '@/types/components/ui/button.type';
import { type App, type VNode } from 'vue';

const alert = async ({
  title,
  message,
  options,
}: {
  title: string;
  message?: string | VNode;
  options?: {
    button?: Partial<Button>;
  };
}): Promise<boolean> => {
  const store = useNotifyStore();
  return await new Promise((resolve, reject) => {
    store
      .show({
        title,
        message,
        buttons: [
          {
            text: options?.button?.text ?? '關閉',
            color: options?.button?.color ?? ButtonColor.Gradient,
            callback:
              options?.button?.callback ??
              (() => {
                store.visible = false;
                resolve(true);
              }),
          },
        ],
      })
      .then(() => resolve(true))
      .catch((error) => reject(error));
  });
};

const confirm = async ({
  title,
  message,
  options,
}: {
  title: string;
  message?: string | VNode;
  options?: {
    cancelButton?: Partial<Button>;
    confirmButton?: Partial<Button>;
  };
}): Promise<boolean> => {
  const store = useNotifyStore();

  return await new Promise((resolve, reject) => {
    store
      .show({
        title,
        message,
        buttons: [
          {
            text: options?.cancelButton?.text ?? '取消',
            color: options?.cancelButton?.color ?? ButtonColor.Gray,
            callback:
              options?.cancelButton?.callback ??
              (() => {
                store.visible = false;
                resolve(false);
              }),
          },
          {
            text: options?.confirmButton?.text ?? '確定',
            color: options?.confirmButton?.color ?? ButtonColor.Pink,
            callback:
              options?.confirmButton?.callback ??
              (() => {
                store.visible = false;
                resolve(true);
              }),
          },
        ],
      })
      .then(() => resolve(false))
      .catch((error) => reject(error));
  });
};

export const appNotify = {
  alert,
  confirm,
};

export default {
  install: (app: App) => {
    app.config.globalProperties.$notify = appNotify;
  },
};
