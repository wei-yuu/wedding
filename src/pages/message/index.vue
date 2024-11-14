<template>
  <div class="relative h-screen w-screen">
    <template v-if="initFinish">
      <youtube-player id="PLEROZ9PIiEwFLgV6pmglKtdJDM472YTjO" />
      <bullet-background :model-value="backgrounds" />
      <div class="absolute top-0 h-full w-full">
        <bullet-screen :quantity="bulletQuantity" :magazine="messages" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores/message-store';
import { onMounted, ref, watch } from 'vue';

const { backgrounds, messages, getShuffleMessage, getShuffleBackground, init } =
  useMessageStore();

const initFinish = ref(false);
const bulletQuantity = ref(7);

watch(
  () => messages,
  () => {
    if (messages.length < bulletQuantity.value + 1) {
      void getShuffleMessage();
    }
  },
  {
    deep: true,
  },
);
watch(
  () => backgrounds,
  () => {
    if (!backgrounds.length) {
      void getShuffleBackground();
    }
  },
  {
    deep: true,
  },
);

onMounted(async () => {
  initFinish.value = await init();
});
</script>
