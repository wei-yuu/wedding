<template>
  <div class="contents">
    <!-- Opposite -->
    <div
      :class="{
        'col-start-1 justify-self-end pe-6': index % 2 === 0,
        'col-start-3 ps-6': index % 2 === 1,
      }"
    >
      <slot name="opposite">
        <span class="text-2xl">{{ year }} 年 {{ month }} 月</span>
      </slot>
    </div>
    <!-- Divider -->
    <div
      class="relative col-start-2 flex h-full flex-col items-center"
      :class="[dividerAlign]"
    >
      <slot name="divider">
        <span class="absolute top-[-24px] h-6 w-1 bg-gray-300" />
        <span
          class="h-7 w-7 rounded-full border-4 bg-gray-300"
          :class="{
            'border-gray-300': fullDot,
          }"
        />
        <span class="absolute h-full w-1 bg-gray-300" />
      </slot>
    </div>
    <!-- Default -->
    <div
      :class="{
        'col-start-1 pe-6': index % 2 === 1,
        'col-start-3 ps-6': index % 2 === 0,
      }"
    >
      <slot>
        <h2 class="mb-4 text-3xl">{{ title }}</h2>
        <slot name="content">
          <div class="w-full text-2xl">
            <img
              v-if="photo"
              class="max-w-[50%] ml-5 float-right"
              :src="photo"
            />
            <span class="text-wrap break-all">{{ content }}</span>
          </div>
        </slot>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTimelineStore } from '@/stores/ui/timeline/timeline.store';
import { computed } from 'vue';

defineProps<{
  align?: 'start' | 'center';
  fullDot?: boolean;
  index: number;
  year: string;
  month: string;
  content: string;
  title: string;
  photo?: string;
}>();

const store = useTimelineStore();

const dividerAlign = computed(() => {
  switch (store.align) {
    case 'center':
      return 'justify-center';
    case 'start':
    default:
      return 'justify-start';
  }
});
</script>
