import type { TimelineState } from '@/types/store/ui/timeline.type';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTimelineStore = defineStore('timeline', () => {
  const align = ref<'start' | 'center'>('start');

  const updateState = (props: TimelineState) => {
    align.value = props.align;
  };

  return {
    align,
    updateState,
  };
});
