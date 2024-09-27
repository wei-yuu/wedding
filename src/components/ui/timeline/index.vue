<template>
  <div
    class="m-auto grid grid-flow-dense grid-cols-[auto_min-content_auto] gap-y-6 p-6 lg:max-w-[1280px] justify-self-center"
    :class="[alignClass]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useTimelineStore } from '@/stores/ui/timeline/timeline.store';
import type { TimelineProps } from '@/types/components/ui/timeline.type';
import { computed, onMounted } from 'vue';

const props = defineProps<TimelineProps>();

const store = useTimelineStore();

const alignClass = computed(() => {
  switch (store.align) {
    case 'center':
      return 'items-center';
    case 'start':
    default:
      return 'items-start';
  }
});

onMounted(() => {
  store.updateState(props);
});
</script>
