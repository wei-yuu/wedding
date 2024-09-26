<template>
  <ui-timeline align="center">
    <ui-timeline-item
      v-for="(item, index) in timelineItems"
      :key="index"
      :index="index"
      :item="item"
      :full-dot="item.fullDot"
      :color="item.color"
    >
      <template #opposite="{ item: { year, month } }">
        <span class="text-2xl">{{ year }} 年 {{ month }} 月</span>
      </template>
      <template #default="{ item: { title, photo, content } }">
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
      </template>
    </ui-timeline-item>
  </ui-timeline>
</template>

<script setup lang="ts">
import type { Story } from '@/types/story.type';
import { computed } from 'vue';

const props = defineProps<{
  stories: Story[];
}>();

const timelineItems = computed(() => {
  return props.stories.map((story) => {
    return {
      year: story.year,
      month: story.month,
      title: story.title,
      content: story.content,
      photo: story.photo,
      fullDot: story.majorEvent,
      color: story.color,
    };
  });
});
</script>
