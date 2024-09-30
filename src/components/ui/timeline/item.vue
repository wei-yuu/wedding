<template>
  <div class="contents">
    <!-- Opposite -->
    <div :class="[oppositeClass]">
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
    <div :class="[contentClass]">
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

const oppositeClass = computed(() => {
  if (window.innerWidth >= 768) {
    if (props.index % 2 === 1) {
      return 'col-start-3 ps-6';
    }
  }

  return 'col-start-1 justify-self-end pe-6';
});

const contentClass = computed(() => {
  if (window.innerWidth >= 768) {
    if (props.index % 2 === 1) {
      return 'col-start-1 pe-6';
    }
  }

  return 'col-start-3 ps-6';
});

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
