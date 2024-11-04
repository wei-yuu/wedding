<template>
  <div class="relative h-screen w-screen">
    <template v-if="initFinish">
      <youtube-player id="PLEROZ9PIiEwFLgV6pmglKtdJDM472YTjO" />
      <bullet-background :model-value="store.backgrounds" />
      <div class="absolute top-0 h-full w-full">
        <bullet-screen :quantity="7" :magazine="store.messages" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores/message-store';
import { onMounted, ref, watch } from 'vue';

const store = useMessageStore();
const { getShuffleMessage, getShuffleBackground, init } = store;

const initFinish = ref(false);

watch(
  () => store.messages,
  () => {
    if (!store.messages.length) {
      void getShuffleMessage();
    }
  },
  {
    deep: true,
  },
);
watch(
  () => store.backgrounds,
  () => {
    if (!store.backgrounds.length) {
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
