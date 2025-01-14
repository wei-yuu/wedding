<template>
  <div class="relative h-screen w-screen flex justify-center items-center">
    <div
      class="relative w-[75vw] h-[90vh] bg-gray-300/30 rounded-xl [border-image:url('/board-border.png')_300_/_9%_7%_space] border-[20px]"
    >
      <template v-if="initFinish">
        <!-- <youtube-player id="PLEROZ9PIiEwFLgV6pmglKtdJDM472YTjO" /> -->
        <bullet-background :model-value="backgrounds" />
        <div class="absolute top-0 h-full w-full">
          <bullet-screen :quantity="bulletQuantity" :magazine="messages" />
        </div>
      </template>
    </div>
    <div class="absolute right-6 bottom-16">
      <ui-note-sticky text="我要留言！" @click="showWishes = true" />
    </div>
    <message-wishes v-model:visible="showWishes" />
  </div>
</template>

<script setup lang="ts">
import { useMessageStore } from '@/stores/message-store';
import { onMounted, ref, watch } from 'vue';

const { backgrounds, messages, getShuffleMessage, getShuffleBackground, init } =
  useMessageStore();

const showWishes = ref(false);
const initFinish = ref(false);
const bulletQuantity = ref(7);

watch(
  () => messages,
  async () => {
    if (messages.length < bulletQuantity.value + 1) {
      await getShuffleMessage();
    }
  },
  {
    deep: true,
  },
);
watch(
  () => backgrounds,
  async () => {
    if (!backgrounds.length) {
      await getShuffleBackground();
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
