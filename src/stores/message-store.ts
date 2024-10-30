import { useGetBackgrounds } from '@/composables/message/use-get-background';
import { useGetMessages } from '@/composables/message/use-get-message';
import type { Background, Message } from '@/types/message.type';
import { shuffle } from '@/utils/shuffle';
import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';

export const useMessageStore = defineStore('message', () => {
  const getMessages = useGetMessages();
  const getBackgrounds = useGetBackgrounds();

  const loading = ref(false);
  const messages = ref<Message[]>([]);
  const backgrounds = ref<Background[]>([]);

  const getShuffleMessage = async () => {
    const dataList = await getMessages.fetch();

    if (dataList.value) {
      const messageList = shuffle(dataList.value);

      messageList.forEach((data) => {
        const [name, message] = data;

        if (message === '無') return;

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

  const init = async () => {
    loading.value = true;

    try {
      await getShuffleMessage();
      await getShuffleBackground();
    } catch (e) {
      throw new Error(String(e));
    } finally {
      loading.value = false;
    }
  };

  return {
    loading: readonly(loading),
    messages,
    backgrounds,
    init,
    getShuffleMessage,
    getShuffleBackground,
  };
});
