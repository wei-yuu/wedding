<template>
  <div class="contents">
    <!-- Opposite -->
    <div
      :class="{
        'col-start-1 justify-self-end pe-6': index % 2 === 0,
        'col-start-3 ps-6': index % 2 === 1,
      }"
    >
      <slot name="opposite" :item="item" />
    </div>
    <!-- Divider -->
    <div
      class="relative col-start-2 flex h-full flex-col items-center"
      :class="[dividerAlign]"
    >
      <slot name="divider">
        <span class="absolute top-[-24px] h-6 w-1 bg-gray-300" />
        <span
          class="z-10 h-7 w-7 rounded-full"
          :class="[
            dotColor,
            {
              'border-4': !fullDot,
            },
          ]"
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
      <slot :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
import { useTimelineStore } from '@/stores/ui/timeline/timeline.store';
import { computed } from 'vue';

const props = defineProps<{
  align?: 'start' | 'center';
  color?: string;
  fullDot?: boolean;
  index: number;
  item: T;
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

const dotColor = computed(() => {
  return props.color
    ? {
        pink: 'bg-pink',
        blue: 'bg-blue',
        gray: 'bg-gray-300',
      }[props.color]
    : 'bg-gray-300';
});
</script>
