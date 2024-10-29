import { useGetMessages } from '@/composables/message/use-get-message';
import { useGetPhotos } from '@/composables/message/use-get-photos';
import type { Message } from '@/types/message.type';
import { shuffle } from '@/utils/shuffle';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMessageStore = defineStore('message', () => {
  const getMessages = useGetMessages();
  const getPhotos = useGetPhotos();

  const messages = ref<Message[]>([]);

  const getShuffleMessage = async () => {
    // const photos = await getPhotos.fetch();
    const dataList = await getMessages.fetch();

    if (dataList.value) {
      const messageList = shuffle(dataList.value);

      messageList.map((data) => {
        const [name, message] = data;

        if (message === '無') return;

        messages.value.push({
          name,
          message,
        });
      });
    }
  };

  return {
    messages,
    getShuffleMessage,
  };
});
