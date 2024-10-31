<template>
  <div class="h-full w-full p-10 flex justify-center items-center">
    <div class="relative w-full h-full flex justify-center items-center">
      <template v-for="(background, index) in backgrounds" :key="index">
        <transition
          mode="out-in"
          enterActiveClass="transition-opacity ease duration-2000"
          leaveActiveClass="transition-opacity ease duration-2000"
          enterFromClass="opacity-0"
          leaveToClass="opacity-0"
          @afterLeave="changeBackground(index)"
        >
          <img
            v-show="current === index"
            class="absolute max-h-full max-w-full rounded-md shadow-lg"
            :src="`https://drive.google.com/thumbnail?id=${background?.id}&sz=w1366`"
            :alt="background?.name"
          />
        </transition>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Background } from '@/types/message.type';
import { onMounted, onUnmounted, ref } from 'vue';

const modelValue = defineModel<Background[]>();

const current = ref<number>();
const interval = ref<ReturnType<typeof setTimeout>>();
const backgrounds = ref<Background[]>();

const changeBackground = (index: number) => {
  const background = modelValue.value?.shift();
  if (background) {
    backgrounds.value?.splice(index, 1, background);
  }
};

onMounted(async () => {
  backgrounds.value = modelValue.value?.splice(0, 2);

  interval.value = setInterval(async () => {
    if (current.value) current.value = 0;
    else current.value = 1;
  }, 30000);

  current.value = 1;
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>
