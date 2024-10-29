<template>
  <div class="relative h-screen w-screen">
    <div class="h-full w-full p-10 flex justify-center items-center">
      <img
        class="max-h-full max-w-full"
        src="/public/wall.jpg"
        alt=""
        srcset=""
      />
    </div>
    <div class="absolute top-0 h-full w-full">
      <bullet-screen v-if="mounted" :quantity="7" :magazine="messages" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores/message-store';
import { onMounted, ref, watch } from 'vue';

const { messages, getShuffleMessage } = useMessageStore();

const mounted = ref(false);

watch(
  () => messages,
  () => {
    if (!messages.length) {
      void getShuffleMessage();
    }
  },
  {
    deep: true,
  },
);

onMounted(async () => {
  await getShuffleMessage();

  mounted.value = true;
});
</script>
