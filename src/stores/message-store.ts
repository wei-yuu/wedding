import { useGetBackgrounds } from '@/composables/message/use-get-background';
import { useGetMessages } from '@/composables/message/use-get-message';
import { appLoading } from '@/plugins/app-loading';
import { appNotify } from '@/plugins/app-notify';
import type { Background, Message } from '@/types/message.type';
import { shuffle } from '@/utils/shuffle';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMessageStore = defineStore('message', () => {
  const getMessages = useGetMessages();
  const getBackgrounds = useGetBackgrounds();

  const messages = ref<Message[]>([]);
  const backgrounds = ref<Background[]>([]);

  const getShuffleMessage = async () => {
    const dataList = await getMessages.fetch();

    if (dataList.value) {
      const messageList = shuffle(dataList.value);

      messageList.forEach((data) => {
        const [name, message] = data;

        messages.value.push({
          name,
          message,
        });
      });
    }
  };

  const getShuffleBackground = async () => {
    const dataList = await getBackgrounds.fetch();

    if (dataList.value) {
      const backgroundList = shuffle(dataList.value);

      backgrounds.value.push(
        ...backgroundList.map((background) => {
          return {
            id: background.id,
            name: background.name,
          };
        }),
      );
    }
  };

  const init = async (): Promise<boolean> => {
    appLoading.start('正在尋找祝福~');

    try {
      await getShuffleMessage();
      await getShuffleBackground();
    } catch (e) {
      throw new Error(String(e));
    } finally {
      appLoading.stop();
    }

    const result = await appNotify.alert({
      title: '祝福已就定位！',
      options: {
        button: {
          text: '讓我們開始吧～ε٩(๑> ₃ <)۶з',
        },
      },
    });

    return result;
  };

  return {
    messages,
    backgrounds,
    init,
    getShuffleMessage,
    getShuffleBackground,
  };
});
